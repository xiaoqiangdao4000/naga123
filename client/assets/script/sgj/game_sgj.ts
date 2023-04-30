import { _decorator, Component, Node, SpriteFrame, Sprite, resources, Prefab, instantiate, EventTarget, randomRangeInt } from 'cc';
import HTTP from '../utils/HTTP';
import { AudioMgr } from '../utils/AudioMgr';
import sgj_data from './sgj_data';

const { ccclass, property } = _decorator;

globalThis.sgjEvent = new EventTarget();

@ccclass('game_sgj')
export class game_sgj extends Component {

    //客户端消息----下注
    cmd_c_bet =
        {
            type: 'cmd_c_bet',
            data: [0, 0, 0, 0, 0, 0, 0, 0],
        }

    //客户端消息----猜大小,//猜大小，0为小（0-7），1为大（8-15）
    cmd_c_bigSmall =
        {
            type: 'cmd_c_bigSmall',
            data: 0, //赌注
        }

    //服务端消息----猜大小
    cmd_s_bigSmall =
        {
            type: 'cmd_s_bigSmall',
            iswin: 0,    //猜大小成功 0失败，1成功。
            bigsmall: 0, //大小的实际数值
            wins_core: 0, //赢分
            user_score: 0,//分数
        }

    //服务端消息----开奖       
    //中奖类型：0-不中奖，1-普通中奖，lucky：2-灭灯，3-翻倍，4-大三元，5-小三元，6-大四喜，7-众横四海，8-仙女散花，9-天龙八部，10-九莲宝灯，11-大满贯
    cmd_s_gameEnd =
        {
            type: 'cmd_s_gameEnd',
            eventid: 0,  //中奖类型：0-不中奖，1-普通中奖，lucky：2-灭灯，3-翻倍，4-大三元，5-小三元，6-大四喜，7-众横四海，8-仙女散花，9-天龙八部，10-九莲宝灯，11-大满贯
            step: [],    //开奖格子,数组[24]
            area: [],    //开奖区域,数组[24]
            tiems: [],   //倍数,数组[24]
            win_score: [], //当前赢分,数组[24]
            user_score: 0,  //分数
            record: [0, 0, 0, 0, 0, 0, 0, 0],   //历史记录
        }

    //倍率
    times = [5, 10, 15, 20, 30, 40, 100];

    //0苹果、1橙子、2木瓜、3铃铛、4西瓜、5双星、677、7bar,8lucky
    //倍率：5,10,15,20,30,40,100

    serverStepName = ['橙子', '铃铛', '小bar', 'bar', '苹果', '小苹果', '木瓜', '西瓜', '小西瓜', 'lucky', '苹果', '小橙子', '橙子', '铃铛', '小77', '77', '苹果', '小木瓜', '木瓜',
        '双星', '小双星', 'lucky', '苹果', '小铃铛'];

    //格子对应的中奖区域
    serverStepArea = [1, 3, 17, 7, 0, 10, 2, 4, 14, 8, 0, 11, 1, 3, 16, 6, 0, 12, 2, 5, 15, 8, 0, 13];

    //游戏数据--------begin------
    gameState = 0;  //游戏状态:0-下注，1-收分，2-比大小
    wins_core = 0;  //赢分
    bet_score = [0, 0, 0, 0, 0, 0, 0, 0];  //下注分数
    bet_start = 0;  //续投

    //游戏数据----------end-------
    start() {
        globalThis.game_sgj = this;
        this.gameState = 0;
        this.bet_start = 0;
        for (let i = 0; i < 8; i++) {
            this.bet_score[i] = 0;
        }
        globalThis.sgj_normal.play()
    }

    //获取游戏结束数据，开始播放动画。
    onGameEnd() {
        //播放第一次动画
        this.cmd_s_gameEnd = sgj_data.getInstance().getEndData(this.bet_score);
        console.log('开始游戏:', this.cmd_s_gameEnd);
        globalThis.sgj_run.play(this.cmd_s_gameEnd.step[0]);
    }

