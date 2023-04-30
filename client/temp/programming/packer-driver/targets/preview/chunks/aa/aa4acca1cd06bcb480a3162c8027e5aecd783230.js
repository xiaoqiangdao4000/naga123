System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, sgj_endFlash;

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

      _cclegacy._RF.push({}, "05c0fM0XhxPAZdT5ysckLSR", "sgj_endFlash", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator); //所有动画播放完毕后，所有中奖格子闪动

      _export("sgj_endFlash", sgj_endFlash = (_dec = ccclass('sgj_endFlash'), _dec(_class = class sgj_endFlash extends Component {
        constructor() {
          super(...arguments);
          this.steps = void 0;
        }

        start() {
          globalThis.sgj_endFlash = this;
        }

        play(step) {
          this.steps = step;
          this.schedule(this.updateRun, 0.5);
        }

        stop() {
          this.unschedule(this.updateRun);
        }

        updateRun() {
          for (var i = 0; i < this.steps.length; i++) {
            var index = this.steps[i];
            var mask = globalThis.sgj_view.mask_node[index];
            var light = globalThis.sgj_view.light_node[index];
            mask.active = !mask.active;
            light.active = !light.active;
          }
        }

        resetMask() {
          for (var i = 0; i < 24; i++) {
            globalThis.sgj_view.mask_node[i].active = false;
            globalThis.sgj_view.light_node[i].active = false;
          }
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=aa4acca1cd06bcb480a3162c8027e5aecd783230.js.map