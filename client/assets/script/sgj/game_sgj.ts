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
    cmd_s_gameEnd =
        {
            type: 'cmd_s_gameEnd',
            step: 0,    //开奖格子
            area: 0,    //开奖区域
            tiems: 0,   //倍数
            wins_core: 0,   //赢分
            user_score: 0,  //分数
            record: [0, 0, 0, 0, 0, 0, 0, 0],   //历史记录

            eventid: 0,          //事件id
            event_count: 0,
            event_step: [0, 1],    //开奖格子,数组[24]
            event_area: 0,       //开奖区域,数组[24]
            event_times: 0,      //倍数,数组[24]
            event_score: 0,      //当前赢分,数组[24]
        }

    //倍率
    times = [5, 10, 15, 20, 30, 40, 100];

    //0苹果、1橙子、2木瓜、3铃铛、4西瓜、5双星、677、7bar,8lucky
    //倍率：5,10,15,20,30,40,100

    serverStepName = ['橙子', '铃铛', '小bar', 'bar', '苹果', '小苹果', '木瓜', '西瓜', '小西瓜', 'lucky', '苹果', '小橙子', '橙子', '铃铛', '小77', '77', '苹果', '小木瓜', '木瓜',
        '双星', '小双星', 'lucky', '苹果', '小铃铛'];
    serverStep = [1, 3, 17, 7, 0, 10, 2, 4, 14, 8, 0, 11, 1, 3, 16, 6, 0, 12, 2, 5, 15, 8, 0, 13];

    start() {
        globalThis.curgame = this;
        globalThis.sgj_normal.play()
    }

    //模拟服务器数据
    getServerData() {

        //获取随机中奖格子
        let t_step = randomRangeInt(1, 25);
        this.cmd_s_gameEnd.step = t_step;

        //倍数
        let bs = randomRangeInt(0, 8);
        this.cmd_s_gameEnd.tiems = this.times[bs];

        //获取玩家下注总和
        let mybetscore = 0;
        for (let i = 0; i < 8; i++) {
            mybetscore += globalThis.sgj_view.bet_score[i];
        }

        //获取中奖区域
        let t_area = this.serverStep[t_step];
        if (t_area > 9) t_area = t_area - 10;
        this.cmd_s_gameEnd.area = t_area;

        //判断玩家是否中奖
        if (t_area == 8) //中lucky、随机1到99倍、送灯
        {
            this.cmd_s_gameEnd.wins_core = mybetscore * randomRangeInt(1, 99);
        }
        else if (globalThis.sgj_view.bet_score[t_area] > 0)  //普通中奖 下注*倍数
        {
            this.cmd_s_gameEnd.wins_core = globalThis.sgj_view.bet_score[t_area] * this.cmd_s_gameEnd.tiems;
        }
        else    //不中奖
        {
            this.cmd_s_gameEnd.wins_core = 0;
        }

        return this.cmd_s_gameEnd;
    }

    update(deltaTime: number) {

    }

    onEnable() {
        globalThis.sgjEvent.on('sgj_runcallback', this.runCallBack, this);
    }

    onDisable() {
        globalThis.sgjEvent.off('sgj_runcallback', this.runCallBack, this);
    }

    runCallBack(arg1: string) {
        console.log('水果机回调函数:', arg1);

        //特殊中奖
        if (this.cmd_s_gameEnd.eventid > 0) {
            return;
        }

        //普通中奖、闪灯
        if (this.cmd_s_gameEnd.wins_core > 0) {
            globalThis.sgj_view.setWinScore(this.cmd_s_gameEnd.wins_core);
            return;
        }

        //没有中奖

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