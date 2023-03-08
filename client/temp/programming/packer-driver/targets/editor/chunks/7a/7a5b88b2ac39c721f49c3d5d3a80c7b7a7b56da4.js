System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, sys, _dec, _class, _crd, ccclass, property, userMgr;

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

      _export("userMgr", userMgr = (_dec = ccclass('userMgr'), _dec(_class = class userMgr extends Component {
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

        //已创房间号
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

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7a5b88b2ac39c721f49c3d5d3a80c7b7a7b56da4.js.map