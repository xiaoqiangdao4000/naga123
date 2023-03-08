
//扩展String.prototype.format 字符串拼接的功能
String.prototype.format = function (args) {
    var result = this;
    //调用的实际参数的个数是否大于0
    if (arguments.length > 0) {
        if (arguments.length == 1 && typeof (args) == "object") {
            for (var key in args) {
                if (args[key] != undefined) {
                    var reg = new RegExp("({" + key + "})", "g");
                    result = result.replace(reg, args[key]);
                }
            }
        }
        else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] != undefined) {
                    //var reg = new RegExp("({[" + i + "]})", "g");
                    var reg = new RegExp("({)" + i + "(})", "g");
                    result = result.replace(reg, arguments[i]);
                }
            }
        }
    }
    return result;
};

var mysql = require("mysql");
var configs = require('../configs');
var pool = null;

function init(config) {
    pool = mysql.createPool({
        host: config.HOST,
        user: config.USER,
        password: config.PSWD,
        database: config.DB,
        port: config.PORT,
    });
};


function query(sql, callback) {
    pool.getConnection(function (err, conn) {
        if (err) {
            callback(err, null, null);
        } else {
            conn.query(sql, function (qerr, vals, fields) {
                //释放连接  
                conn.release();
                //事件驱动回调  
                callback(qerr, vals, fields);
            });
        }
    });
};

//创建用户id
function createAllId() {
    for (let i = 100000; i < 1000000; i++) {
        var sql = 'INSERT INTO t_userid(userid) VALUES("' + i + '")';
        query(sql, function (err, rows, fields) {
            if (err) {
                if (err.code == 'ER_DUP_ENTRY') {
                    console.log(err);
                    return;
                }
                throw err;
            }
            else {
                //console.log(rows);
                return;
            }
        });
    }
}

//初始化数据库
//init(configs.mysql_config());
//createAllId()
//getUserId_for_db(function(userid){
//    console.log('获取成功 userid = ', userid);
//})