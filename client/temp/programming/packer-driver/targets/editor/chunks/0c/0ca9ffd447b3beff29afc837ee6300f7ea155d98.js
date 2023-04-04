System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, sgj_run;

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

      _cclegacy._RF.push({}, "fdc5cjpCI5GuL0/9Ty2KATJ", "sgj_run", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("sgj_run", sgj_run = (_dec = ccclass('sgj_run'), _dec(_class = class sgj_run extends Component {
        start() {
          globalThis.sgj_run = this;
        }

        update(deltaTime) {}

        play() {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0ca9ffd447b3beff29afc837ee6300f7ea155d98.js.map