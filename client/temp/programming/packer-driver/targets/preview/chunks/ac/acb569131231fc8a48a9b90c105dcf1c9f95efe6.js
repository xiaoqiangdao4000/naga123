System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, sys, director, _dec, _class, _class2, _crd, ccclass, property, userMgr;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      sys = _cc.sys;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e5c0beBUTNOZ77RM88hWf5o", "userMgr", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'sys', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("userMgr", userMgr = (_dec = ccclass('userMgr'), _dec(_class = (_class2 = class userMgr extends Component {
        constructor() {
          super(...arguments);
          this.account = null;
          this.userid = 0;
          this.nickname = '';
          this.password = '';
          this.score = 0;
          this.sign = 0;
          this.ip = '';
          this.sex = 0;
          this.roomid = null;
          this.bindaccount = 0;
          this.hallip = '';
          this.hallport = 0;
          this.noticemsg = [];
        }

        static getInstance() {
          if (userMgr.instance == null) {
            userMgr.instance = new userMgr();
            return userMgr.instance;
          } else {
            return userMgr.instance;
          }
        }

        start() {
          console.log('userMgr =====');
          globalThis.userMgr = userMgr.getInstance();
        } //获取账号信息


        getAccount() {
          var userData = sys.localStorage.getItem('userinfo');
          var data = JSON.parse(userData);
          var userinfo = {
            nickname: '',
            password: ''
          };

          if (data == null) {
            userinfo.nickname = 'guest';
            userinfo.password = '';
          } else {
            userinfo.nickname = data.nickname;
            userinfo.password = data.password;
          }

          console.log('获取到本地账户:', userinfo);
          return userinfo;
        } //保存账号信息


        saveAccount(nickname, password) {
          var data = {
            nickname: nickname,
            password: password
          };
          sys.localStorage.setItem('userinfo', JSON.stringify(data));
        } //游客登陆


        onGuest(data) {
          if (data.userid == 0) {
            globalThis.eventTargets.emit('login_popTips', '游客登陆失败！');
            console.log('游客登陆失败:', data);
            return;
          } else {
            globalThis.userMgr.userid = data.userid;
            globalThis.userMgr.nickname = data.nickname;
            globalThis.userMgr.score = data.score;
            globalThis.userMgr.password = data.password;
            globalThis.userMgr.roomid = data.roomid;
            globalThis.userMgr.bindaccount = data.bindaccount;
            globalThis.userMgr.saveAccount(data.nickname, data.password); // globalThis.userMgr.hallip = data.hallip;
            // globalThis.userMgr.hallport = data.hallport;
            // HTTP.getInstance().setUrl(data.hallip, data.hallport);

            globalThis.eventTargets.emit('login_poploading', 'hide', '游客登完毕!');
            console.log('游客登陆成功!服务器返回:' + data.userid + ' ,' + data.nickname + ' ,' + data.score + ' ,' + data.password + ' ,' + data.roomid + ' ,' + data.bindaccount);
            console.log('---开始切换场景---');
            director.loadScene('hallScene');
          }
        } //账号登陆


        onAccountLogin(data) {
          if (data.userid == 0) {
            globalThis.eventTargets.emit('login_popTips', '账号登陆失败:用户不存在或密码错误!');
            return;
          }

          globalThis.userMgr.userid = data.userid;
          globalThis.userMgr.nickname = data.nickname;
          globalThis.userMgr.score = data.score;
          globalThis.userMgr.password = data.password;
          globalThis.userMgr.roomid = data.roomid;
          globalThis.userMgr.bindaccount = data.bindaccount; // globalThis.userMgr.hallip = data.hallip;
          // globalThis.userMgr.hallport = data.hallport;
          // HTTP.getInstance().setUrl(data.hallip, data.hallport);

          globalThis.userMgr.saveAccount(data.nickname, data.password);
          globalThis.eventTargets.emit('login_poploading', 'hide', '游客登陆中，请稍等!');
          console.log('账号登陆成功!服务器返回:' + data.userid + ' ,' + data.nickname + ' ,' + data.score + ' ,' + data.password + ' ,' + data.roomid + ' ,' + data.bindaccount);
          console.log('---开始切换场景---');
          director.loadScene('hallScene');
        } //账号绑定


        onBindAccount(data) {
          if (data.userid == 0) {
            globalThis.eventTargets.emit('hall_popTips', '绑定账号失败！');
            return;
          }

          globalThis.userMgr.userid = data.userid;
          globalThis.userMgr.nickname = data.nickname;
          globalThis.userMgr.password = data.password;
          globalThis.userMgr.bindaccount = data.bindaccount;
          globalThis.userMgr.saveAccount(data.nickname, data.password);
          globalThis.eventTargets.emit('hall_bindAccountSuc', data.nickname, '绑定账号成功!');
          globalThis.eventTargets.emit('login_poploading', 'hide', '绑定账号成功!');
          console.log('绑定账号成功!:' + data.userid + ' ,' + data.nickname + ' ,' + data.password + ' ,' + data.bindaccount);
        }

      }, _class2.instance = null, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=acb569131231fc8a48a9b90c105dcf1c9f95efe6.js.map