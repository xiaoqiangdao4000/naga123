System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, SpriteFrame, Sprite, resources, Prefab, instantiate, Button, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _crd, ccclass, property, game_sgj;

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
      Button = _cc.Button;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c4efbumBGxDHLk0mbMtiRBm", "sgj_view", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'SpriteFrame', 'Sprite', 'resources', 'Prefab', 'instantiate', 'Button']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("game_sgj", game_sgj = (_dec = ccclass('game_view'), _dec2 = property(SpriteFrame), _dec3 = property(SpriteFrame), _dec4 = property(Sprite), _dec5 = property(Sprite), _dec6 = property(Sprite), _dec7 = property(Sprite), _dec8 = property(Sprite), _dec9 = property(Sprite), _dec10 = property(Sprite), _dec11 = property(Sprite), _dec12 = property(Sprite), _dec13 = property(Sprite), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Button), _dec17 = property(Button), _dec18 = property(Button), _dec19 = property(Button), _dec20 = property(Button), _dec21 = property(Button), _dec22 = property(Node), _dec23 = property(Button), _dec24 = property(Button), _dec25 = property(Button), _dec26 = property(Button), _dec27 = property(Button), _dec28 = property(Button), _dec29 = property(Button), _dec30 = property(Button), _dec31 = property(Node), _dec(_class = (_class2 = class game_sgj extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "up_number_spf", _descriptor, this);

          _initializerDefineProperty(this, "dowm_number_spf", _descriptor2, this);

          _initializerDefineProperty(this, "win_score_spr", _descriptor3, this);

          _initializerDefineProperty(this, "user_score_spr", _descriptor4, this);

          _initializerDefineProperty(this, "bet1_score_spr", _descriptor5, this);

          _initializerDefineProperty(this, "bet2_score_spr", _descriptor6, this);

          _initializerDefineProperty(this, "bet3_score_spr", _descriptor7, this);

          _initializerDefineProperty(this, "bet4_score_spr", _descriptor8, this);

          _initializerDefineProperty(this, "bet5_score_spr", _descriptor9, this);

          _initializerDefineProperty(this, "bet6_score_spr", _descriptor10, this);

          _initializerDefineProperty(this, "bet7_score_spr", _descriptor11, this);

          _initializerDefineProperty(this, "bet8_score_spr", _descriptor12, this);

          _initializerDefineProperty(this, "mask_node", _descriptor13, this);

          _initializerDefineProperty(this, "light_node", _descriptor14, this);

          _initializerDefineProperty(this, "all_btn", _descriptor15, this);

          _initializerDefineProperty(this, "left_btn", _descriptor16, this);

          _initializerDefineProperty(this, "right_btn", _descriptor17, this);

          _initializerDefineProperty(this, "small_btn", _descriptor18, this);

          _initializerDefineProperty(this, "big_btn", _descriptor19, this);

          _initializerDefineProperty(this, "go_btn", _descriptor20, this);

          _initializerDefineProperty(this, "cancel_go_btn", _descriptor21, this);

          _initializerDefineProperty(this, "bet1_btn", _descriptor22, this);

          _initializerDefineProperty(this, "bet2_btn", _descriptor23, this);

          _initializerDefineProperty(this, "bet3_btn", _descriptor24, this);

          _initializerDefineProperty(this, "bet4_btn", _descriptor25, this);

          _initializerDefineProperty(this, "bet5_btn", _descriptor26, this);

          _initializerDefineProperty(this, "bet6_btn", _descriptor27, this);

          _initializerDefineProperty(this, "bet7_btn", _descriptor28, this);

          _initializerDefineProperty(this, "bet8_btn", _descriptor29, this);

          _initializerDefineProperty(this, "tips_node", _descriptor30, this);
        }

        start() {
          globalThis.sgj_view = this; //初始化分数

          globalThis.userMgr.score = 10000;
          this.setWinScoreView(0);
          this.setUserScoreView(globalThis.userMgr.score); //重置按钮

          this.all_btn.interactable = true;
          this.left_btn.interactable = false;
          this.right_btn.interactable = false;
          this.big_btn.interactable = false;
          this.small_btn.interactable = false;
          this.go_btn.interactable = false;
          this.cancel_go_btn.active = false;
          this.bet1_btn.interactable = true;
          this.bet2_btn.interactable = true;
          this.bet3_btn.interactable = true;
          this.bet4_btn.interactable = true;
          this.bet5_btn.interactable = true;
          this.bet6_btn.interactable = true;
          this.bet7_btn.interactable = true;
          this.bet8_btn.interactable = true;
        }

        update(deltaTime) {} //重置界面


        resetMask() {
          for (var i = 0; i < 24; i++) {
            this.mask_node[i].active = false;
            this.light_node[i].active = false;
          }
        } //设置赢分界面


        setWinScoreView(score) {
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
        } //设置用户分数界面


        setUserScoreView(score) {
          var str = score.toString();
          var len = str.length;

          for (var i = 0; i < 10; i++) {
            if (i < len) {
              var st = Number(str[len - i - 1]);
              this.user_score_spr[i].spriteFrame = this.up_number_spf[st];
              this.user_score_spr[i].node.active = true;
            } else {
              this.user_score_spr[i].node.active = false;
            }
          }
        } //设置下注分数0,7


        setBetScoreView(area, score) {
          if (area < 0 || area > 7) return;
          var bet_node = this.getBetNode(area);
          var str = score.toString();
          var len = str.length;

          for (var i = 0; i < 2; i++) {
            if (i < len) {
              var st = Number(str[len - i - 1]);
              bet_node[i].spriteFrame = this.up_number_spf[st];
              bet_node[i].node.active = true;
            } else {
              bet_node[i].node.active = false;
            }
          }
        } //获取对应下注节点


        getBetNode(betIndex) {
          if (betIndex == 0) return this.bet1_score_spr;else if (betIndex == 1) return this.bet2_score_spr;else if (betIndex == 2) return this.bet3_score_spr;else if (betIndex == 3) return this.bet4_score_spr;else if (betIndex == 4) return this.bet5_score_spr;else if (betIndex == 5) return this.bet6_score_spr;else if (betIndex == 6) return this.bet7_score_spr;else if (betIndex == 7) return this.bet8_score_spr;
          return null;
        } //arg1:弹窗内容


        addTops(arg1) {
          resources.load("prefab/tips", Prefab, (err, prefab) => {
            var t_fb = instantiate(prefab);
            this.tips_node.addChild(t_fb);
            var t_script = t_fb.getComponent("tips");
            t_script.onShow(arg1);
          });
        }

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
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "bet1_score_spr", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "bet2_score_spr", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "bet3_score_spr", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "bet4_score_spr", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "bet5_score_spr", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "bet6_score_spr", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "bet7_score_spr", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "bet8_score_spr", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "mask_node", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "light_node", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "all_btn", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "left_btn", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "right_btn", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "small_btn", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "big_btn", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "go_btn", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "cancel_go_btn", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "bet1_btn", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "bet2_btn", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "bet3_btn", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "bet4_btn", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "bet5_btn", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "bet6_btn", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "bet7_btn", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "bet8_btn", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "tips_node", [_dec31], {
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
//# sourceMappingURL=8d1b57b38030c0272184554ad5453980eca72f6a.js.map