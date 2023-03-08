System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Button, _dec, _class, _crd, ccclass, property, eventTarget, login;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Button = _cc.Button;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5a660/bAw1K1prTlu9jufqY", "login", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Button']);

      ({
        ccclass,
        property
      } = _decorator);
      eventTarget = new EventTarget();
      globalThis.eventTarget = eventTarget;

      _export("login", login = (_dec = ccclass('login'), _dec(_class = class login extends Component {
        start() {}

        onBtnClick(event, customEventData) {
          var node = event.target;
          var button = node.getComponent(Button);

          switch (customEventData) {
            case 'guest':
              var aa = globalThis.userMgr.getAccount();
              console.log('aaa = ', aa);
              globalThis.loginMessage.SendMssage('login', 'guest_123');
              console.log('发送登录请求login');
              break;

            default:
              break;
          }
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f3270b4ae422806bdc841547c53b0179863ea06c.js.map