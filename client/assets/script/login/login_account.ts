import { _decorator, Component, Node, EditBox, input, EventTouch, Input } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('login_account')
export class login_account extends Component {
    @property(EditBox)
    nickname_editbox;

    @property(EditBox)
    password_editbox;

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
                    let account = globalThis.userMgr.getAccount();
                    let data = {
                        nickname: nickname,
                        password: password,
                    };
                    globalThis.loginMessage.SendMssage('accountLogin', data);
                    console.log('发送账号登录请求login = ', data);
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

