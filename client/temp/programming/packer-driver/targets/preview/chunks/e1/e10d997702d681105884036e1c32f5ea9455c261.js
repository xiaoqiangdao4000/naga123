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

        getWebSocketState() {
          return this._ws.readyState;
        }

        closeWebSocket() {
          //console.log('关闭连接前：this._ws = ', this._ws.readyState);
          this._ws.close(); // console.log('关闭连接后：this._ws = ', this._ws.readyState);

        }

        printWebSocket() {
          console.log('关闭连接前：this.readyState = ', this._ws.readyState);
        } //WebSocket.readyState:
        //0--CONNECTING-套接字已创建。连接尚未打开
        //1--OPEN--连接已打开并准备好进行通信。
        //2--CLOSING--连接正在关闭。
        //3--CLOSED--连接已关闭或无法打开。


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

            case 'hall_notice_msg':
              {
                console.log('收到大厅通知消息 = ', data);
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
          var msgdata = JSON.stringify(msg);

          this._ws.send(msgdata);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e10d997702d681105884036e1c32f5ea9455c261.js.map