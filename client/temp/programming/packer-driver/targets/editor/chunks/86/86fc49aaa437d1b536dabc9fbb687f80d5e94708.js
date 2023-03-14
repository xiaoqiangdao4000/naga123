System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, _dec, _class, _crd, ccclass, property, loginMessage;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f36818BKRVJyLTeHu4Cg8fR", "login_message", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'director']);

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
          globalThis.loginMessage = this;
        }

        update(deltaTime) {}

        connectServer() {
          const ws = new WebSocket('ws://127.0.0.1:3000');
          this._ws = ws;

          ws.onopen = () => {
            console.log('连接--登录服务器--成功！');
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
                if (data == 0) {
                  globalThis.eventTargets.emit('login_popTips', '游客登陆失败！');
                  break;
                }

                globalThis.userMgr.userid = data.userid;
                globalThis.userMgr.nickname = data.nickname;
                globalThis.userMgr.score = data.score;
                globalThis.userMgr.password = data.password;
                globalThis.userMgr.roomid = data.roomid;
                globalThis.userMgr.bind_account = data.bind_account;
                globalThis.userMgr.saveAccount(data.nickname, data.password);
                console.log('游客登陆成功!服务器返回:' + data.userid + ' ,' + data.nickname + ' ,' + data.score + ' ,' + data.password + ' ,' + data.roomid + ' ,' + data.bind_account);

                this._ws.close();

                console.log('---开始切换场景：主动关闭登陆连接---');
                director.loadScene('hallScene');
                break;
              }

            case 'accountLogin':
              {
                if (data == 0) {
                  globalThis.eventTargets.emit('login_popTips', '账号登陆失败:用户不存在或密码错误!');
                  break;
                }

                globalThis.userMgr.userid = data.userid;
                globalThis.userMgr.nickname = data.nickname;
                globalThis.userMgr.score = data.score;
                globalThis.userMgr.password = data.password;
                globalThis.userMgr.roomid = data.roomid;
                globalThis.userMgr.bind_account = data.bind_account;
                globalThis.userMgr.saveAccount(data.nickname, data.password);
                console.log('账号登陆成功!服务器返回:' + data.userid + ' ,' + data.nickname + ' ,' + data.score + ' ,' + data.password + ' ,' + data.roomid + ' ,' + data.bind_account);

                this._ws.close();

                console.log('---开始切换场景：主动关闭登陆连接---');
                director.loadScene('hallScene');
                break;
              }

            default:
              break;
          } // console.log('接受到服务器消息:' + type + ',数据:' + data);

        }

        SendMssage(type, data) {
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
//# sourceMappingURL=86fc49aaa437d1b536dabc9fbb687f80d5e94708.js.map