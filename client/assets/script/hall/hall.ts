import { _decorator, Component, Node, Prefab, EventTarget, Label, director, instantiate, resources, Vec3 } from 'cc';
import HTTP from '../utils/HTTP';
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

    @property(Label)
    notice_lb;

    start() {
        this.init();
    }

    init() {
        this.nickname_lb.string = globalThis.userMgr.nickname;
        this.userid_lb.string = globalThis.userMgr.userid;
        this.score_lb.string = globalThis.userMgr.score;

        //获取公告
        // this.notice_lb.string = globalThis.userMgr.noticemsg
    }

    onEnable() {
        globalThis.eventTargets.on('hall_popTips', this.addTops, this);
        globalThis.eventTargets.on('hall_bindAccountSuc', this.hall_bindAccountSuc, this);

    }

    onDisable() {
        globalThis.eventTargets.off('hall_popTips', this.addTops, this);
        globalThis.eventTargets.off('hall_bindAccountSuc', this.hall_bindAccountSuc, this);
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

    hall_bindAccountSuc(arg1: string, arg2: string) {
        this.nickname_lb.string = arg1;
        this.bindaccount_node.active = false;
        resources.load("prefab/tips", Prefab, (err, prefab) => {
            let t_fb = instantiate(prefab);
            this.tips_node.addChild(t_fb);
            let t_script = t_fb.getComponent("tips");
            t_script.onShow(arg2);
        });
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
                    this.refreshNotice();
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
    refreshNotice() {
        var self = this;
        var onGet = function (ret) {
            if (ret != 0) {
                for (let i = 0; i < ret.length; i++) {
                    console.log('收到服务器发来的公告消息=', ret[i].msg);
                    globalThis.userMgr.noticemsg.push(ret[i].msg);
                }
            }
        }

        var data = {
            userid: globalThis.userMgr.userid,
            //sign: cc.vv.userMgr.sign,
            type: "notice",
        };
        HTTP.getInstance().sendRequest("/get_message", data, onGet.bind(this));
    }

    update(deltaTime: number) {
        let pos = this.notice_lb.node.getPosition();
        let x = pos.x;
        x -= 1.2;
        if (x < -1100) {
            x = 300;
        }
        this.notice_lb.node.setPosition(x, pos.y, pos.z);
    }

}