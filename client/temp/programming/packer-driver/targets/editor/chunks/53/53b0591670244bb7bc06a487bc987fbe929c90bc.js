System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, sgj_runSingle;

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

      _cclegacy._RF.push({}, "20585DZcQ9I7ZVfN0wgebxF", "sgj_runSingle", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("sgj_runSingle", sgj_runSingle = (_dec = ccclass('sgj_runSingle'), _dec(_class = class sgj_runSingle extends Component {
        constructor(...args) {
          super(...args);
          this.step = [];
          this.area = [];
        }

        //中奖区域
        start() {
          globalThis.sgj_runSingle = this;
        }

        play() {
          //this.step.push();
          this.schedule(this.updateRun, 0.6);
        }

        stop() {
          this.unschedule(this.updateRun);
        }

        updateRun() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=53b0591670244bb7bc06a487bc987fbe929c90bc.js.map