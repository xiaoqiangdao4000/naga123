import { _decorator, Component, Node, EventTarget,Button, director, instantiate, Prefab, resources } from 'cc';
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

    onLoad()
    {

    }

    start() {

    }

    onEnable() {
        globalThis.eventTargets.on('login_chick_nickname', this.addTops, this);
        globalThis.eventTargets.on('login_chick_password', this.addTops, this);
        
    }

    onDisable() {
        globalThis.eventTargets.off('login_chick_nickname', this.addTops, this);
        globalThis.eventTargets.on('login_chick_password', this.addTops, this);
    }

    addTops(arg1) {
        let t_tips_pre = instantiate(this.tips_prefab);
        this.tips_node.addChild(t_tips_pre);
        let tipsScript = t_tips_pre.getComponent("tips");
        tipsScript.onShow(arg1);
        console.log('Hello World = ', this.tips_node.children);
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
                    this.accountLoginNode.active = true;
                }
            default:
                break;
        }
    }



    update(deltaTime: number) {

    }
}

