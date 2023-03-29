System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, SpriteFrame, Sprite, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _crd, ccclass, property, game_sgj;

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
      SpriteFrame = _cc.SpriteFrame;
      Sprite = _cc.Sprite;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "716e6yjPSNAIKngeGJDt5s4", "game_sgj", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'SpriteFrame', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("game_sgj", game_sgj = (_dec = ccclass('game_sgj'), _dec2 = property(SpriteFrame), _dec3 = property(SpriteFrame), _dec4 = property(Sprite), _dec5 = property(Sprite), _dec6 = property(Sprite), _dec7 = property(Sprite), _dec8 = property(Sprite), _dec9 = property(Sprite), _dec10 = property(Sprite), _dec11 = property(Sprite), _dec12 = property(Sprite), _dec13 = property(Sprite), _dec(_class = (_class2 = class game_sgj extends Component {
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

          this.bet_score = [8];
        }

        //
        start() {
          //初始化分数
          globalThis.userMgr.score = 100;
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
        }

        onBtnClick(event, customEventData) {
          switch (customEventData) {
            case 'go':
              {
                this.setUserScore(10000);
                break;
              }

            case 'bet1':
              {
                this.setBetScore(this.bet1_score_spr, 0);
                break;
              }

            case 'bet2':
              {
                this.setBetScore(this.bet2_score_spr, 1);
                break;
              }

            case 'bet3':
              {
                this.setBetScore(this.bet3_score_spr, 2);
                break;
              }

            case 'bet4':
              {
                this.setBetScore(this.bet4_score_spr, 3);
                break;
              }

            case 'bet5':
              {
                this.setBetScore(this.bet5_score_spr, 4);
                break;
              }

            case 'bet6':
              {
                this.setBetScore(this.bet6_score_spr, 5);
                break;
              }

            case 'bet7':
              {
                this.setBetScore(this.bet7_score_spr, 6);
                break;
              }

            case 'bet8':
              {
                this.setBetScore(this.bet8_score_spr, 7);
                break;
              }

            default:
              break;
          }
        } //设置下注分数


        setBetScore(betn_node, btnindex) {
          if (this.bet_score[btnindex] < 99 && globalThis.userMgr.score > 0) {
            this.bet_score[btnindex] += 1;
            globalThis.userMgr.score -= 1;
            var str = this.bet_score[btnindex].toString();
            var len = str.length;

            for (var i = 0; i < 2; i++) {
              if (i < len) {
                var st = Number(str[len - i - 1]);
                betn_node[i].spriteFrame = this.up_number_spf[st];
                betn_node[i].node.active = true;
              } else {
                betn_node[i].node.active = false;
              }
            }

            this.setUserScore(globalThis.userMgr.score);
          }
        } //重置下注分数


        restBetScore() {
          for (var i = 0; i < 8; i++) {
            this.bet_score[i] = 0;
            var bet_node = null;
            if (i == 0) bet_node = this.bet1_score_spr;else if (i == 1) bet_node = this.bet2_score_spr;else if (i == 2) bet_node = this.bet3_score_spr;else if (i == 3) bet_node = this.bet4_score_spr;else if (i == 4) bet_node = this.bet5_score_spr;else if (i == 5) bet_node = this.bet6_score_spr;else if (i == 6) bet_node = this.bet7_score_spr;else if (i == 7) bet_node = this.bet8_score_spr;
            var str = this.bet_score[i].toString();
            var len = str.length;

            for (var j = 0; j < 2; j++) {
              if (i < len) {
                var st = Number(str[len - j - 1]);
                bet_node[j].spriteFrame = this.up_number_spf[st];
                bet_node[j].node.active = true;
              } else {
                bet_node[j].node.active = false;
              }
            }
          }
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
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ad62649fe6882eb7a71d4eddbfa65475218e0544.js.map