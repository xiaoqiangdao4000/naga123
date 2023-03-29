System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, sgj_normal;

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

      _cclegacy._RF.push({}, "0e776xYUI1Iv72stGOFv1M8", "sgj_normal", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'random', 'randomRangeInt']);

      ({
        ccclass,
        property
      } = _decorator); //随机运动

      _export("sgj_normal", sgj_normal = (_dec = ccclass('sgj_normal'), _dec(_class = class sgj_normal extends Component {
        constructor() {
          super(...arguments);
          this.curIndex = 0;
          this.is_start = false;
          this.cur_schedule = null;
        }

        start() {
          this.play();
        }

        play() {
          this.cur_schedule = this.updateMask;
          this.schedule(this.updateMask, 0.6);
        }

        stop() {
          this.unschedule(this.cur_schedule);
        }

        updateMask() {
          if (this.curIndex < 7) this.curIndex++;else this.curIndex = 0;

          for (var i = 0; i < 24; i++) {
            if (i % 7 == this.curIndex) {
              globalThis.sgj_run.mask_node[i].active = true;
            } else {
              globalThis.sgj_run.mask_node[i].active = false;
            }
          }
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=498242e82d4131d967e83bfd02659b194314dc97.js.map