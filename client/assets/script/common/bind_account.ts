import { _decorator, Component, Node, EventTarget, EditBox } from 'cc';
const { ccclass, property } = _decorator;

const eventTarget = new EventTarget();

@ccclass('bind_account')
export class bind_account extends Component {

    @property(EditBox)
    nickname_editbox: EditBox;

    @property(EditBox)
    password_editbox: EditBox;

    @property(EditBox)
    password1_editbox: EditBox;

    start() {

    }

    update(deltaTime: number) {

    }

    onBtnClick(event: any, customEventData: any) {
        switch (customEventData) {
            case 'btn_ok':
                {
                    console.log('投递 btn_ok =', this.nickname_editbox.string);
                    if (this.nickname_editbox.string == '') {
                        console.log('投递 nickname ')
                        eventTarget.emit('nickname', '用户名不能为空');
                        // if (globalThis.eventTarget == null) {
                        //     console.log('globalThis.eventTarget =  ', globalThis.eventTarget);
                        //     break;
                        // }
                        // else {
                        //     eventTarget.emit('nickname', '用户名不能为空');
                        //     break;
                        // }
                    }
                    break;
                }
            case 'btn_close':
                {
                    this.node.active = false;
                    break;
                }
            default:
                break;
        }
    }
}

