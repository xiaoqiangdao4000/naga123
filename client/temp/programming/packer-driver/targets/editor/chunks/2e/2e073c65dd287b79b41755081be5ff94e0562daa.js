System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, sgj_moveScore;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
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
        }

        updateScore() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2e073c65dd287b79b41755081be5ff94e0562daa.js.map