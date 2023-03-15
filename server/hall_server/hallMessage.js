const ws = require('nodejs-websocket')

class hallMessage {
    constructor() { }

    static getInstance() {
        if (!hallMessage.instance) {
            hallMessage.instance = new hallMessage();
            return hallMessage.instance;
        }
        else {
            return hallMessage.instance;
        }
    }

    createServer(port) {
        let websocket = ws.createServer((client) => {
            client.on('text', (result) => {
                let str = JSON.parse(result);
                let type = str.type;
                let data = str.data;
                this.onMessage(type, data, client);
            });

            client.on('error', (result) => {
                //console.log('连接出现错误:', result);
            });

            client.on('close', () => {
                console.log('连接断开!');
            });

        })
        websocket.listen(port);
        console.log('大厅服务器启动--成功，监听端口:', port);
    };

    //处理客户端发来的消息
    onMessage(type, data, client) {
        var self = this;
        switch (type) {
            case 'hall_bind_account':  //绑定账号
                {
                    this.bindAccount(data, function (result) {
                        if (result == 0) {
                            self.sendMessage('hall_bind_account', 0, client); //发送绑定失败
                        }
                        else {

                            self.sendMessage('hall_bind_account', result, client); //发送绑定成功
                        }
                    });
                    break;
                }
            case 'hall_notice_msg': //获取大厅公告
                {
                    this.getHallNotice(function (result) {
                        //console.log('获取大厅通知--msg--:', result);
                        self.sendMessage('hall_notice_msg', result, client);
                    })
                    break;
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

    //绑定账号登录
    bindAccount(data, callback) {
        //获取用户信息
        global.hallBb.getUserInfoByUserID(data, function (userinfo) {
            //用户不存在
            if (userinfo == 0) {
                console.log('用户不存在！');
                callback(0);
            }
            else {  //用户存在，是否已经绑定
                if (userinfo.bindaccount == 1) {
                    console.log('用户已经绑定账号');
                    callback(0);
                    return;
                }
                //开始绑定userid, password, callback
                let ret = {
                    nickname: data.nickname,
                    userid: userinfo.userid,
                    password: data.password,
                    bindaccount: 1
                }
                global.hallBb.bandUserAccount(data.nickname, data.userid, data.password, function (info) {
                    if (info == 0) {
                        console.log('用户绑定失败');
                        callback(0);
                    }
                    else {
                        console.log('用户绑定成功!');
                        callback(ret);
                    }
                })
                return;
            }
        });
    }

    //获取大厅通知
    getHallNotice(callback) {
        global.hallBb.getHallNotice(function(result){
            callback(result);
        })
    }
}

global.hallMessage = hallMessage.getInstance();
module.exports = hallMessage;