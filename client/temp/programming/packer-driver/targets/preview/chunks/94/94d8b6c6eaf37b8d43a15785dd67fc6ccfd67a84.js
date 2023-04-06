System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, AudioMgr, _dec, _class, _crd, ccclass, property, sgj_run;

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

      _cclegacy._RF.push({}, "fdc5cjpCI5GuL0/9Ty2KATJ", "sgj_run", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      if (globalThis.sgjEvent == null) {
        globalThis.sgjEvent = new EventTarget();
      }

      _export("sgj_run", sgj_run = (_dec = ccclass('sgj_run'), _dec(_class = class sgj_run extends Component {
        constructor() {
          super(...arguments);
          this.startIndex = 0;
          this.endIndex = 0;
          this.runCount = 72;
        }

        start() {
          globalThis.sgj_run = this;
        }

        update(deltaTime) {}

        play(endIndex) {
          this.startIndex = 0;
          this.endIndex = endIndex + this.runCount; //中奖格子加上圈数

          this.resetMask();
          (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
            error: Error()
          }), AudioMgr) : AudioMgr).inst.playOneShot('sound/sgj/turnstep1');
          this.schedule(this.updateMask, 0.6);
          console.log('播放中奖动画');
        }

        stop() {
          this.unschedule(this.updateMask);
        }

        resetMask() {
          for (var i = 0; i < 24; i++) {
            globalThis.sgj_view.mask_node[i].active = false;
            globalThis.sgj_view.light_node[i].active = false;
          }
        }

        updateMask() {
          //中奖结束回调
          if (this.startIndex == this.endIndex) {
            this.unschedule(this.updateMask);
            globalThis.sgjEvent.emit('sgj_callback', '中奖结束!');
            return;
          }

          for (var i = 0; i < 24; i++) {
            //当前高亮的格子
            if (this.startIndex == i) {
              globalThis.sgj_view.mask_node[i].active = true;
              globalThis.sgj_view.light_node[i].active = true;
            } else {
              globalThis.sgj_view.mask_node[i].active = false;
              globalThis.sgj_view.light_node[i].active = false;
            }
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=94d8b6c6eaf37b8d43a15785dd67fc6ccfd67a84.js.map