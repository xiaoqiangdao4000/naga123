System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, EventTarget, EditBox, Label, HTTP, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, bind_account;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfHTTP(extras) {
    _reporterNs.report("HTTP", "../utils/HTTP", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      EventTarget = _cc.EventTarget;
      EditBox = _cc.EditBox;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      HTTP = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1a967QLQtxDMJRI2V8JcKBW", "hall_bind_account", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'EventTarget', 'EditBox', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      if (globalThis.eventTargets == null) {
        globalThis.eventTargets = new EventTarget();
      }

      _export("bind_account", bind_account = (_dec = ccclass('bind_account'), _dec2 = property(EditBox), _dec3 = property(EditBox), _dec4 = property(EditBox), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec(_class = (_class2 = class bind_account extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "nickname_editbox", _descriptor, this);

          _initializerDefineProperty(this, "password_editbox", _descriptor2, this);

          _initializerDefineProperty(this, "password1_editbox", _descriptor3, this);

          _initializerDefineProperty(this, "title", _descriptor4, this);

          _initializerDefineProperty(this, "nickname_lb", _descriptor5, this);

          _initializerDefineProperty(this, "password_lb", _descriptor6, this);
        }

        start() {}

        update(deltaTime) {}

        onEnable() {
          if (globalThis.userMgr.bindaccount == 1 && globalThis.userMgr.password != null && globalThis.userMgr.password != '') {
            this.title.string = '账号已绑定';
            this.nickname_lb.string = '账号：' + globalThis.userMgr.nickname;
            this.nickname_lb.node.active = true;
            this.password_lb.string = '密码：' + globalThis.userMgr.password;
            this.password_lb.node.active = true;
            this.nickname_editbox.node.active = false;
            this.password_editbox.node.active = false;
            this.password1_editbox.node.active = false;
          } else {
            this.title.string = '账号绑定';
            this.nickname_lb.node.active = false;
            this.password_lb.node.active = false;
            this.nickname_editbox.node.active = true;
            this.password_editbox.node.active = true;
            this.password1_editbox.node.active = true;
          }
        }

        onBtnClick(event, customEventData) {
          switch (customEventData) {
            case 'btn_ok':
              {
                if (globalThis.userMgr.bindaccount == 1) {
                  this.node.active = false;
                  break;
                }

                let nickname = this.nickname_editbox.string;
                let password = this.password_editbox.string;
                let password1 = this.password1_editbox.string;

                if (nickname == '') {
                  globalThis.eventTargets.emit('hall_popTips', '用户名不能为空');
                  break;
                }

                if (password == '') {
                  globalThis.eventTargets.emit('hall_popTips', '密码不能为空，请输入6~10位数字或字母！');
                  break;
                }

                if (password1 == '') {
                  globalThis.eventTargets.emit('hall_popTips', '请再次输入密码！');
                  break;
                }

                if (password1 != password) {
                  globalThis.eventTargets.emit('hall_popTips', '两次密码输入不一致，请确认！');
                  break;
                }

                let data = {
                  userid: globalThis.userMgr.userid,
                  nickname: nickname,
                  password: password
                };
                globalThis.hall_message.sendMssage('hall_bind_account', data);
                (_crd && HTTP === void 0 ? (_reportPossibleCrUseOfHTTP({
                  error: Error()
                }), HTTP) : HTTP).getInstance().sendRequest("/hall_bind_account", data, globalThis.userMgr.onBindAccount);
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "password1_editbox", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "title", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "nickname_lb", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "password_lb", [_dec7], {
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
//# sourceMappingURL=a2b4e25154b0acfcd233487ca6e2c12ea531689e.js.map