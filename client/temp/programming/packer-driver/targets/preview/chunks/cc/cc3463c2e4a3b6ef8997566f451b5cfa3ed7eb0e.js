System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, EventTarget, instantiate, Prefab, resources, userMgr, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, login;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfuserMgr(extras) {
    _reporterNs.report("userMgr", "../utils/userMgr", _context.meta, extras);
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
      Node = _cc.Node;
      EventTarget = _cc.EventTarget;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
      resources = _cc.resources;
    }, function (_unresolved_2) {
      userMgr = _unresolved_2.userMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5a660/bAw1K1prTlu9jufqY", "login", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'EventTarget', 'Button', 'director', 'instantiate', 'Prefab', 'resources']);

      globalThis.userMgr = (_crd && userMgr === void 0 ? (_reportPossibleCrUseOfuserMgr({
        error: Error()
      }), userMgr) : userMgr).getInstance();
      ({
        ccclass,
        property
      } = _decorator);
      globalThis.eventTargets = new EventTarget();

      _export("login", login = (_dec = ccclass('login'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Prefab), _dec(_class = (_class2 = class login extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "accountLoginNode", _descriptor, this);

          _initializerDefineProperty(this, "tips_node", _descriptor2, this);

          _initializerDefineProperty(this, "tips_prefab", _descriptor3, this);
        }

        onLoad() {
          // resources.load()
          resources.load('assets/prefab', Prefab, (err, prefab) => console.log(err)); // resources.loadDir('assets/prefab', Prefab, (err, prefab) => console.log(err));
        }

        start() {}

        onEnable() {
          globalThis.eventTargets.on('login_chick_nickname', this.addTops, this);
          globalThis.eventTargets.on('login_chick_password', this.addTops, this);
        }

        onDisable() {
          globalThis.eventTargets.off('login_chick_nickname', this.addTops, this);
          globalThis.eventTargets.on('login_chick_password', this.addTops, this);
        }

        addTops(arg1) {
          var t_tips_pre = instantiate(this.tips_prefab);
          this.tips_node.addChild(t_tips_pre);
          var tipsScript = t_tips_pre.getComponent("tips");
          tipsScript.onShow(arg1);
          console.log('Hello World = ', arg1);
        }

        onBtnClick(event, customEventData) {
          switch (customEventData) {
            case 'guestLogin':
              {
                var account = globalThis.userMgr.getAccount();
                globalThis.loginMessage.SendMssage('guestLogin', account);
                console.log('发送游客登录请求login = ', account);
                break;
              }

            case 'accountLogin':
              {
                this.accountLoginNode.active = true;
              }

            default:
              break;
          }
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "accountLoginNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tips_node", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "tips_prefab", [_dec4], {
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
//# sourceMappingURL=cc3463c2e4a3b6ef8997566f451b5cfa3ed7eb0e.js.map