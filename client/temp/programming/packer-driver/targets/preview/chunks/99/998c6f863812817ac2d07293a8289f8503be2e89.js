System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, tween, Vec3, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, tips;

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
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8d672MqAppK6r1edldhRRev", "tips", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label', 'tween', 'Vec3', 'color', 'Color', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("tips", tips = (_dec = ccclass('tips'), _dec2 = property(Label), _dec(_class = (_class2 = class tips extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "tips_lb", _descriptor, this);
        }

        start() {}

        update(deltaTime) {}

        onShow(text) {
          this.tips_lb.string = text;
          var tweenDuration = 1.0;
          tween(this.node).to(tweenDuration, {
            position: new Vec3(0, 370, 0)
          }) // to 动作完成后会调用该方法     
          .removeSelf().start();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tips_lb", [_dec2], {
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
//# sourceMappingURL=998c6f863812817ac2d07293a8289f8503be2e89.js.map