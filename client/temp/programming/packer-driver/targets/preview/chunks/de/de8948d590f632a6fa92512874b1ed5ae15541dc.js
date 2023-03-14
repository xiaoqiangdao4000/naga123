System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, hall_message;

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

      _cclegacy._RF.push({}, "39935gWn8NA/b/mVxM++9Hw", "hall_message", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("hall_message", hall_message = (_dec = ccclass('hall_message'), _dec(_class = class hall_message extends Component {
        constructor() {
          super(...arguments);
          this._ws = null;
        }

        start() {
          this.connectServer();
          globalThis.hall_message = this;
        }

        update(deltaTime) {}

        connectServer() {
          var ws = new WebSocket('ws://127.0.0.1:3001');
          this._ws = ws;

          ws.onopen = () => {
            console.log('连接--大厅服务器--成功！');
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
            case 'hall_bind_account':
              {
                if (data == 0) {
                  globalThis.eventTargets.emit('hall_popTips', '绑定账号失败！');
                  break;
                }

                globalThis.userMgr.userid = data.userid;
                globalThis.userMgr.nickname = data.nickname;
                globalThis.userMgr.password = data.password;
                globalThis.userMgr.bind_account = data.bind_account;
                globalThis.userMgr.saveAccount(data.nickname, data.password);
                console.log('绑定账号成功!返回:' + data.userid + ' ,' + data.nickname + ' ,' + data.password + ' ,' + data.bind_account);
                break;
              }

            default:
              break;
          }
        }

        sendMssage(type, data) {
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
//# sourceMappingURL=de8948d590f632a6fa92512874b1ed5ae15541dc.js.map