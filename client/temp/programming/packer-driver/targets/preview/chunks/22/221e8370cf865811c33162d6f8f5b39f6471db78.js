System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, game_sgj;

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

      _cclegacy._RF.push({}, "716e6yjPSNAIKngeGJDt5s4", "game_sgj", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'SpriteFrame', 'Sprite', 'resources', 'Prefab', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("game_sgj", game_sgj = (_dec = ccclass('game_sgj'), _dec(_class = class game_sgj extends Component {
        start() {
          console.log('globalThis.curgame = ', globalThis.curgame);

          if (globalThis.curgame) {
            console.log('aaaaaaa');
          }

          globalThis.curgame = this;
          console.log('globalThis.curgame = ', globalThis.curgame);

          if (globalThis.curgame) {
            console.log('bbbbbbb');
          }
        }

        update(deltaTime) {}

        onMessage(type, data) {
          console.log('收到服务器消息：', data);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=221e8370cf865811c33162d6f8f5b39f6471db78.js.map