//登录服务器启动文件
var configs = require('../configs.js');
var loginBb = require('./loginBb')
var loginMessage = require('./loginMessage')

//初始化登录数据库
global.loginBb.init(configs.mysql_config());
console.log('初始化登录数据库--成功!')

//初始化登录服务器
global.loginMessage.createServer(configs.loginServer_config())

// var config = configs.account_server();
// var as = require('./account_server');
// as.start(config);

// var dapi = require('./dealer_api');
// dapi.start(config);

// db.getUserId_for_db(function(userid){
//     if(userid == 0){
//         console.log('获取用户id失败!')
//     }
// })
