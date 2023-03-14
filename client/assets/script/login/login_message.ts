import { _decorator, Component, Node, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('login_message')
export class login_message extends Component {

    _ws: any = null;

    start() {
        this.connectServer();
        globalThis.login_message = this;
    }

    update(deltaTime: number) {

    }

    connectServer() {
        const ws = new WebSocket('ws://127.0.0.1:3000')
        this._ws = ws;
        ws.onopen = () => {
            console.log('连接--登录服务器--成功！');
        }

        ws.onmessage = (result) => {
            let msg = JSON.parse(result.data);
            let type = msg.type;
            let data = msg.data;
            this.onMessage(type, data);
        }
    }

    onMessage(type, data) {
        switch (type) {
            case 'guestLogin':
                {
                    if (data == 0) {
                        globalThis.eventTargets.emit('login_popTips', '游客登陆失败！');
                        break;
                    }
                    globalThis.userMgr.userid = data.userid;
                    globalThis.userMgr.nickname = data.nickname;
                    globalThis.userMgr.score = data.score;
                    globalThis.userMgr.password = data.password;
                    globalThis.userMgr.roomid = data.roomid;
                    globalThis.userMgr.bind_account = data.bind_account;
                    globalThis.userMgr.saveAccount(data.nickname, data.password);
                    console.log('游客登陆成功!服务器返回:' + data.userid + ' ,' + data.nickname + ' ,' + data.score + ' ,' + data.password + ' ,' + data.roomid + ' ,' + data.bind_account);
                    this._ws.close();
                    console.log('---开始切换场景：主动关闭登陆连接---');
                    director.loadScene('hallScene');
                    break;
                }
            case 'accountLogin':
                {
                    if (data == 0) {
                        globalThis.eventTargets.emit('login_popTips', '账号登陆失败:用户不存在或密码错误!');
                        break;
                    }
                    globalThis.userMgr.userid = data.userid;
                    globalThis.userMgr.nickname = data.nickname;
                    globalThis.userMgr.score = data.score;
                    globalThis.userMgr.password = data.password;
                    globalThis.userMgr.roomid = data.roomid;
                    globalThis.userMgr.bind_account = data.bind_account;
                    globalThis.userMgr.saveAccount(data.nickname, data.password);
                    console.log('账号登陆成功!服务器返回:' + data.userid + ' ,' + data.nickname + ' ,' + data.score + ' ,' + data.password + ' ,' + data.roomid + ' ,' + data.bind_account);
                    this._ws.close();
                    console.log('---开始切换场景：主动关闭登陆连接---');
                    director.loadScene('hallScene');
                    break;
                }
            default:
                break;
        }
        // console.log('接受到服务器消息:' + type + ',数据:' + data);
    }

    sendMssage(type: any, data: any) {
        let msg = {
            type: type,
            data: data,
        }
        this._ws.send(JSON.stringify(msg));
    }
}

