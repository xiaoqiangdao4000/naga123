System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, EventTarget, randomRangeInt, HTTP, _dec, _class, _crd, ccclass, property, game_sgj;

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
      EventTarget = _cc.EventTarget;
      randomRangeInt = _cc.randomRangeInt;
    }, function (_unresolved_2) {
      HTTP = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "716e6yjPSNAIKngeGJDt5s4", "game_sgj", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'SpriteFrame', 'Sprite', 'resources', 'Prefab', 'instantiate', 'EventTarget', 'randomRangeInt']);

      ({
        ccclass,
        property
      } = _decorator);
      globalThis.sgjEvent = new EventTarget();

      _export("game_sgj", game_sgj = (_dec = ccclass('game_sgj'), _dec(_class = class game_sgj extends Component {
        constructor() {
          super(...arguments);
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
          this.times = [5, 10, 15, 20, 30, 40, 100];
          this.serverStepName = ['橙子', '铃铛', '小bar', 'bar', '苹果', '小苹果', '木瓜', '西瓜', '小西瓜', 'lucky', '苹果', '小橙子', '橙子', '铃铛', '小77', '77', '苹果', '小木瓜', '木瓜', '双星', '小双星', 'lucky', '苹果', '小铃铛'];
          this.serverStepArea = [1, 3, 17, 7, 0, 10, 2, 4, 14, 8, 0, 11, 1, 3, 16, 6, 0, 12, 2, 5, 15, 8, 0, 13];
          this.gameState = 0;
        }

        //0-初始-下注，1-结束，2-收分，3
        start() {
          globalThis.curgame = this;
          this.gameState = 0;
          globalThis.sgj_normal.play();
        } //模拟服务器数据


        getServerData() {
          //获取随机--中奖格子
          var t_step = randomRangeInt(1, 25); //倍数

          var bs = randomRangeInt(0, 8); //获取玩家下注总和

          var mybetscore = 0;

          for (var i = 0; i < 8; i++) {
            mybetscore += globalThis.sgj_view.bet_score[i];
          } //获取中奖区域


          var t_area = this.serverStepArea[t_step];
          if (t_area > 9) t_area = t_area - 10; //判断玩家是否中奖

          var winscore = 0;

          if (t_area == 8) //中lucky、随机1到99倍、送灯
            {
              winscore = mybetscore * randomRangeInt(1, 99);
            } else if (globalThis.sgj_view.bet_score[t_area] > 0) //普通中奖 下注*倍数
            {
              winscore = globalThis.sgj_view.bet_score[t_area] * this.cmd_s_gameEnd.tiems;
            } else //不中奖
            {
              winscore = 0;
            } //赋值数据


          this.cmd_s_gameEnd.step = t_step; //中奖格子

          this.cmd_s_gameEnd.area = t_area; //中奖区域

          this.cmd_s_gameEnd.tiems = this.times[bs]; //中奖倍数

          this.cmd_s_gameEnd.wins_core = winscore; //中奖得分

          return this.cmd_s_gameEnd;
        }

        update(deltaTime) {}

        onEnable() {
          globalThis.sgjEvent.on('sgj_runcallback', this.runCallBack, this);
        }

        onDisable() {
          globalThis.sgjEvent.off('sgj_runcallback', this.runCallBack, this);
        }

        runCallBack(arg1) {
          console.log('水果机回调函数:', arg1);
          console.log('结束数据：', this.cmd_s_gameEnd); //特殊中奖

          if (this.cmd_s_gameEnd.eventid > 0) {
            return;
          } //普通中奖、闪灯


          if (this.cmd_s_gameEnd.wins_core > 0) {
            globalThis.sgj_view.setWinScore(this.cmd_s_gameEnd.wins_core);
            return;
          } //没有中奖

        } //接受消息


        onMessage(type, data) {
          console.log('收到服务器消息：', data);
        } //发送消息


        sendMssage(type, data) {
          var msg = {
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
//# sourceMappingURL=fe2f7a50508a8d17c2b364a35cc8ef02e993a8d3.js.map