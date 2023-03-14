
//大厅服务器启动文件
var configs = require('../configs.js');
var hallBb = require('./hallBb')
var hallMessage = require('./hallMessage')

//初始化大厅数据库
global.hallBb.init(configs.mysql_config());
console.log('初始化大厅数据库--成功!')

//初始化大厅服务器
global.hallMessage.createServer(configs.hallServer_config())


