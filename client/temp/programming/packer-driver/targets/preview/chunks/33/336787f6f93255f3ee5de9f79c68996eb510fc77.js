System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Label, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, hall;

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
      Label = _cc.Label;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0c5cfcwBa1ND6V2s0kN6fDr", "hall", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("hall", hall = (_dec = ccclass('hall'), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec(_class = (_class2 = class hall extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "bindAccount_prefab", _descriptor, this);

          _initializerDefineProperty(this, "nickname_lb", _descriptor2, this);

          _initializerDefineProperty(this, "userid_lb", _descriptor3, this);

          _initializerDefineProperty(this, "score_lb", _descriptor4, this);
        }

        start() {
          this.init();
        }

        init() {
          this.nickname_lb.string = globalThis.userMgr.nickname;
          this.userid_lb.string = globalThis.userMgr.userid;
          this.score_lb.string = globalThis.userMgr.score;
        }

        update(deltaTime) {}

        onBtnClick(event, customEventData) {
          switch (customEventData) {
            case 'bindaccount':
              {
                this.bindAccount_prefab.active = true;
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
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=336787f6f93255f3ee5de9f79c68996eb510fc77.js.map