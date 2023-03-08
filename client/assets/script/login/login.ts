import { _decorator, Component, Node, Button } from 'cc';
const { ccclass, property } = _decorator;

const eventTarget = new EventTarget();
globalThis.eventTarget = eventTarget;

@ccclass('login')
export class login extends Component {

    start() {

    }

    onBtnClick(event, customEventData) {
        const node = event.target as Node;
        const button = node.getComponent(Button);
        switch(customEventData)
        {
            case 'guest':
                let aa = globalThis.userMgr.getAccount();
                console.log('aaa = ', aa);
                globalThis.loginMessage.SendMssage('login','guest_123');

                console.log('发送登录请求login')
                break;
            default:
                break;
        }
    }


    update(deltaTime: number) {

    }
}

