import { _decorator, Component, Node } from 'cc';
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
            console.log('连接服务器成功！');
        }

        ws.onmessage = (result) => {
            let msg = JSON.parse(result.data);
            let type = msg.type;
            let data = msg.data;
            this.onMessage(type, data);
        }
    }

    onMessage(type, data) {
        console.log('接受到服务器消息:' + type + ',数据:' + data);
    }

    SendMssage(type:any, data:any) {
        let msg = {
            type: type,
            data: data,
        }
        this._ws.send(JSON.stringify(msg));
    }
}

