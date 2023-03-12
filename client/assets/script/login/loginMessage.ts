import { _decorator, Component, Node, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('loginMessage')
export class loginMessage extends Component {

    _ws: any = null;

    start() {
        this.connectServer();
        globalThis.loginMessage = this;
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
                if (data == 0) { console.log('游客登陆失败！'); }
                globalThis.userMgr.userid = data.userid;
                globalThis.userMgr.nickname = data.nickname;
                globalThis.userMgr.score = data.score;
                globalThis.userMgr.saveAccount(data.nickname,data.password);
                globalThis.userMgr.roomid = data.roomid;
                console.log('登陆成功--ID:' + data.userid + ' --名字:' + data.nickname + ' --分数:' + data.score);
                this._ws.close();
                director.loadScene('hallScene');
                break;
            default:
                break;
        }
        // console.log('接受到服务器消息:' + type + ',数据:' + data);
    }

    SendMssage(type: any, data: any) {
        let msg = {
            type: type,
            data: data,
        }
        this._ws.send(JSON.stringify(msg));
    }
}

