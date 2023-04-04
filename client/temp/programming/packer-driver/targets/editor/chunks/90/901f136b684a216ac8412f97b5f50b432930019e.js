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
      } = _decorator); //待机、随机运动

      _export("sgj_normal", sgj_normal = (_dec = ccclass('sgj_normal'), _dec(_class = class sgj_normal extends Component {
        constructor(...args) {
          super(...args);
          this.curIndex = 0;
          this.cur_schedule = null;
        }

        start() {
          globalThis.sgj_normal = this;
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
          if (this.curIndex < 6) this.curIndex++;else this.curIndex = 1;

          for (let i = 0; i < 24; i++) {
            if (i % 7 == this.curIndex) {
              globalThis.sgj_view.mask_node[i].active = true;
              globalThis.sgj_view.light_node[i].active = true;
              globalThis.sgj_view.mask_node[i - 1].active = true;
              globalThis.sgj_view.light_node[i - 1].active = true;
            } else {
              globalThis.sgj_view.mask_node[i].active = false;
              globalThis.sgj_view.light_node[i].active = false;
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
//# sourceMappingURL=901f136b684a216ac8412f97b5f50b432930019e.js.map