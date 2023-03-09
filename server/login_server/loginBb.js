var db = require('../utils/db');

class loginBb extends db {
    static getInstance() {
        if (!loginBb.instance) {
            loginBb.instance = new loginBb();
            return loginBb.instance;
        }
        else {
            return loginBb.instance;
        }
    }

    constructor() {
        super();
    }

    //获取用户信息　
    getUserInfo(nickname, callback) {
        var sql = 'SELECT * FROM t_userinfo WHERE nickname = "' + nickname + '"';
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
    }

    //注册游客用户
    registGuest(userid, nickname, score, headid, roomid, callback) {
        var sql = 'INSERT INTO t_userinfo(userid,nickname,score,headid,roomid) VALUES({0}, "{1}",{2},{3},{4})';
        sql = sql.format(userid, nickname, score, headid, roomid);
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
                if (rows.length == 0) {
                    callback(0);
                    return;
                }
                callback(1);
                return;
            }
        });
    }
}

global.loginBb = loginBb.getInstance();
module.exports = loginBb;
