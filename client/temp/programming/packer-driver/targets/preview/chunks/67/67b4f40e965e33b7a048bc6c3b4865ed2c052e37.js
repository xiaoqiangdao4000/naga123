System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, SpriteFrame, Sprite, resources, Prefab, instantiate, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, sgj_sprite;

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
      SpriteFrame = _cc.SpriteFrame;
      Sprite = _cc.Sprite;
      resources = _cc.resources;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1863adQmSVDWIVEune31Yzr", "sgj_sprite", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'SpriteFrame', 'Sprite', 'resources', 'Prefab', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("sgj_sprite", sgj_sprite = (_dec = ccclass('sgj_sprite'), _dec2 = property(SpriteFrame), _dec3 = property(SpriteFrame), _dec4 = property(Sprite), _dec5 = property(Sprite), _dec6 = property(Node), _dec(_class = (_class2 = class sgj_sprite extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "up_number_spf", _descriptor, this);

          _initializerDefineProperty(this, "dowm_number_spf", _descriptor2, this);

          _initializerDefineProperty(this, "win_score_spr", _descriptor3, this);

          _initializerDefineProperty(this, "user_score_spr", _descriptor4, this);

          _initializerDefineProperty(this, "tips_node", _descriptor5, this);
        }

        //设置赢分
        setWinScore(score) {
          var str = score.toString();
          var len = str.length;

          for (var i = 0; i < 10; i++) {
            if (i < len) {
              var st = Number(str[len - i - 1]);
              this.win_score_spr[i].spriteFrame = this.up_number_spf[st];
              this.win_score_spr[i].node.active = true;
            } else {
              this.win_score_spr[i].node.active = false;
            }
          }
        } //设置用户分数


        setUserScore(score) {
          var str = score.toString();
          var len = str.length;

          for (var i = 0; i < 10; i++) {
            if (i < len) {
              var st = Number(str[len - i - 1]);
              console.log('dddddd = ', this.user_score_spr[i]);
              this.user_score_spr[i].spriteFrame = this.up_number_spf[st];
              this.user_score_spr[i].node.active = true;
            } else {
              this.user_score_spr[i].node.active = false;
            }
          }
        } //arg1:弹窗内容


        addTops(arg1) {
          resources.load("prefab/tips", Prefab, (err, prefab) => {
            var t_fb = instantiate(prefab);
            this.tips_node.addChild(t_fb);
            var t_script = t_fb.getComponent("tips");
            t_script.onShow(arg1);
          });
        }

        start() {
          globalThis.sgj_sprite = this;
          globalThis.userMgr.score = 100;
          this.setUserScore(globalThis.userMgr.score);
          this.setWinScore(0);
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "up_number_spf", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "dowm_number_spf", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "win_score_spr", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "user_score_spr", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
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
//# sourceMappingURL=67b4f40e965e33b7a048bc6c3b4865ed2c052e37.js.map