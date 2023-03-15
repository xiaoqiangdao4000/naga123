import { _decorator, Component, Node, Prefab, EventTarget, Label, director, instantiate, resources } from 'cc';
import { userMgr } from '../utils/userMgr';
const { ccclass, property } = _decorator;

globalThis.eventTargets = new EventTarget();

@ccclass('hall')
export class hall extends Component {
    @property(Node)
    bindaccount_node: Node;

    @property(Label)
    nickname_lb: Label;

    @property(Label)
    userid_lb: Label;

    @property(Label)
    score_lb: Label;

    @property(Node)
    tips_node: Node;

    start() {
        this.init();
    }

    init() {
        this.nickname_lb.string = globalThis.userMgr.nickname;
        this.userid_lb.string = globalThis.userMgr.userid;
        this.score_lb.string = globalThis.userMgr.score;
    }

    onEnable() {
        globalThis.eventTargets.on('hall_popTips', this.addTops, this);

    }

    onDisable() {
        globalThis.eventTargets.off('hall_popTips', this.addTops, this);
    }

    //arg1:弹窗内容
    addTops(arg1: string) {
        resources.load("prefab/tips", Prefab, (err, prefab) => {
            let t_fb = instantiate(prefab);
            this.tips_node.addChild(t_fb);
            let t_script = t_fb.getComponent("tips");
            t_script.onShow(arg1);
        });
    }

    update(deltaTime: number) {

    }

    onBtnClick(event: any, customEventData: any) {
        switch (customEventData) {
            case 'bindaccount':
                {
                    this.bindaccount_node.active = true;
                    break;
                }
            case 'rank':
                {
                    this.getNoticeMsg();
                    break;
                    // director.loadScene('loginScene');
                }
            case 'seting':
                {
                    globalThis.hall_message.printWebSocket();
                    break;
                }
            default:
                break;

        }
    }
    
    //获取公告信息
    getNoticeMsg()
    {
        let data = 
        {
            token:''
        }
        globalThis.hall_message.sendMssage('hall_notice_msg', data);
    }
}


