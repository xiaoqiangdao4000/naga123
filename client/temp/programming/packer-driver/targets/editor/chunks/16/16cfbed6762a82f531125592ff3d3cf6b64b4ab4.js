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
        start() {
          globalThis.sgj_moveScore = this;
        }

        play() {
          this.schedule(this.updateScore, 0.6);
        }

        stop() {
          this.unschedule(this.updateScore);
          (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
            error: Error()
          }), AudioMgr) : AudioMgr).inst.stop();
        }

        updateScore() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=16cfbed6762a82f531125592ff3d3cf6b64b4ab4.js.map