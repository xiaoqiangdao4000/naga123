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
          this.bind_account = 0;
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
        }

        update(deltaTime) {}

      }, _class2.instance = null, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e1455fee4e344b46c361b020989206bff02e4c02.js.map