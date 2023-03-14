System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, EventTarget, Label, director, instantiate, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, hall;

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
      Node = _cc.Node;
      EventTarget = _cc.EventTarget;
      Label = _cc.Label;
      director = _cc.director;
      instantiate = _cc.instantiate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0c5cfcwBa1ND6V2s0kN6fDr", "hall", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'EventTarget', 'Label', 'director', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);

      if (globalThis.eventTargets == null) {
        console.log('log = new halleventtargets');
        globalThis.eventTargets = new EventTarget();
      }

      _export("hall", hall = (_dec = ccclass('hall'), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Node), _dec(_class = (_class2 = class hall extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "bindAccount_prefab", _descriptor, this);

          _initializerDefineProperty(this, "nickname_lb", _descriptor2, this);

          _initializerDefineProperty(this, "userid_lb", _descriptor3, this);

          _initializerDefineProperty(this, "score_lb", _descriptor4, this);

          _initializerDefineProperty(this, "tips_prefab", _descriptor5, this);
        }

        start() {
          this.init();
        }

        init() {
          this.nickname_lb.string = globalThis.userMgr.nickname;
          this.userid_lb.string = globalThis.userMgr.userid;
          this.score_lb.string = globalThis.userMgr.score;
        }

        onEnable() {
          globalThis.eventTargets.on('hall_popTips', this.addTops, this);
        }

        onDisable() {
          globalThis.eventTargets.off('hall_popTips', this.addTops, this);
        } //arg1:弹窗内容


        addTops(arg1) {
          var t_tips_pre = instantiate(this.tips_prefab);
          t_tips_pre.active = true;
          this.tips_node.addChild(t_tips_pre);
          var tipsScript = t_tips_pre.getComponent("tips");
          tipsScript.onShow(arg1);
        }

        update(deltaTime) {}

        onBtnClick(event, customEventData) {
          switch (customEventData) {
            case 'bindaccount':
              {
                this.bindAccount_prefab.active = true;
                break;
              }

            case 'rank':
              {
                director.loadScene('loginScene');
              }

            default:
              break;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bindAccount_prefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nickname_lb", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "userid_lb", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "score_lb", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "tips_prefab", [_dec6], {
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
//# sourceMappingURL=2f2c65595460a50dd67c624149af9ba73cf4c278.js.map