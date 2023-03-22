var db = require('../utils/db');
var express = require('express');
var http = require('../utils/http');
var app = express();
var serverMap = {};
res_addhead = function (res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
}

exports.start = function (cfg) {
    config = cfg;
    app.listen(config.center_port);
    console.log("中心服务器开启成功，开始监听 客户端、游戏服 发来的消息:" + config.center_port);
}

function send(res, ret) {
    var str = JSON.stringify(ret);
    res.send(str)
}

//游戏注册，保存游戏列表
app.get('/register_gs', function (req, res) {
    res_addhead(res);
    var ip = req.ip;
    var name = req.query.name;
    var clientip = req.query.clientip;
    var clientport = req.query.clientport;
    var httpPort = req.query.httpPort;
    var load = req.query.load;
    var id = clientip + ":" + clientport;

    if (serverMap[id]) {
        var info = serverMap[id];
        if (info.clientport != clientport
            || info.httpPort != httpPort
            || info.ip != ip
        ) {
            console.log("duplicate gsid:" + id + ",addr:" + ip + "(" + httpPort + ")");
            http.send(res, 1, "duplicate gsid:" + id);
            return;
        }
        info.load = load;
        http.send(res, 0, "ok", { ip: ip });
        return;
    }
    serverMap[id] = {
        ip: ip,
        id: id,
        name: name,
        clientip: clientip,
        clientport: clientport,
        httpPort: httpPort,
        load: load
    };
    http.send(res, 0, "ok", { ip: ip });
    // console.log("游戏注册成功！.\n\tid:" + id + "\n\taddr:" + ip + "\n\thttp port:" + httpPort + "\n\tsocket clientport:" + clientport);
    console.log('游戏:' + name + '注册成功:')
    console.log('\tid:' + id);
    console.log('\t游戏ip:' + clientip);
    console.log('\t游戏端口:' + clientport);
});

//获取服务器信息,游戏信息游戏名称、服务器地址、
app.get('/getGameServerInfo', function (req, res) {
    res_addhead(res);
    console.log('map = ', serverMap);
})

//游客登陆:不存在直接创建并登陆，存在直接登陆
app.get('/guest', function (req, res) {
    console.log('游客登陆请求:', req.query.nickname);
    console.log('map = ', serverMap);
    res_addhead(res)

    for(let i = 0; i< serverMap.lenght; i++)
    {
        console.log('aaaa = ', serverMap[i]);
    }

    var nickname = req.query.nickname;
    let data =
    {
        userid: 0,
        nickname: '',
        password: '',
        score: 10000,
        headid: 0,
        roomid: 0,
        bindaccount: 0,
        serverMap: serverMap,
    }
    //获取用户信息
    db.getUserInfoByNickName(nickname, function (userinfo) {
        //游客用户不存在，创建游客
        if (userinfo == 0) {
            db.createrUserId(function (id) {
                if (id == 0) {
                    console.log('创建游客失败!');
                    send(res, data);
                    return;
                }
                else {
                    db.registGuest(id, 'guest_' + id, data.password, data.score, data.headid, data.roomid, data.bindaccount, function (result) {
                        if (result != 0) {
                            data.userid = id;
                            data.nickname = 'guest_' + id;
                            data.password = '';
                            data.score = 10000;
                            data.headid = 0;
                            data.roomid = 0;
                            data.bindaccount = 0;
                            console.log('游客注册成功！用户名:', data.nickname);
                            send(res, data);
                            return;
                        }
                        else {
                            console.log('注册游客失败！');
                            data.userid = 0;
                            send(res, data);
                            return;
                        }
                    });
                }
            })
        }
        else {  //游客存在，直接登陆
            data.userid = userinfo.userid;
            data.nickname = userinfo.nickname;
            data.password = userinfo.password;
            data.score = userinfo.score;
            data.headid = userinfo.headid;
            data.roomid = userinfo.roomid;
            data.bindaccount = userinfo.bindaccount;
            console.log('游客存在，直接登陆:', data)
            send(res, data);
            return;
        }
    });
});

//账号登陆
app.get('/accountLogin', function (req, res) {
    console.log('账号登陆请求:', req.query.nickname);
    res_addhead(res)
    var nickname = req.query.nickname;
    let data =
    {
        userid: 0,
        nickname: '',
        password: '',
        score: 10000,
        headid: 0,
        roomid: 0,
        bindaccount: 0,
        serverMap: serverMap,
    }

    db.getUserInfoByNickName(nickname, function (userinfo) {
        //账号不存在
        if (userinfo == 0) {
            console.log('账号不存在或密码错误！');
            send(res, data);
            return;
        }
        else {  //账号存在，判断账号密码
            if (userinfo.nickname != data.nickname || userinfo.password == '' || userinfo.password != data.password) {
                console.log('账号不存在或密码错误！');
                send(res, data);
                return;
            }
            data.userid = userinfo.userid;
            data.nickname = userinfo.nickname;
            data.password = userinfo.password;
            data.score = userinfo.score;
            data.headid = userinfo.headid;
            data.roomid = userinfo.roomid;
            data.bindaccount = userinfo.bindaccount;
            console.log('账号存在，直接登陆:', data);
            send(res, userinfo);
            return;
        }
    });
})

//绑定账号
app.get('/hall_bind_account', function (req, res) {
    res_addhead(res)
    var userid = req.query.userid;
    var nickname = req.query.nickname;
    var password = req.query.password;
    let data =
    {
        userid: 0,
        nickname: '',
        password: '',
        score: 10000,
        headid: 0,
        roomid: 0,
        bindaccount: 0,
    }
    //获取用户信息
    db.getUserInfoByUserID(userid, function (userinfo) {
        //用户不存在
        if (userinfo == 0) {
            console.log('用户不存在！');
            send(res, data);
            return;
        }
        else {  //用户存在，是否已经绑定
            data.userid = userinfo.userid;
            data.nickname = userinfo.nickname;
            data.password = userinfo.password;
            data.score = userinfo.score;
            data.headid = userinfo.headid;
            data.roomid = userinfo.roomid;
            data.bindaccount = userinfo.bindaccount;
            if (userinfo.bindaccount == 1) {
                console.log('用户已经绑定账号');
                send(res, data);
                return;
            }
            //开始绑定userid, password, callback
            db.bandUserAccount(data.userid, nickname, password, function (info) {
                if (info == 0) {
                    console.log('用户绑定失败');
                    data.userid = 0;
                    data.bindaccount = 0;
                    send(res, data);
                    return;
                }
                else {
                    data.userid = userid;
                    data.nickname = nickname;
                    data.password = password;
                    data.bindaccount = 1;
                    console.log('用户绑定成功!');
                    send(res, data);
                    return;
                }
            })
        }
    });

});

//获取大厅公告
app.get('/get_message', function (req, res) {
    res_addhead(res)
    //数据校验
    db.getHallNotice(function (data) {
        if (data != null) {
            send(res, data);
        }
        else {
            send(res, 0);
        }
    });
});
