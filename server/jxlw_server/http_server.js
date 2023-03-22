var db = require('../utils/db');
var express = require('express');
var http = require('../utils/http');
var app = express();

var gameServerInfo = null;

res_addhead = function (res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
}

exports.start = function (cfg) {
    config = cfg;
    gameServerInfo = {
        id: config.SERVER_ID,
        name: config.name,
        clientip: config.client_ip,
        clientport: config.client_port,
        httpPort: config.http_game_port,
        load: 0,
    };
    //setInterval(update, 1000);
    update();
    app.listen(config.http_game_port, config.http_game_ip);
    console.log("监听中心服务器成功! = " + config.http_game_port + ":" + config.http_game_ip);
}

function send(res, ret) {
    var str = JSON.stringify(ret);
    res.send(str)
}

//向大厅服定时心跳
function update() {
    http.get(config.http_center_ip, config.http_center_port, "/register_gs", gameServerInfo, function (ret, data) {
        if (ret == true) {
            if (data.errcode != 0) {
                console.log(data.errmsg);
            }

            if (data.ip != null) {
                serverIp = data.ip;
            }
        }
        else {
            //
            lastTickTime = 0;
        }
    });
}