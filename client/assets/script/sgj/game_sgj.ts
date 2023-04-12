import { _decorator, Component, Node, SpriteFrame, Sprite, resources, Prefab, instantiate, EventTarget, randomRangeInt } from 'cc';
import HTTP from '../utils/HTTP';
import { AudioMgr } from '../utils/AudioMgr';

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
    //--1 小lucky 2 大lucky 3 翻倍 4 送灯/灭灯 5 大三元 6 小三元  
    //--7 大四喜 8 纵横四海 9 仙女散花 10 天龙八部 11 九莲宝灯 12 大满贯
    cmd_s_gameEnd =
        {
            type: 'cmd_s_gameEnd',
            eventid: 0,  //中奖类型：0-不中奖，1-普通中奖，lucky：2-灭灯，3-翻倍，4-大三元，5-小三元，6-大四喜，7-众横四海，8-仙女散花，9-天龙八部，10-九莲宝灯，11-大满贯
            step: [],    //开奖格子,数组[24]
            area: [],    //开奖区域,数组[24]
            tiems: [],   //倍数,数组[24]
            wins_core: [], //当前赢分,数组[24]
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

    //游戏状态
    gameState = 0; //0-初始-下注，1-结束，2-收分，3

    start() {
        globalThis.sjg_game = this;
        this.gameState = 0;
        globalThis.sgj_normal.play()
    }

    //模拟服务器数据
    getServerData() {

        //获取随机--中奖格子
        let t_step = randomRangeInt(1, 25);

        //倍数
        let bs = randomRangeInt(0, 8);

        //获取玩家下注总和
        let mybetscore = 0;
        for (let i = 0; i < 8; i++) {
            mybetscore += globalThis.sgj_view.bet_score[i];
        }

        //获取中奖区域
        let t_area = this.serverStepArea[t_step];
        if (t_area > 9) t_area = t_area - 10;

        //判断玩家是否中奖
        let winscore = 0;

        //lucky：2-灭灯，3-翻倍，4-大三元，5-小三元，6-大四喜，7-众横四海，8-仙女散花，9-天龙八部，10-九莲宝灯，11-大满贯
        if (t_area == 8) //中lucky、随机1到99倍、送灯
        {
            winscore = mybetscore * randomRangeInt(1, 99);
        }
        else if (globalThis.sgj_view.bet_score[t_area] > 0)  //普通中奖 下注*倍数
        {
            winscore = globalThis.sgj_view.bet_score[t_area] * this.times[bs];
            this.cmd_s_gameEnd.eventid = 1;
            this.cmd_s_gameEnd.step.push(t_step);//中奖格子
            this.cmd_s_gameEnd.area.push(t_area);//中奖区域
            this.cmd_s_gameEnd.tiems.push(this.times[bs]);//中奖倍数
            this.cmd_s_gameEnd.wins_core.push(winscore);//中奖得分
        }
        else    //不中奖
        {
            winscore = 0;
            this.cmd_s_gameEnd.eventid = 0;
        }

        return this.cmd_s_gameEnd;
    }

    //获取游戏结束数据，开始播放动画。
    onGameEnd() {
        //播放第一次动画
        this.getServerData();
        console.log('开始游戏:', this.cmd_s_gameEnd.step[0]);
        globalThis.sgj_run.play(this.cmd_s_gameEnd.step[0]);
    }

    //正常动画回调
    runCallBack(arg1: string) {
        console.log('水果机回调函数:', arg1);
        console.log('结束数据：', this.cmd_s_gameEnd)

        //普通中奖、闪灯
        if (this.cmd_s_gameEnd.eventid == 1) {
            globalThis.sgj_view.setWinScore(this.cmd_s_gameEnd.wins_core[0]);
            this.gameState = 1;
            globalThis.sgj_endFlash.play(this.cmd_s_gameEnd.step);
            return;
        }

        //没有中奖
        this.gameState = 0;

    }

    update(deltaTime: number) {

    }

    onEnable() {
        globalThis.sgjEvent.on('sgj_runcallback', this.runCallBack, this);
    }

    onDisable() {
        globalThis.sgjEvent.off('sgj_runcallback', this.runCallBack, this);
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
}