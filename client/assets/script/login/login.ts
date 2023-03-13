import { _decorator, Component, Node, Button } from 'cc';
import { userMgr } from '../utils/userMgr';
globalThis.userMgr = userMgr.getInstance();

const { ccclass, property } = _decorator;

const eventTarget = new EventTarget();
globalThis.eventTarget = eventTarget;

@ccclass('login')
export class login extends Component {
    @property(Node)
    accountLoginNode: Node;

    @property(Node)
    tips_node: Node;

    start() {
        // globalThis.eventTarget.on('nickname', function (data) {
        //     console.log(data);
        // })
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

