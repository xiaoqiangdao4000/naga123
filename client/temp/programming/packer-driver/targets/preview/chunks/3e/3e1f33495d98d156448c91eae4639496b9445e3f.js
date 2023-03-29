System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, SpriteFrame, Sprite, resources, Prefab, instantiate, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _crd, ccclass, property, game_sgj;

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

      _cclegacy._RF.push({}, "c4efbumBGxDHLk0mbMtiRBm", "sgj_view", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'SpriteFrame', 'Sprite', 'resources', 'Prefab', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("game_sgj", game_sgj = (_dec = ccclass('game_view'), _dec2 = property(SpriteFrame), _dec3 = property(SpriteFrame), _dec4 = property(Sprite), _dec5 = property(Sprite), _dec6 = property(Sprite), _dec7 = property(Sprite), _dec8 = property(Sprite), _dec9 = property(Sprite), _dec10 = property(Sprite), _dec11 = property(Sprite), _dec12 = property(Sprite), _dec13 = property(Sprite), _dec14 = property(Node), _dec(_class = (_class2 = class game_sgj extends Component {
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

          _initializerDefineProperty(this, "tips_node", _descriptor13, this);

          this.bet_score = [8];
        }

        start() {
          globalThis.sgj_view = this; //初始化分数

          globalThis.userMgr.score = 10000;
          this.setUserScore(globalThis.userMgr.score);
          this.setWinScore(0);

          for (var i = 0; i < 8; i++) {
            this.bet_score[i] = 0;
          }

          this.restBetScore();
        }

        update(deltaTime) {} //设置赢分


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
              this.user_score_spr[i].spriteFrame = this.up_number_spf[st];
              this.user_score_spr[i].node.active = true;
            } else {
              this.user_score_spr[i].node.active = false;
            }
          }
        } //增加下注分数


        addBetScore(btnIndex, showtips) {
          if (showtips === void 0) {
            showtips = true;
          }

          var bet_node = this.getBetNode(btnIndex);

          if (this.bet_score[btnIndex - 1] < 99 && globalThis.userMgr.score > 0) {
            this.bet_score[btnIndex - 1] += 1;
            globalThis.userMgr.score -= 1;
            var str = this.bet_score[btnIndex - 1].toString();
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

            this.setUserScore(globalThis.userMgr.score);
          } else {
            if (showtips) {
              this.addTops('余额不足,请充值。。。');
            }
          }
        } //全部加1


        addAllBetScore() {
          if (globalThis.userMgr.score <= 0) {
            this.addTops('余额不足,请充值。。。');
            return;
          }

          if (this.bet_score[0] >= 99 && this.bet_score[1] >= 99 && this.bet_score[2] >= 99 && this.bet_score[3] >= 99 && this.bet_score[4] >= 99 && this.bet_score[5] >= 99 && this.bet_score[6] >= 99 && this.bet_score[7] >= 99) {
            this.addTops('已经是最大下注了，请点击开始游戏！');
            return;
          }

          this.addBetScore(1, false);
          this.addBetScore(2, false);
          this.addBetScore(3, false);
          this.addBetScore(4, false);
          this.addBetScore(5, false);
          this.addBetScore(6, false);
          this.addBetScore(7, false);
          this.addBetScore(8, false);
        } //设置下注分数


        setBetScore(btnIndex, score) {
          var bet_node = this.getBetNode(btnIndex);
          this.bet_score[btnIndex] = score;
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
          if (betIndex == 1) return this.bet1_score_spr;else if (betIndex == 2) return this.bet2_score_spr;else if (betIndex == 3) return this.bet3_score_spr;else if (betIndex == 4) return this.bet4_score_spr;else if (betIndex == 5) return this.bet5_score_spr;else if (betIndex == 6) return this.bet6_score_spr;else if (betIndex == 7) return this.bet7_score_spr;else if (betIndex == 8) return this.bet8_score_spr;
          return null;
        } //重置下注分数


        restBetScore() {
          for (var i = 0; i < 8; i++) {
            this.bet_score[i] = 0;
            var bet_node = null;
            if (i == 0) bet_node = this.bet1_score_spr;else if (i == 1) bet_node = this.bet2_score_spr;else if (i == 2) bet_node = this.bet3_score_spr;else if (i == 3) bet_node = this.bet4_score_spr;else if (i == 4) bet_node = this.bet5_score_spr;else if (i == 5) bet_node = this.bet6_score_spr;else if (i == 6) bet_node = this.bet7_score_spr;else if (i == 7) bet_node = this.bet8_score_spr;
            var str = this.bet_score[i].toString();
            var len = str.length;

            for (var j = 0; j < 2; j++) {
              if (j < len) {
                var st = Number(str[len - j - 1]);
                bet_node[j].spriteFrame = this.up_number_spf[st];
                bet_node[j].node.active = true;
              } else {
                bet_node[j].node.active = false;
              }
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
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "tips_node", [_dec14], {
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
//# sourceMappingURL=3e1f33495d98d156448c91eae4639496b9445e3f.js.map