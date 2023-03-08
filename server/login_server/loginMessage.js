const ws = require('nodejs-websocket')

class loginMessage {
    constructor() { }

    static getInstance() {
        if (!loginMessage.instance) {
            loginMessage.instance = new loginMessage();
            return loginMessage.instance;
        }
        else {
            return loginMessage.instance;
        }
    }

    createServer(port) {
        let websocket = ws.createServer((client) => {
            client.on('text', (result) => {
                console.log('客户端发来了消息:', result);
                let str = JSON.stringify(result);
                let type = str.type;
                let data = str.data;
                this.onMessage(type, data);

                this.sendMessage('login', '我是服务器', client);
            });

            client.on('error', (result) => {
                console.log('连接出现错误:', result);
            });

            client.on('close', () => {
                console.log('连接断开!');
            });

        })
        websocket.listen(port);
        console.log('登录服务器启动--成功，监听端口:', port);
    };

    onMessage(type, data) {
        switch (type) {
            case 'login':
                console.log('客户端发来消息:', data);
            default:
                break;
        }
    };

    sendMessage(type, data, client) {
        let msg = {
            type: type,
            data: data
        }
        client.send(JSON.stringify(msg));
    }

}

global.loginMessage = loginMessage.getInstance()
module.exports = loginMessage;