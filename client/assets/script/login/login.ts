import { _decorator, Component, Node, EventTarget, Button, director, instantiate, Prefab, resources } from 'cc';
import { userMgr } from '../utils/userMgr';
import HTTP from '../utils/HTTP';

globalThis.userMgr = userMgr.getInstance();

const { ccclass, property } = _decorator;

globalThis.eventTargets = new EventTarget();

@ccclass('login')
export class login extends Component {

    @property(Node)
    login_account_node: Node;

    @property(Node)
    tips_node: Node;

    onLoad() {

    }

    start() {

    }

    onEnable() {
        globalThis.eventTargets.on('login_popTips', this.addTops, this);

    }

    onDisable() {
        globalThis.eventTargets.off('login_popTips', this.addTops, this);
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

    //按钮事件
    onBtnClick(event: any, customEventData: any) {
        switch (customEventData) {
            case 'guestLogin':  //游客登陆
                {
                    let userinfo = globalThis.userMgr.getAccount();
                    HTTP.getInstance().sendRequest("/guest", { nickname: userinfo.nickname }, globalThis.userMgr.onGuest)
                    console.log('发送游客登录请求/guest = ', userinfo);
                    break;
                }
            case 'accountLogin'://账号登陆
                {
                    this.login_account_node.active = true;
                }
            default:
                break;
        }
    }

    update(deltaTime: number) {
    }



}

