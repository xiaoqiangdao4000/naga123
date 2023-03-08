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
      globalThis.userMgr = null;

      _export("userMgr", userMgr = (_dec = ccclass('userMgr'), _dec(_class = (_class2 = class userMgr extends Component {
        constructor(...args) {
          super(...args);
          this.account = null;
          this.userId = 0;
          this.nickName = '';
          this.userScore = 0;
          this.sign = 0;
          this.ip = '';
          this.sex = 0;
          this.roomData = null;
          this.OldRoomId = null;
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
          globalThis.userMgr = this;
          console.log('userMgr =====');
        }

        getAccount() {
          let account = sys.localStorage.getItem('account');

          if (account == null) {
            console.log('Date.now() = ', Date.now());
            this.account = 'guest' + Date.now(); //date
          }
        }

        update(deltaTime) {}

      }, _class2.instance = null, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a0ad8e68bd57bf7e5da05b767a9c9655df004955.js.map