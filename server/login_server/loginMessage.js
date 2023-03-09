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
        websocket.listen(port);
        console.log('登录服务器启动--成功，监听端口:', port);
    };

    onMessage(type, data, client) {
        var self = this;
        switch (type) {
            case 'guestLogin':
                this.onGuestLogin(data, function (result) {
                    if (result == 0) {
                        self.sendMessage('guestLogin', 0, client);
                    }
                    else {

                        self.sendMessage('guestLogin', result, client);
                    }
                });
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

    //游客登陆
    onGuestLogin(nickname, callback) {
        console.log('游客请求登陆:', nickname);
        global.loginBb.getUserInfo(nickname, function (userinfo) {
            //游客用户不存在，创建游客
            if (userinfo == 0) {
                global.loginBb.createrUserId(function (id) {
                    if (id == 0) {
                        console.log('创建游客失败! = ', userid);
                        return;
                    }
                    else {
                        let userid = id;
                        let nickname = 'guest_' + id;
                        let score = 10000;
                        let headid = 0;
                        let roomid = 0;
                        global.loginBb.registGuest(userid, nickname, score, headid, roomid, function (result) {
                            if (result != 0) {
                                let data =
                                {
                                    userid: userid,
                                    nickname: nickname,
                                    score: score,
                                    headid: headid,
                                    roomid: roomid,
                                }
                                console.log('注册游客成功！:', data)
                                callback(data);
                                return;
                            }
                            else {
                                console.log('注册游客失败！:', result)
                                callback(0);
                                return;
                            }
                        });
                    }
                })
            }
            else {  //游客存在，直接登陆
                console.log('游客存在，直接登陆:', userinfo)
                callback(userinfo);
                return;
            }
        });

    }

}

global.loginMessage = loginMessage.getInstance();
module.exports = loginMessage;