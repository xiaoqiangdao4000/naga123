System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Sprite, tween, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, loading;

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
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      tween = _cc.tween;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9c87bQiloNM86vQtRtQyfjS", "loading", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label', 'Sprite', 'tween', 'Quat', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("loading", loading = (_dec = ccclass('loading'), _dec2 = property(Sprite), _dec3 = property(Label), _dec(_class = (_class2 = class loading extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "loading_spr", _descriptor, this);

          _initializerDefineProperty(this, "tips_lb", _descriptor2, this);

          this.ex = 0;
          this.ey = 0;
          this.ez = 360;
          this.speed = 3;
          this.startR = true;
        }

        start() {}

        setTips(type, tips, deltaTime) {
          if (deltaTime === void 0) {
            deltaTime = 0;
          }

          this.tips_lb.string = tips;
          if (type == 'show') this.node.active = true;else {
            if (deltaTime == 0) this.node.active = false;else {
              var tweenDuration = deltaTime;
              tween(this.node).delay(tweenDuration).call(function () {
                this.node.active = false;
              }).start();
            }
          }
        }

        update(deltaTime) {
          if (this.startR) {
            var sprnode = this.loading_spr.node;
            this.ex = this.ex + this.speed;
            this.ey = this.ey + this.speed;
            this.ez = this.ez - this.speed;
            sprnode.setRotationFromEuler(0, 0, this.ez);
            if (this.ez < 0) this.ez = 360;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "loading_spr", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tips_lb", [_dec3], {
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
//# sourceMappingURL=2bb14fd5810c1f8bdfa8b960edd900141d08c012.js.map