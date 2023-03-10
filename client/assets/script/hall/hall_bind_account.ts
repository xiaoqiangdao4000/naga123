import { _decorator, Component, Node, EventTarget, EditBox } from 'cc';
const { ccclass, property } = _decorator;

if (globalThis.eventTargets == null) {
    globalThis.eventTargets = new EventTarget();
}

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
                    let nickname = this.nickname_editbox.string;
                    let password = this.password_editbox.string;
                    let password1 = this.password1_editbox.string;
                    if (nickname == '') {
                        globalThis.eventTargets.emit('hall_popTips', '用户名不能为空');
                        break;
                    }
                    if (password == '') {
                        globalThis.eventTargets.emit('hall_popTips', '密码不能为空，请输入6~10位数字或字母！');
                        break;
                    }
                    if (password1 == '') {
                        globalThis.eventTargets.emit('hall_popTips', '请再次输入密码！');
                        break;
                    }
                    if (password1 != password) {
                        globalThis.eventTargets.emit('hall_popTips', '两次密码输入不一致，请确认！');
                        break;
                    }
                    let data = {
                        nickname: nickname,
                        userid:globalThis.userMgr.userid,
                        password: password,
                    };
                    globalThis.hall_message.sendMssage('hall_bind_account', data);
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

