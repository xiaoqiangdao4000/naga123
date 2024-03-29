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
        constructor(...args) {
          super(...args);
          this._ws = null;
        }

        start() {
          this.connectServer();
          globalThis.hall_message = this;
        }

        update(deltaTime) {}

        closeWebSocket() {
          console.log('关闭连接前：this._ws = ', this._ws);

          this._ws.close();

          console.log('关闭连接后：this._ws = ', this._ws);
        }

        connectServer() {
          const ws = new WebSocket('ws://127.0.0.1:3001');
          this._ws = ws;

          ws.onopen = () => {
            console.log('连接--大厅服务器--成功！');
          };

          ws.onmessage = result => {
            let msg = JSON.parse(result.data);
            let type = msg.type;
            let data = msg.data;
            this.onMessage(type, data);
          };
        }

        onMessage(type, data) {
          switch (type) {
            case 'hall_bind_account':
              //接受账号绑定消息
              {
                if (data == 0) {
                  globalThis.eventTargets.emit('hall_popTips', '绑定账号失败！');
                  break;
                }

                console.log('bang = ', data);
                globalThis.userMgr.userid = data.userid;
                globalThis.userMgr.nickname = data.nickname;
                globalThis.userMgr.password = data.password;
                globalThis.userMgr.bindaccount = data.bindaccount;
                globalThis.userMgr.saveAccount(data.nickname, data.password);
                console.log('绑定账号成功!:' + data.userid + ' ,' + data.nickname + ' ,' + data.password + ' ,' + data.bindaccount);
                globalThis.eventTargets.emit('hall_popTips', '绑定账号--成功--');
                break;
              }

            default:
              break;
          }
        }

        sendMssage(type, data) {
          let msg = {
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
//# sourceMappingURL=3ac45d6ff28bbc494d664370d677847b49c6c87d.js.map