System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, sgj_btn;

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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "342ee011AlNaYZ8wyVdn03e", "sgj_btn", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'EventHandler', 'EventTouch']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("sgj_btn", sgj_btn = (_dec = ccclass('sgj_btn'), _dec2 = property({
        tooltip: "触摸回调间隔（秒）。假如为0.1，那么1秒内会回调10次 ${longTouchEvents} 事件数组"
      }), _dec3 = property({
        readonly: true,
        tooltip: "是否支持多点触控（当前还不支持）"
      }), _dec4 = property({
        type: [Component.EventHandler],
        tooltip: "回调事件数组，每间隔 ${toucheInterval}s 回调一次"
      }), _dec(_class = (_class2 = class sgj_btn extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "touchInterval", _descriptor, this);

          _initializerDefineProperty(this, "enableMultiTouching", _descriptor2, this);

          _initializerDefineProperty(this, "longTouchEvents", _descriptor3, this);

          this._touchCounter = 0;
          this._isTouching = false;
        }

        onEnable() {
          this.node.on(Node.EventType.TOUCH_START, this._onTouchStart, this);
          this.node.on(Node.EventType.TOUCH_END, this._onTouchEnd, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this._onTouchCancel, this);
        }

        onDisable() {
          this.node.off(Node.EventType.TOUCH_START, this._onTouchStart, this);
          this.node.off(Node.EventType.TOUCH_END, this._onTouchEnd, this);
          this.node.off(Node.EventType.TOUCH_CANCEL, this._onTouchCancel, this);
        }

        _onTouchStart(event) {
          // 第一次触摸立即回调一次
          this.publishOneTouch(); // 然后开启计时器，计算后续的长按相当于触摸了多少次

          this.schedule(this._touchCounterCallback, this.touchInterval);
        }

        _onTouchEnd(event) {
          this._isTouching = false;
          this._touchCounter = 0;
          this.unschedule(this._touchCounterCallback);
        }

        _onTouchCancel(event) {
          this._isTouching = false;
          this._touchCounter = 0;
          this.unschedule(this._touchCounterCallback);
        }

        _touchCounterCallback() {
          if (this._isTouching) {
            this.publishOneTouch();
          } else {
            this.unschedule(this._touchCounterCallback);
          }
        }
        /**
         * 通知出去：被点击/触摸了一次，长按时，会连续多次回调这个方法
         */


        publishOneTouch() {
          if (!this._isTouching) {
            return;
          }

          this._touchCounter++;
          this.longTouchEvents.forEach(eventHandler => {
            eventHandler.emit([this._touchCounter]);
          });
        }

        start() {}

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "touchInterval", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "enableMultiTouching", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "longTouchEvents", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1364d04cf967bdcf898b4bb3ff216b37c3c63adc.js.map