var db = require('../utils/db');
var express = require('express');
var app = express();

res_addhead = function (res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
}

exports.start = function (cfg) {
    config = cfg;
    app.listen(config.CLIENT_PORT);
    console.log("大厅服务器开启，监听 " + config.CLIENT_PORT);
}

function send(res, ret) {
    var str = JSON.stringify(ret);
    res.send(str)
}

//绑定账号
app.get('/hall_bind_account', function (req, res) {

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