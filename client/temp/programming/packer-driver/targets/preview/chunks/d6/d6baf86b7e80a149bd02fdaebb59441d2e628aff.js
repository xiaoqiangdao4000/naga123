System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, randomRangeInt, _dec, _class, _crd, ccclass, property, sgj_normal;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      randomRangeInt = _cc.randomRangeInt;
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
          this.schedule(this.updateMask, 1);
        }

        stop() {
          this.unschedule(this.cur_schedule);
        }

        updateMask() {
          this.curIndex = randomRangeInt(1, 6);

          for (var i = 0; i < 24; i++) {
            if (i % 6 == this.curIndex) {
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
//# sourceMappingURL=d6baf86b7e80a149bd02fdaebb59441d2e628aff.js.map