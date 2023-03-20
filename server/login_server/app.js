//登录服务器启动文件
var configs = require('../configs.js');
var db = require('../utils/db');

//初始化登录数据库
db.init(configs.mysql_config());
console.log('初始化登录数据库--成功!')

//初始化登录服务器
var config = configs.loginServer_config();
var as = require('./login_server');
as.start(config);