var db = require('../utils/db');
var express = require('express');
var app = express();
var hallip = '';
var hallport = 0;

res_addhead = function (res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
}

exports.start = function (cfg) {
    config = cfg;
    hallAddr = config.HALL_IP + ":" + config.HALL_CLIENT_PORT;
    hallip = config.HALL_IP;
    hallport = config.HALLL_PORT;
    app.listen(config.CLIENT_PORT);
    console.log("登陆服务器开启，监听 " + config.CLIENT_PORT);
}

function send(res, ret) {
    var str = JSON.stringify(ret);
    res.send(str)
}

//游客登陆:不存在直接创建并登陆，存在直接登陆
app.get('/guest', function (req, res) {
    console.log('游客登陆请求:', req.query.nickname);
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
        hallip:hallip,
        hallport:hallport,
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
        hallip:hallip,
        hallport:hallport,
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