import { _decorator, Component, Node, Button } from 'cc';
import { userMgr } from '../utils/userMgr';
globalThis.userMgr = userMgr.getInstance();

const { ccclass, property } = _decorator;

const eventTarget = new EventTarget();
globalThis.eventTarget = eventTarget;

@ccclass('login')
export class login extends Component {

    start() {

    }

    onBtnClick(event: any, customEventData: any) {
        switch (customEventData) {
            case 'guestLogin':
                let account = globalThis.userMgr.getAccount();
                globalThis.loginMessage.SendMssage('guestLogin', account);
                console.log('发送登录请求login = ', account);
                break;
            default:
                break;
        }
    }

    update(deltaTime: number) {

    }
}

