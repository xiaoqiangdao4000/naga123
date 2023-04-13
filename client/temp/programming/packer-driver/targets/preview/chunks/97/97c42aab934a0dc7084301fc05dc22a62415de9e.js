System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Button, AudioMgr, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, sgj_btn;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAudioMgr(extras) {
    _reporterNs.report("AudioMgr", "../utils/AudioMgr", _context.meta, extras);
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
      Button = _cc.Button;
    }, function (_unresolved_2) {
      AudioMgr = _unresolved_2.AudioMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "342ee011AlNaYZ8wyVdn03e", "sgj_btn", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'EventHandler', 'EventTouch', 'Sprite', 'math', 'randomRangeInt', 'Button']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("sgj_btn", sgj_btn = (_dec = ccclass('sgj_btn'), _dec2 = property({
        tooltip: "触摸回调间隔（秒）。假如为0.1，那么1秒内会回调10次 ${longTouchEvents} 事件数组"
      }), _dec3 = property({
        tooltip: "是否支持长按"
      }), _dec4 = property({
        readonly: true,
        tooltip: "是否支持多点触控（当前还不支持）"
      }), _dec5 = property({
        type: [Component.EventHandler],
        tooltip: "回调事件数组，每间隔 ${toucheInterval}s 回调一次"
      }), _dec(_class = (_class2 = class sgj_btn extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "touchInterval", _descriptor, this);

          _initializerDefineProperty(this, "isLongPress", _descriptor2, this);

          _initializerDefineProperty(this, "enableMultiTouching", _descriptor3, this);

          _initializerDefineProperty(this, "longTouchEvents", _descriptor4, this);

          this._touchCounter = 0;
          this._isTouching = false;
          this.myButton = void 0;
        }

        start() {
          this.myButton = this.node.getComponent(Button);
        }

        update(deltaTime) {}

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
          if (this.myButton.interactable == false) return;
          this._isTouching = true; // 第一次触摸立即回调一次

          this.publishOneTouch(); //不支持长按

          if (this.isLongPress == true) {
            this._isTouching = true;
          } else {
            this._isTouching = false;
            return;
          } // 然后开启计时器，计算后续的长按相当于触摸了多少次


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
        } //处理逻辑事件


        handleToucheLogic(touchCounter, customEventData) {
          console.log("\u5F53\u524D\u4E0B\u6CE8\u6309\u94AE = ", customEventData);

          switch (customEventData) {
            case 'b1':
              {
                (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
                  error: Error()
                }), AudioMgr) : AudioMgr).inst.play('sound/sgj/sgj_bt1');
                globalThis.sgj_view.addBetScore(0);
                break;
              }

            case 'b2':
              {
                (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
                  error: Error()
                }), AudioMgr) : AudioMgr).inst.play('sound/sgj/sgj_bt2');
                globalThis.sgj_view.addBetScore(1);
                break;
              }

            case 'b3':
              {
                (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
                  error: Error()
                }), AudioMgr) : AudioMgr).inst.play('sound/sgj/sgj_bt3');
                globalThis.sgj_view.addBetScore(2);
                break;
              }

            case 'b4':
              {
                (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
                  error: Error()
                }), AudioMgr) : AudioMgr).inst.play('sound/sgj/sgj_bt4');
                globalThis.sgj_view.addBetScore(3);
                break;
              }

            case 'b5':
              {
                (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
                  error: Error()
                }), AudioMgr) : AudioMgr).inst.play('sound/sgj/sgj_bt5');
                globalThis.sgj_view.addBetScore(4);
                break;
              }

            case 'b6':
              {
                (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
                  error: Error()
                }), AudioMgr) : AudioMgr).inst.play('sound/sgj/sgj_bt6');
                globalThis.sgj_view.addBetScore(5);
                break;
              }

            case 'b7':
              {
                (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
                  error: Error()
                }), AudioMgr) : AudioMgr).inst.play('sound/sgj/sgj_bt7');
                globalThis.sgj_view.addBetScore(6);
                break;
              }

            case 'b8':
              {
                (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
                  error: Error()
                }), AudioMgr) : AudioMgr).inst.play('sound/sgj/sgj_bt8');
                globalThis.sgj_view.addBetScore(7);
                break;
              }

            case 'all':
              {
                (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
                  error: Error()
                }), AudioMgr) : AudioMgr).inst.play('sound/sgj/sgj_bt1');
                globalThis.sgj_view.addAllBetScore();
                break;
              }

            case 'go':
              {
                //判断当前状态
                if (globalThis.sjg_game.gameState == 0) //下注状态--开始游戏
                  {
                    //按钮状态begin-------
                    globalThis.sgj_view.all_btn.interactable = false;
                    globalThis.sgj_view.left_btn.interactable = false;
                    globalThis.sgj_view.right_btn.interactable = false;
                    globalThis.sgj_view.small_btn.interactable = false;
                    globalThis.sgj_view.big_btn.interactable = false;
                    globalThis.sgj_view.go_btn.interactable = false;
                    globalThis.sgj_view.bet1_btn.interactable = false;
                    globalThis.sgj_view.bet2_btn.interactable = false;
                    globalThis.sgj_view.bet3_btn.interactable = false;
                    globalThis.sgj_view.bet4_btn.interactable = false;
                    globalThis.sgj_view.bet5_btn.interactable = false;
                    globalThis.sgj_view.bet6_btn.interactable = false;
                    globalThis.sgj_view.bet7_btn.interactable = false;
                    globalThis.sgj_view.bet8_btn.interactable = false; //按钮状态end---------

                    globalThis.sgj_normal.stop();
                    globalThis.sjg_game.onGameEnd();
                  } else if (globalThis.sjg_game.gameState == 1) //结束状态--可以收分
                  {
                    globalThis.sgj_moveScore.play();
                  }

                break;
              }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "touchInterval", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.2;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "isLongPress", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "enableMultiTouching", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "longTouchEvents", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=97c42aab934a0dc7084301fc05dc22a62415de9e.js.map