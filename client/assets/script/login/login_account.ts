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

    onEnable() {
        this.initData();
    }

    onDisable() {
    }

    update(deltaTime: number) {

    }
    
    //初始化数据
    initData() {
        let account_data = globalThis.userMgr.getAccount();
        if (account_data != null && account_data.password != null && account_data.password != '') {
            this.nickname_editbox.string = account_data.nickname;
            this.password_editbox.string = account_data.password;
        }
        else {
            this.nickname_editbox.string = '';
            this.password_editbox.string = '';
        }
    }

    onBtnClick(event: any, customEventData: any) {
        switch (customEventData) {
            case 'btn_ok':
                {
                    let nickname = this.nickname_editbox.string;
                    let password = this.password_editbox.string;
                    if (nickname == '') {
                        globalThis.eventTargets.emit('login_popTips', '用户名不能为空！');
                        return;
                    }
                    if (password == '') {
                        globalThis.eventTargets.emit('login_popTips', '密码不能为空！');
                        return;
                    }
                    let data = {
                        nickname: nickname,
                        password: password,
                    };
                    globalThis.login_message.sendMssage('accountLogin', data);
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

