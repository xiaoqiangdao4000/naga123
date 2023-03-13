System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, sys, _dec, _class, _class2, _crd, ccclass, property, userMgr;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      sys = _cc.sys;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e5c0beBUTNOZ77RM88hWf5o", "userMgr", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'sys']);

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
          this.score = 0;
          this.sign = 0;
          this.ip = '';
          this.sex = 0;
          this.roomid = null;
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
            account: null,
            password: null
          };

          if (data == null) {
            userinfo.account = 'guest';
            userinfo.password = null;
            console.log('获取到本地账户:null');
          } else {
            userinfo.account = data.account;
            userinfo.password = data.password;
            console.log('获取到本地账户:', userinfo);
          }

          return userinfo;
        } //保存账号信息


        saveAccount(account, password) {
          var data = {
            account: account,
            password: password
          };
          sys.localStorage.setItem('userinfo', JSON.stringify(data));
        }

        update(deltaTime) {}

      }, _class2.instance = null, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f8830b80a5cf922ce1082f0f74f94a29f7269fb2.js.map