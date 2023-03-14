import { _decorator, Component, Node, EventTarget, Button, director, instantiate, Prefab, resources } from 'cc';
import { userMgr } from '../utils/userMgr';
globalThis.userMgr = userMgr.getInstance();

const { ccclass, property } = _decorator;

globalThis.eventTargets = new EventTarget();

@ccclass('login')
export class login extends Component {
    @property(Node)
    accountLoginNode: Node;

    @property(Node)
    tips_node: Node;

    @property(Node)
    tips_prefab: Node;

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
        let t_tips_pre = instantiate(this.tips_prefab);
        t_tips_pre.active = true;
        this.tips_node.addChild(t_tips_pre);
        let tipsScript = t_tips_pre.getComponent("tips");
        tipsScript.onShow(arg1);
    }


    onBtnClick(event: any, customEventData: any) {
        switch (customEventData) {
            case 'guestLogin':
                {
                    let account = globalThis.userMgr.getAccount();
                    globalThis.loginMessage.SendMssage('guestLogin', account);
                    console.log('发送游客登录请求login = ', account);
                    break;
                }
            case 'accountLogin':
                {
                    resources.load("prefab/login_account", Prefab, (err, prefab) => {
                        let newNode = instantiate(prefab);
                        this.node.addChild(newNode);
                        console.log('prefab加载完毕');
                    });

                    //this.accountLoginNode.active = true;
                }
            default:
                break;
        }
    }

    update(deltaTime: number) {
    }


}

