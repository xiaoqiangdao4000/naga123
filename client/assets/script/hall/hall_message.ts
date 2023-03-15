import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('hall_message')
export class hall_message extends Component {
    _ws: WebSocket = null;

    start() {
        this.connectServer();
        globalThis.hall_message = this;
    }

    update(deltaTime: number) {

    }

    getWebSocketState() {
        return this._ws.readyState;
    }

    closeWebSocket() {
        //console.log('关闭连接前：this._ws = ', this._ws.readyState);
        this._ws.close();
        // console.log('关闭连接后：this._ws = ', this._ws.readyState);
    }

    printWebSocket() {
        console.log('关闭连接前：this.readyState = ', this._ws.readyState);
    }

    //WebSocket.readyState:
    //0--CONNECTING-套接字已创建。连接尚未打开
    //1--OPEN--连接已打开并准备好进行通信。
    //2--CLOSING--连接正在关闭。
    //3--CLOSED--连接已关闭或无法打开。
    connectServer() {
        const ws = new WebSocket('ws://127.0.0.1:3001')
        this._ws = ws;
        ws.onopen = () => {
            console.log('连接--大厅服务器--成功！');
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
            case 'hall_bind_account':   //接受账号绑定消息
                {
                    if (data == 0) {
                        globalThis.eventTargets.emit('hall_popTips', '绑定账号失败！');
                        break;
                    }
                    console.log('bang = ', data);
                    globalThis.userMgr.userid = data.userid;
                    globalThis.userMgr.nickname = data.nickname;
                    globalThis.userMgr.password = data.password;
                    globalThis.userMgr.bindaccount = data.bindaccount;
                    globalThis.userMgr.saveAccount(data.nickname, data.password);
                    console.log('绑定账号成功!:' + data.userid + ' ,' + data.nickname + ' ,' + data.password + ' ,' + data.bindaccount);
                    globalThis.eventTargets.emit('hall_popTips', '绑定账号--成功--');
                    break;
                }
            case 'hall_notice_msg': //收到大厅通知消息
                {
                    for(let i = 0; i < data.length; i ++)
                    {
                        console.log('收到大厅通知消息 = ', data[i]);
                    }
                    break;
                }
            default:
                break;
        }
    }

    sendMssage(type: any, data: any) {
        let msg = {
            type: type,
            data: data,
        }
        let msgdata = JSON.stringify(msg);
        this._ws.send(msgdata);
    }
}


