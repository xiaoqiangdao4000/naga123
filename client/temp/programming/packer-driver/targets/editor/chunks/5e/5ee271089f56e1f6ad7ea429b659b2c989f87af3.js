System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Prefab, EventTarget, Label, director, instantiate, resources, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, hall;

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
      Prefab = _cc.Prefab;
      EventTarget = _cc.EventTarget;
      Label = _cc.Label;
      director = _cc.director;
      instantiate = _cc.instantiate;
      resources = _cc.resources;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0c5cfcwBa1ND6V2s0kN6fDr", "hall", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'EventTarget', 'Label', 'director', 'instantiate', 'resources']);

      ({
        ccclass,
        property
      } = _decorator);
      globalThis.eventTargets = new EventTarget();

      _export("hall", hall = (_dec = ccclass('hall'), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Node), _dec(_class = (_class2 = class hall extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "bindaccount_node", _descriptor, this);

          _initializerDefineProperty(this, "nickname_lb", _descriptor2, this);

          _initializerDefineProperty(this, "userid_lb", _descriptor3, this);

          _initializerDefineProperty(this, "score_lb", _descriptor4, this);

          _initializerDefineProperty(this, "tips_node", _descriptor5, this);
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
          resources.load("prefab/tips", Prefab, (err, prefab) => {
            let t_fb = instantiate(prefab);
            this.tips_node.addChild(t_fb);
            let t_script = t_fb.getComponent("tips");
            t_script.onShow(arg1);
          });
        }

        update(deltaTime) {}

        onBtnClick(event, customEventData) {
          switch (customEventData) {
            case 'bindaccount':
              {
                this.bindaccount_node.active = true;
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

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bindaccount_node", [_dec2], {
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
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "tips_node", [_dec6], {
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
//# sourceMappingURL=5ee271089f56e1f6ad7ea429b659b2c989f87af3.js.map