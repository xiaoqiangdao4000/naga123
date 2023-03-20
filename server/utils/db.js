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
var pool = null;
function nop(a, b, c, d, e, f, g) {
}

function query(sql, callback) {
    pool.getConnection(function (err, conn) {
        if (err) {
            callback(err, null, null);
        } else {
            //console.log('yyyyyy = ', sql)
            conn.query(sql, function (qerr, vals, fields) {
                //释放连接  
                conn.release();
                //事件驱动回调  
                callback(qerr, vals, fields);
            });
        }
    });
};

exports.init = function (config) {
    pool = mysql.createPool({
        host: config.HOST,
        user: config.USER,
        password: config.PSWD,
        database: config.DB,
        port: config.PORT,
    });
};

//删除用过了的用户id 表t_userid
function delUserId(userid, callback) {
    var sql = "DELETE FROM t_userid WHERE userid = '{0}'";
    sql = sql.format(userid);
    query(sql, function (err, rows, fields) {
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

//获取用户信息 data{nickname,password}
exports.getUserInfoByNickName = function (nickname, callback) {
    var sql = 'SELECT * FROM t_userinfo WHERE nickname = "' + nickname + '"';
    query(sql, function (err, rows, fields) {
        if (err) {
            if (err.code == 'ER_DUP_ENTRY') {
                console.log(err);
                callback(0);
                return;
            }
            throw err;
        }
        else {
            if (rows.length == 0) {
                callback(0);
                return;
            }
            callback(rows[0]);
            return;
        }
    });
};

//获取用户信息data{userid,nickname,password,score,headid,roomid,bindaccount}
exports.getUserInfoByUserID = function (userid, callback) {
    var sql = 'SELECT * FROM t_userinfo WHERE userid = "' + userid + '"';
    this.query(sql, function (err, rows, fields) {
        if (err) {
            if (err.code == 'ER_DUP_ENTRY') {
                console.log(err);
                callback(0);
                return;
            }
            throw err;
        }
        else {
            if (rows.length == 0) {
                callback(0);
                return;
            }
            callback(rows[0]);
            return;
        }
    });
};

//创建userid t_userid
exports.createrUserId = function (callback) {
    var sql = 'SELECT * FROM t_userid limit 1';
    query(sql, function (err, rows, fields) {
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
                delUserId(userid, function () {
                    callback(userid);
                });
            }
            else {
                callback(0);
            }
        }
    });
};

//注册游客用户
exports.registGuest = function (userid, nickname, password, score, headid, roomid, bindaccount, callback) {
    var sql = 'INSERT INTO t_userinfo(userid,nickname,password,score,headid,roomid,bindaccount) VALUES({0}, "{1}","{2}",{3},{4},{5},{6})';
    sql = sql.format(userid, nickname, password, score, headid, roomid, bindaccount);
    query(sql, function (err, rows, fields) {
        if (err) {
            if (err.code == 'ER_DUP_ENTRY') {
                callback(0);
                return;
            }
            callback(0);
            throw err;
        }
        else {
            if (rows.length == 0) {
                callback(0);
                return;
            }
            callback(1);
            return;
        }
    });
};

//绑定用户账号
exports.bandUserAccount = function (userid, nickname, password, callback) {
    // var sql = 'UPDATE t_userinfo SET password = password +' + password + ' WHERE userid = ' + userid;
    var sql = 'UPDATE t_userinfo SET nickname="{0}",password="{1}",bindaccount={2} WHERE userid={3}';
    sql = sql.format(nickname, password, 1, userid);
    this.query(sql, function (err, rows, fields) {
        if (err) {
            if (err.code == 'ER_DUP_ENTRY') {
                callback(0);
                return;
            }
            callback(0);
            throw err;
        }
        else {
            if (rows.affectedRows == 0) {
                callback(0);
                return;
            }
            console.log('绑定账号成功！');
            callback(1);
            return;
        }
    });
};