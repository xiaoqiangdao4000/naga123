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

class db {
    pool = null;

    constructor(){};

    nop(a, b, c, d, e, f, g) { };

    init(config) {
        this.pool = mysql.createPool({
            host: config.HOST,
            user: config.USER,
            password: config.PSWD,
            database: config.DB,
            port: config.PORT,
        });
    };

    query(sql, callback) {
        this.pool.getConnection(function (err, conn) {
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

    //删除用户id
    delUserId(userid, callback) {
        var sql = "DELETE FROM t_userid WHERE userid = '{0}'";
        sql = sql.format(userid);
        this.query(sql, function (err, rows, fields) {
            if (err) {
                if (err.code == 'ER_DUP_ENTRY') {
                    console.log(err);
                    return;
                }
                throw err;
            }
            else {
                callback();
                console.log('删除成功！');
                return;
            }
        });
    };

    //获取用户id
    getUserId_for_db(callback) {
        var sql = 'SELECT * FROM t_userid limit 1';
        this.query(sql, function (err, rows, fields) {
            if (err) {
                if (err.code == 'ER_DUP_ENTRY') {
                    callback(0);
                    console.log(err);
                    return;
                }
                throw err;
            }
            else {
                if (rows.length > 0) {
                    let userid = rows[0].userid;
                    callback(userid);
                    //delUserId(userid, function () {
                    //    callback(userid);
                   // });
                }
                else {
                    callback(0);
                }

            }
        });
    }

}

module.exports = db;