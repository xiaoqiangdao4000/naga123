System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, loginMessage;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f36818BKRVJyLTeHu4Cg8fR", "loginMessage", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("loginMessage", loginMessage = (_dec = ccclass('loginMessage'), _dec(_class = class loginMessage extends Component {
        constructor() {
          super(...arguments);
          this._ws = null;
        }

        start() {
          this.connectServer();
        }

        update(deltaTime) {}

        connectServer() {
          var ws = new WebSocket('ws://127.0.0.1:3000');
          globalThis.loginWs = ws;

          ws.onopen = () => {
            console.log('连接服务器成功！');
            ws.send('你好，我是客户端！');
          };

          ws.onmessage = result => {
            var msg = JSON.parse(result.data);
            var type = msg.type;
            var data = msg.data;
            this.onMessage(type, data);
          };
        }

        onMessage(type, data) {
          console.log('接受到服务器消息:' + type + ',数据:' + data);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6943d25135ef7a6d9e7e8b283c458335ac1a74e5.js.map