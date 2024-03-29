System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, EditBox, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, login_account;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      EditBox = _cc.EditBox;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0c1fbh88BhNSb9xyEK7eeei", "login_account", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'EditBox', 'input', 'EventTouch', 'Input']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("login_account", login_account = (_dec = ccclass('login_account'), _dec2 = property(EditBox), _dec3 = property(EditBox), _dec(_class = (_class2 = class login_account extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "nickname_editbox", _descriptor, this);

          _initializerDefineProperty(this, "password_editbox", _descriptor2, this);
        }

        start() {}

        update(deltaTime) {}

        onBtnClick(event, customEventData) {
          switch (customEventData) {
            case 'btn_ok':
              {
                let nickname = this.nickname_editbox.string;
                let password = this.password_editbox.string;
                let account = globalThis.userMgr.getAccount();
                let data = {
                  nickname: nickname,
                  password: password
                };
                globalThis.loginMessage.SendMssage('accountLogin', data);
                console.log('发送账号登录请求login = ', account);
                break;
              }

            case 'btn_close':
              {
                this.node.active = false;
                break;
              }

            default:
              break;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nickname_editbox", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "password_editbox", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c7bf5b8e5ea23562abc84b03d4b15f4a4712a9ae.js.map