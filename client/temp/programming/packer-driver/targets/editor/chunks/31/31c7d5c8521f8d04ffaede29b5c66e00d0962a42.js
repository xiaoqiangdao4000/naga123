System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _class2, _crd, ccclass, property, websocket;

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

      _cclegacy._RF.push({}, "1e854rDUHNCrL8jSN8M17bj", "websocket", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("websocket", websocket = (_dec = ccclass('websocket'), _dec(_class = (_class2 = class websocket extends Component {
        static getInstance() {
          if (this.instance == null) {
            this.instance = new websocket();
            return this.instance;
          } else {
            return this.instance;
          }
        }

        constructor() {
          super();
          this._ws = null;
          this.onmessage_callback = null;
          console.log('websocket new  ');
        }

        start() {
          console.log('websocket onstart');
        }

        update(deltaTime) {}

        connectServer(ip, port) {
          //'ws://127.0.0.1:3000'
          let addr = 'ws://' + ip + ':' + port;
          const ws = new WebSocket(addr);
          this._ws = ws;

          ws.onopen = () => {
            console.log('连接--游戏服务器--成功！');
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
            case 'guestLogin':
              {
                break;
              }

            case 'accountLogin':
              {
                break;
              }

            default:
              break;
          } // console.log('接受到服务器消息:' + type + ',数据:' + data);

        }

        sendMssage(type, data) {
          let msg = {
            type: type,
            data: data
          };

          this._ws.send(JSON.stringify(msg));
        }

      }, _class2.instance = null, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=31c7d5c8521f8d04ffaede29b5c66e00d0962a42.js.map