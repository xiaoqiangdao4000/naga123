System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, HTTP, _dec, _class, _crd, ccclass, property, game_sgj;

  function _reportPossibleCrUseOfHTTP(extras) {
    _reporterNs.report("HTTP", "../utils/HTTP", _context.meta, extras);
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
      HTTP = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "716e6yjPSNAIKngeGJDt5s4", "game_sgj", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'SpriteFrame', 'Sprite', 'resources', 'Prefab', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);
      globalThis.eventTargets = new EventTarget();

      _export("game_sgj", game_sgj = (_dec = ccclass('game_sgj'), _dec(_class = class game_sgj extends Component {
        constructor(...args) {
          super(...args);
          this.cmd_c_bet = {
            type: 'cmd_c_bet',
            data: [0, 0, 0, 0, 0, 0, 0, 0]
          };
          this.cmd_c_bigSmall = {
            type: 'cmd_c_bigSmall',
            data: 0 //赌注

          };
          this.cmd_s_bigSmall = {
            type: 'cmd_s_bigSmall',
            iswin: 0,
            //猜大小成功 0失败，1成功。
            bigsmall: 0,
            //大小的实际数值
            wins_core: 0,
            //赢分
            user_score: 0 //分数

          };
          this.cmd_s_gameEnd = {
            type: 'cmd_s_gameEnd',
            step: 0,
            //开奖格子
            area: 0,
            //开奖区域
            tiems: 0,
            //倍数
            wins_core: 0,
            //赢分
            user_score: 0,
            //分数
            record: [0, 0, 0, 0, 0, 0, 0, 0],
            //历史记录
            eventid: 0,
            //事件id
            event_count: 0,
            event_step: [0, 1],
            //开奖格子,数组[24]
            event_area: 0,
            //开奖区域,数组[24]
            event_times: 0,
            //倍数,数组[24]
            event_score: 0 //当前赢分,数组[24]

          };
        }

        start() {
          globalThis.curgame = this; // AudioMgr.inst.play('sound/sgj/C1')
        }

        update(deltaTime) {}

        onEnable() {
          globalThis.eventTargets.on('sgj_callback', this.sgjCallBack, this);
        }

        onDisable() {
          globalThis.eventTargets.off('sgj_callback', this.sgjCallBack, this);
        }

        sgjCallBack(arg1) {
          console.log('水果机回调函数:', arg1);
        } //接受消息


        onMessage(type, data) {
          console.log('收到服务器消息：', data);
        } //发送消息


        sendMssage(type, data) {
          let msg = {
            type: type,
            data: data
          };
          (_crd && HTTP === void 0 ? (_reportPossibleCrUseOfHTTP({
            error: Error()
          }), HTTP) : HTTP).getInstance().send(JSON.stringify(msg));
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c1dcdcaf7074c283bffa5b35fa30e314db0cba14.js.map