System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, AudioMgr, _dec, _class, _crd, ccclass, property, sgj_moveScore;

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
    }, function (_unresolved_2) {
      AudioMgr = _unresolved_2.AudioMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f22a5VgKc1CfLDw531qrDGj", "sgj_moveScore", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("sgj_moveScore", sgj_moveScore = (_dec = ccclass('sgj_moveScore'), _dec(_class = class sgj_moveScore extends Component {
        constructor() {
          super(...arguments);
          this.scoretime_add = 1;
        }

        start() {
          globalThis.sgj_moveScore = this;
        }

        play() {
          this.stop();
          var win = globalThis.game_sgj.getWinScore();
          this.scoretime_add = 1; // if (win < 50) {
          //     this.scoretime_add = Math.floor(win / 5);
          //     AudioMgr.inst.playOneShot("moveScroe");
          // }
          // else if (win < 300) {
          //     this.scoretime_add = Math.floor(win / 10);
          // }
          // else if (win < 700) {
          //     this.scoretime_add = Math.floor(win / 15);
          // }
          // else if (win < 1000) {
          //     this.scoretime_add = Math.floor(win / 20);
          // }
          // else if (win < 2000) {
          //     this.scoretime_add = Math.floor(win / 25);
          // }
          // else if (win < 4000) {
          //     this.scoretime_add = Math.floor(win / 30);
          // }
          // else {
          //     this.scoretime_add = Math.floor(win / 40);
          // }

          if (win > 50) {
            this.SocreMoveByAll();
          } else {
            this.schedule(this.updateScore, 0.05);
          }
        }

        stop() {
          this.unschedule(this.updateScore);
        }

        updateScore() {
          var t_game_sgj = globalThis.game_sgj;
          var win = t_game_sgj.getWinScore();

          if (win > 0) {
            t_game_sgj.setWinScore(win - 1);
            globalThis.userMgr.score = globalThis.userMgr.score + 1;
            t_game_sgj.setUserScore(globalThis.userMgr.score);
            (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
              error: Error()
            }), AudioMgr) : AudioMgr).inst.play('sound/sgj/getscore');
          } else {
            this.stop();
            globalThis.game_sgj.gameState = 0;
            globalThis.sgj_view.all_btn.interactable = true;
            globalThis.sgj_view.left_btn.interactable = false;
            globalThis.sgj_view.right_btn.interactable = false;
            globalThis.sgj_view.small_btn.interactable = false;
            globalThis.sgj_view.big_btn.interactable = false;
            globalThis.sgj_view.go_btn.interactable = true;
            globalThis.sgj_view.bet1_btn.interactable = true;
            globalThis.sgj_view.bet2_btn.interactable = true;
            globalThis.sgj_view.bet3_btn.interactable = true;
            globalThis.sgj_view.bet4_btn.interactable = true;
            globalThis.sgj_view.bet5_btn.interactable = true;
            globalThis.sgj_view.bet6_btn.interactable = true;
            globalThis.sgj_view.bet7_btn.interactable = true;
            globalThis.sgj_view.bet8_btn.interactable = true;
          }
        }

        SocreMoveByAll() {
          var t_game_sgj = globalThis.game_sgj;
          var win = t_game_sgj.getWinScore();
          t_game_sgj.setWinScore(0);
          globalThis.userMgr.score = globalThis.userMgr.score + win;
          t_game_sgj.setUserScore(globalThis.userMgr.score);
          (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
            error: Error()
          }), AudioMgr) : AudioMgr).inst.play('sound/sgj/moveScore');
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a7ae854760649df70d930346a94d2d9673320f14.js.map