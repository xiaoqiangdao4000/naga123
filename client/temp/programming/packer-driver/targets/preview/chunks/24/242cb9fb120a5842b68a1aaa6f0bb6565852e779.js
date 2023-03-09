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
          globalThis.loginMessage = this;
        }

        update(deltaTime) {}

        connectServer() {
          var ws = new WebSocket('ws://127.0.0.1:3000');
          this._ws = ws;

          ws.onopen = () => {
            console.log('连接服务器成功！');
          };

          ws.onmessage = result => {
            var msg = JSON.parse(result.data);
            var type = msg.type;
            var data = msg.data;
            this.onMessage(type, data);
          };
        }

        onMessage(type, data) {
          switch (type) {
            case 'guestLogin':
              if (data == 0) {
                console.log('游客登陆失败！');
              }

              globalThis.userMgr.userid = data.userid;
              globalThis.userMgr.nickname = data.nickname;
              globalThis.userMgr.score = data.score;
              globalThis.userMgr.saveAccount(data.nickname);
              console.log('登陆成功--ID:' + data.userid + ' --名字:' + data.nickname + ' --分数:' + data.score);
              break;

            default:
              break;
          } // console.log('接受到服务器消息:' + type + ',数据:' + data);

        }

        SendMssage(type, data) {
          var msg = {
            type: type,
            data: data
          };

          this._ws.send(JSON.stringify(msg));
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=242cb9fb120a5842b68a1aaa6f0bb6565852e779.js.map