System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, HTTP, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "65198/vo+dMI4kHvP5UC/fK", "HTTP", undefined);

      __checkObsolete__(['sys']);

      _export("default", HTTP = class HTTP {
        constructor() {
          this.Url = 'http://127.0.0.1:3000';
          this.url = this.Url;
          this.master_url = this.Url;
          this.token = null;
        }

        static getInstance() {
          if (this.instance == null) {
            this.instance = new HTTP();
            return this.instance;
          } else {
            return this.instance;
          }
        }

      });

      HTTP.instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2195dafd312a7822674e76998731436f008e4ed0.js.map