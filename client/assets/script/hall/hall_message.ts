import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('hall_message')
export class hall_message extends Component {
    _ws: any = null;

    start() {
        this.connectServer();
        globalThis.hall_message = this;
    }

    update(deltaTime: number) {

    }

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
            case 'hall_bind_account':
                {
                    if (data == 0) {
                        globalThis.eventTargets.emit('hall_popTips', '绑定账号失败！');
                        break;
                    }
                    console.log('bang = ', data);
                    globalThis.userMgr.userid = data.userid;
                    globalThis.userMgr.nickname = data.nickname;
                    globalThis.userMgr.password = data.password;
                    globalThis.userMgr.bind_account = data.bind_account;
                    globalThis.userMgr.saveAccount(data.nickname, data.password);
                    console.log('绑定账号成功!:' + data.userid + ' ,' + data.nickname +  ' ,' + data.password + ' ,' + data.bind_account);
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
        this._ws.send(JSON.stringify(msg));
    }
}


