System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Sprite, Quat, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, loading;

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
      Sprite = _cc.Sprite;
      Quat = _cc.Quat;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9c87bQiloNM86vQtRtQyfjS", "loading", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label', 'Sprite', 'tween', 'Quat', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("loading", loading = (_dec = ccclass('loading'), _dec2 = property(Sprite), _dec(_class = (_class2 = class loading extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "loading_spr", _descriptor, this);
        }

        start() {
          console.log('开始旋转！');
          var sprnode = this.loading_spr.node;
          var quat1 = new Quat();
          var r = sprnode.getRotation(quat1);
          r.y += 0.002;

          if (r.y > 2) {
            r.y = 0;
          }

          sprnode.setRotation(r); // tween(sprnode)
          // .by(1, { rotaton(): r })
          // .repeatForever()
          // .start()
        }

        onEnable() {// tween(this.loading_spr.node)
          // .to(1, { rotation: 360})
          // .repeatForever()
          // .start()    
          // tween(this.node)
          // .by(1, { scale: 1 })
          // .repeatForever()
          // .start()
        }

        update(deltaTime) {
          var sprnode = this.loading_spr.node;
          var quat1 = new Quat();
          var r = sprnode.getRotation(quat1);
          r.y += 0.002;

          if (r.y > 2) {
            r.y = 0;
          }

          sprnode.setRotation(r);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "loading_spr", [_dec2], {
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
//# sourceMappingURL=bfcfc08047513abfd3582bd7fb7895bd894f28c0.js.map