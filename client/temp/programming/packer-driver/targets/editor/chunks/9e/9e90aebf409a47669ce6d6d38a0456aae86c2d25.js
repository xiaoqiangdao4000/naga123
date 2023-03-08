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
        constructor(...args) {
          super(...args);
          this._ws = null;
        }

        start() {
          this.connectServer();
        }

        update(deltaTime) {}

        connectServer() {
          const ws = new WebSocket('ws://127.0.0.1:3000');
          globalThis.loginWs = ws;

          ws.onopen = () => {
            console.log('连接服务器成功！');
            ws.send('你好，我是客户端！');
          };

          ws.onmessage = result => {
            let msg = JSON.parse(result.data);
            let type = msg.type;
            let data = msg.data;
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
//# sourceMappingURL=9e90aebf409a47669ce6d6d38a0456aae86c2d25.js.map