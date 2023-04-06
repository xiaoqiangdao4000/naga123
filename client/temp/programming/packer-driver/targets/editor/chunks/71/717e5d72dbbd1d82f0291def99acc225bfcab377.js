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

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Sprite', 'math']);

      ({
        ccclass,
        property
      } = _decorator);

      if (globalThis.sgjEvent == null) {
        globalThis.sgjEvent = new EventTarget();
      }

      _export("sgj_run", sgj_run = (_dec = ccclass('sgj_run'), _dec(_class = class sgj_run extends Component {
        constructor(...args) {
          super(...args);
          this.startIndex = 0;
          this.endIndex = 0;
          this.runCount = 72;
          this.sound2_time = 0;
          this.sound3_time = false;
        }

        //第三段音乐播放控制，不循环
        start() {
          globalThis.sgj_run = this;
        }

        update(deltaTime) {} //播放中奖动画 1到24


        play(endIndex) {
          if (endIndex == 0) return;
          this.stop();
          this.startIndex = 0;
          this.sound2_time = 0;
          this.sound3_time = false;
          this.endIndex = endIndex + this.runCount; //中奖格子加上圈数

          this.resetMask();
          (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
            error: Error()
          }), AudioMgr) : AudioMgr).inst.playOneShot('sound/sgj/turnstep1');
          this.schedule(this.updateMask, 0.05);
          console.log('播放中奖动画,中奖数 = ', endIndex);
        }

        stop() {
          this.unschedule(this.updateMask);
        }

        resetMask() {
          for (let i = 0; i < 24; i++) {
            globalThis.sgj_view.mask_node[i].active = false;
            globalThis.sgj_view.light_node[i].active = false;
          }
        }

        updateMask() {
          //中奖结束回调
          let curIndex = Math.floor(this.startIndex) % 24; //console.log('当前格子 = ', curIndex);

          if (Math.floor(this.startIndex) == this.endIndex) {
            console.log('中奖格子 = ', this.endIndex);
            console.log('startindex格子 = ', Math.floor(this.startIndex));
            (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
              error: Error()
            }), AudioMgr) : AudioMgr).inst.playOneShot('sound/sgj/turnstep4');
            this.unschedule(this.updateMask);
            globalThis.sgjEvent.emit('sgj_callback', '中奖结束!');
            return;
          }

          for (let i = 0; i < 24; i++) {
            //当前高亮的格子
            if (curIndex == i) {
              globalThis.sgj_view.mask_node[i].active = true;
              globalThis.sgj_view.light_node[i].active = true;
            } else {
              globalThis.sgj_view.mask_node[i].active = false;
              globalThis.sgj_view.light_node[i].active = false;
            }
          } //速度控制


          if (this.startIndex < 14) {
            this.startIndex = this.startIndex + 0.5;
          } else if (this.startIndex < this.endIndex - 7) {
            this.startIndex = this.startIndex + 1;
          } else if (this.startIndex < this.endIndex) {
            this.startIndex = this.startIndex + 0.5;
          } else {
            this.startIndex = this.startIndex + 0.5;
          } //音频控制2


          if (this.startIndex > 14 && this.startIndex < this.endIndex - 16 && this.sound2_time > 1) {
            this.sound2_time = 0;
            (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
              error: Error()
            }), AudioMgr) : AudioMgr).inst.playOneShot('sound/sgj/turnstep2');
          } else {
            this.sound2_time = this.sound2_time + 0.5;
          } //音频控制3


          if (this.startIndex > this.endIndex - 16 && this.sound3_time == false) {
            this.sound3_time = true;
            (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
              error: Error()
            }), AudioMgr) : AudioMgr).inst.playOneShot('sound/sgj/turnstep3');
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=717e5d72dbbd1d82f0291def99acc225bfcab377.js.map