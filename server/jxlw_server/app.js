
//游戏服务器启动文件
var configs = require('../configs.js');
var db = require('../utils/db');

//初始化游戏数据库
db.init(configs.mysql_config());
console.log('初始化数据库--成功!')

//初始化游戏服务器
var config = configs.game_server();
var as = require('./http_server');
as.start(config);


var socketServer = require('./socket_service')
global.socketServer = socketServer.getInstance();
global.socketServer.createServer(config.client_port, config.client_ip)