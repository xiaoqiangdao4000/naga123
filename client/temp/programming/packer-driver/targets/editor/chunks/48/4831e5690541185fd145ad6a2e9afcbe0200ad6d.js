System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, sys, director, HTTP, _dec, _class, _class2, _crd, ccclass, property, userMgr;

  function _reportPossibleCrUseOfHTTP(extras) {
    _reporterNs.report("HTTP", "./HTTP", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      sys = _cc.sys;
      director = _cc.director;
    }, function (_unresolved_2) {
      HTTP = _unresolved_2.default;
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
        constructor(...args) {
          super(...args);
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
          this.noticemsg = '';
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
          let userData = sys.localStorage.getItem('userinfo');
          let data = JSON.parse(userData);
          let userinfo = {
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
          let data = {
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
            globalThis.userMgr.hallip = data.hallip;
            globalThis.userMgr.hallport = data.hallport;
            (_crd && HTTP === void 0 ? (_reportPossibleCrUseOfHTTP({
              error: Error()
            }), HTTP) : HTTP).getInstance().setUrl(data.hallip, data.hallport);
            globalThis.userMgr.saveAccount(data.nickname, data.password);
            globalThis.eventTargets.emit('login_poploading', 'hide', '游客登陆中，请稍等!');
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
          globalThis.userMgr.bindaccount = data.bindaccount;
          globalThis.userMgr.hallip = data.hallip;
          globalThis.userMgr.hallport = data.hallport;
          (_crd && HTTP === void 0 ? (_reportPossibleCrUseOfHTTP({
            error: Error()
          }), HTTP) : HTTP).getInstance().setUrl(data.hallip, data.hallport);
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
//# sourceMappingURL=4831e5690541185fd145ad6a2e9afcbe0200ad6d.js.map