import { _decorator, Component, Node, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('websocket')
export class websocket extends Component {
    public static instance = null;
    _ws: any = null;
    onmessage_callback = null;

    static getInstance() {
        if (this.instance == null) {
            this.instance = new websocket();
            return this.instance;
        }
        else {
            return this.instance;
        }
    }

    constructor() {
        super();
    }

    start() {
        console.log('websocket onstart')
    }

    update(deltaTime: number) {
    }

    connectServer(ip, port) {
        //'ws://127.0.0.1:3000'
        let addr = 'ws://' + ip + ':' + port;
        const ws = new WebSocket(addr);
        this._ws = ws;
        ws.onopen = () => {
            console.log('连接--游戏服务器--成功！');
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

                    break;
                }
            case 'accountLogin':
                {

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