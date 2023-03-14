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
                //console.log('连接出现错误:', result);
            });

            client.on('close', () => {
                console.log('连接断开!');
            });

        })
        websocket.listen(port);
        console.log('登录服务器启动--成功，监听端口:', port);
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
        global.loginBb.getUserInfo(data, function (userinfo) {
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
                        let password = '';
                        let score = 10000;
                        let headid = 0;
                        let roomid = 0;
                        let bind_account = 0;
                        global.loginBb.registGuest(userid, nickname, password, score, headid, roomid, bind_account, function (result) {
                            if (result != 0) {
                                let data =
                                {
                                    userid: userid,
                                    nickname: nickname,
                                    password: password,
                                    score: score,
                                    headid: headid,
                                    roomid: roomid,
                                    bind_account: bind_account,
                                }
                                console.log('游客注册成功！用户名:', data.nickname);
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