var db = require('../utils/db');

class hallBb extends db {
    static getInstance() {
        if (!hallBb.instance) {
            hallBb.instance = new hallBb();
            return hallBb.instance;
        }
        else {
            return hallBb.instance;
        }
    }

    constructor() {
        super();
    }

    //获取用户信息data{userid,nickname,password,score,headid,roomid,bindaccount}
    getUserInfoByUserID(data, callback) {
        var sql = 'SELECT * FROM t_userinfo WHERE userid = "' + data.userid + '"';
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

    //绑定用户账号
    bandUserAccount(nickname, userid, password, callback) {
       // var sql = 'UPDATE t_userinfo SET password = password +' + password + ' WHERE userid = ' + userid;
        var sql = 'UPDATE t_userinfo SET nicknam="{0}",password="{1}",bandaccount={2} WHERE userid={3}';
        sql = sql.format(nickname,password,1,userid);
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
    }


    //注册游客用户
    registGuest(userid, nickname, password, score, headid, roomid, bindaccount, callback) {
        var sql = 'INSERT INTO t_userinfo(userid,nickname,password,score,headid,roomid,bindaccount) VALUES({0}, "{1}","{2}",{3},{4},{5},{6})';
        sql = sql.format(userid, nickname, password, score, headid, roomid, bindaccount);
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

global.hallBb = hallBb.getInstance();
module.exports = hallBb;