    //正常动画回调
    runCallBack(arg1: string) {
        console.log('水果机回调函数:', arg1);
        console.log('结束数据：', this.cmd_s_gameEnd)

        //清理下注界面
        this.clearBetToZero(1, 0);
        //显示中奖下注区域
        this.showEndArea(this.cmd_s_gameEnd.area[0]);
        //续投
        this.bet_start = 1;

        //普通中奖、闪灯
        if (this.cmd_s_gameEnd.eventid == 1) {
            this.setWinScore(this.cmd_s_gameEnd.win_score[0]);
            this.gameState = 1;
            globalThis.sgj_endFlash.play(this.cmd_s_gameEnd.step);
            //按钮状态
            this.updateButton();
            return;
        }
        else if(this.cmd_s_gameEnd.eventid == 2)//2送灯--灭灯
        {
            
        }
        //没有中奖
        this.gameState = 0;
    }

    updateButton()
    {
        globalThis.sgj_view.all_btn.interactable = true;
        globalThis.sgj_view.left_btn.interactable = true;
        globalThis.sgj_view.right_btn.interactable = true;
        globalThis.sgj_view.small_btn.interactable = true;
        globalThis.sgj_view.big_btn.interactable = true;
        globalThis.sgj_view.go_btn.interactable = true;
        globalThis.sgj_view.bet1_btn.interactable = true;
        globalThis.sgj_view.bet2_btn.interactable = true;
        globalThis.sgj_view.bet3_btn.interactable = true;
        globalThis.sgj_view.bet4_btn.interactable = true;
        globalThis.sgj_view.bet5_btn.interactable = true;
        globalThis.sgj_view.bet6_btn.interactable = true;
        globalThis.sgj_view.bet7_btn.interactable = true;
        globalThis.sgj_view.bet8_btn.interactable = true;
    }

    //设置赢分: 数据，是否刷新界面
    setWinScore(score: number, refresh: boolean = true) {
        this.wins_core = score;
        if (!refresh) return;
        //刷新界面
        globalThis.sgj_view.setWinScoreView(score);
    }

    //获取赢分
    getWinScore() {
        return this.wins_core;
    }

    //设置用户分数:数据，是否刷新界面
    setUserScore(score: number, refresh: boolean = true) {
        globalThis.userMgr.score = score;
        if (!refresh) return;
        //刷新界面
        globalThis.sgj_view.setUserScoreView(score);
    }

    //设置下注分数:数据，是否刷新界面
    setBetScore(area: number, score: number, refresh: boolean = true) {
        if (area < 0 || area > 7) return;
        this.bet_score[area] = score;
        if (!refresh) return;
        //刷新界面
        globalThis.sgj_view.setBetScoreView(area, score);
    }

    //获取下注区域分数
    getBetScore(area: number) {
        if (area < 0 || area > 7) return;
        return this.bet_score[area];
    }

    //获取下注区域总分数
    getAllBetScore() {
        let t_allbet = 0;
        for (let i = 0; i < 8; i++) {
            t_allbet += this.bet_score[i];
        }
        return t_allbet;
    }

    //清理下注为0 view界面、value值 0不清理，1清理
    clearBetToZero(view: number, value: number) {
        if (view == 1) {
            for (let i = 0; i < 8; i++) {
                globalThis.sgj_view.setBetScoreView(i, 0);
            }
        }
        if (value == 1) {
            for (let i = 0; i < 8; i++) {
                this.bet_score[i] = 0;
            }
        }
    }

    //显示中奖下注区域
    showEndArea(area: number) {
        if (area < 0 || area > 7) return;
        globalThis.sgj_view.setBetScoreView(area, this.bet_score[area]);
    }

    //接受消息
    onMessage(type, data) {
        console.log('收到服务器消息：', data);
    }

    //发送消息
    sendMssage(type: any, data: any) {
        let msg = {
            type: type,
            data: data,
        }
        HTTP.getInstance().send(JSON.stringify(msg));
    }

    update(deltaTime: number) {

    }

    onEnable() {
        globalThis.sgjEvent.on('sgj_runcallback', this.runCallBack, this);
    }

    onDisable() {
        globalThis.sgjEvent.off('sgj_runcallback', this.runCallBack, this);
    }
}