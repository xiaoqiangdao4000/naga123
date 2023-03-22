
var ws = require('nodejs-websocket')

class socketServer {
    constructor() { }
    static instance = null;

    static getInstance() {
        if (!socketServer.instance) {
            socketServer.instance = new socketServer();
            return socketServer.instance;
        }
        else {
            return socketServer.instance;
        }
    }

    createServer(port, ip) {
        let websocket = ws.createServer((client) => {
            client.on('text', (result) => {
                let str = JSON.parse(result);
                let type = str.type;
                let data = str.data;
                this.onMessage(type, data, client);
                //this.sendMessage('login', '我是服务器', client);
            });

            client.on('error', (result) => {
                console.log('连接出现错误:', result);
            });

            client.on('close', () => {
                console.log('连接断开!');
            });

        })
        websocket.listen(port, ip);
        console.log('游戏服务器启动--成功，监听端口:', port, ip);
    };

    //处理客户端发来的消息
    onMessage(type, data, client) {
        var self = this;
        switch (type) {
            case 'guestLogin':  //游客登陆
                {
                    this.onGuestLogin(data, function (result) {
                        if (result == 0) {
                            self.sendMessage('guestLogin', 0, client); //发送登录成功
                        }
                        else {

                            self.sendMessage('guestLogin', result, client); //发送登录失败
                        }
                    });
                    break;
                }
            case 'accountLogin': //账号登陆
                {
                    this.onAccountLogin(data, function (result) {
                        if (result == 0) {
                            self.sendMessage('accountLogin', 0, client); //发送登录成功
                        }
                        else {

                            self.sendMessage('accountLogin', result, client); //发送登录失败
                        }
                    });
                    break
                }
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

    //账号登陆
    onAccountLogin(data, callback) {
        console.log('账号登陆请求:', data);
        global.loginBb.getUserInfo(data, function (userinfo) {
            //账号不存在
            if (userinfo == 0) {
                console.log('账号不存在或密码错误！');
                callback(0);
            }
            else {  //账号存在，判断账号密码
                if (userinfo.nickname != data.nickname || userinfo.password == '' || userinfo.password != data.password) {
                    console.log('账号不存在或密码错误！');
                    callback(0);
                    return;
                }
                console.log('账号存在，直接登陆:', userinfo);
                callback(userinfo);
                return;
            }
        });
    }

    //游客登陆
    onGuestLogin(data, callback) {
        console.log('游客登陆请求:', data);
    }
}
module.exports = socketServer;
