import { _decorator, Component, Node, SpriteFrame, Sprite, resources, Prefab, instantiate } from 'cc';
import HTTP from '../utils/HTTP';
import { AudioMgr } from '../utils/audioMgr';

const { ccclass, property } = _decorator;

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

    
    start() {
        globalThis.curgame = this;
       // AudioMgr.inst.play('sound/sgj/C1')
    }

    update(deltaTime: number) {

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