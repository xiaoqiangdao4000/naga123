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
            eventid: 0,
            //中奖类型：0-不中奖，1-普通中奖，lucky：2-灭灯，3-翻倍，4-大三元，5-小三元，6-大四喜，7-众横四海，8-仙女散花，9-天龙八部，10-九莲宝灯，11-大满贯
            step: [],
            //开奖格子,数组[24]
            area: [],
            //开奖区域,数组[24]
            tiems: [],
            //倍数,数组[24]
            wins_core: [],
            //当前赢分,数组[24]
            user_score: 0,
            //分数
            record: [0, 0, 0, 0, 0, 0, 0, 0] //历史记录

          };
          this.times = [5, 10, 15, 20, 30, 40, 100];
          this.serverStepName = ['橙子', '铃铛', '小bar', 'bar', '苹果', '小苹果', '木瓜', '西瓜', '小西瓜', 'lucky', '苹果', '小橙子', '橙子', '铃铛', '小77', '77', '苹果', '小木瓜', '木瓜', '双星', '小双星', 'lucky', '苹果', '小铃铛'];
          this.serverStepArea = [1, 3, 17, 7, 0, 10, 2, 4, 14, 8, 0, 11, 1, 3, 16, 6, 0, 12, 2, 5, 15, 8, 0, 13];
          this.gameState = 0;
          this.wins_core = 0;
          this.bet_score = [0, 0, 0, 0, 0, 0, 0, 0];
        }

        //下注分数
        //游戏数据----------end-------
        start() {
          globalThis.game_sgj = this;
          this.gameState = 0;

          for (let i = 0; i < 8; i++) {
            this.bet_score[i] = 0;
          }

          globalThis.sgj_normal.play();
        } //模拟服务器数据


        getServerData() {
          //获取随机--中奖格子
          var t_step = randomRangeInt(0, 24); //倍数

          var bs = randomRangeInt(0, 8); //获取玩家下注总和

          var mybetscore = 0;

          for (let i = 0; i < 8; i++) {
            mybetscore += globalThis.sgj_view.bet_score[i];
          } //获取中奖区域


          var t_area = this.serverStepArea[t_step];
          if (t_area > 9) t_area = t_area - 10; //判断玩家是否中奖

          var winscore = 0; //lucky：2-灭灯，3-翻倍，4-大三元，5-小三元，6-大四喜，7-众横四海，8-仙女散花，9-天龙八部，10-九莲宝灯，11-大满贯

          if (t_area == 8) //中lucky、随机1到99倍、送灯
            {
              winscore = mybetscore * randomRangeInt(1, 99);
            } else if (globalThis.sgj_view.bet_score[t_area] > 0) //普通中奖 下注*倍数
            {
              winscore = globalThis.sgj_view.bet_score[t_area] * this.times[bs];
              this.cmd_s_gameEnd.eventid = 1;
              this.cmd_s_gameEnd.step.push(t_step); //中奖格子

              this.cmd_s_gameEnd.area.push(t_area); //中奖区域

              this.cmd_s_gameEnd.tiems.push(this.times[bs]); //中奖倍数

              this.cmd_s_gameEnd.wins_core.push(winscore); //中奖得分
            } else //不中奖
            {
              winscore = 0;
              this.cmd_s_gameEnd.eventid = 0;
            }

          return this.cmd_s_gameEnd;
        } //获取游戏结束数据，开始播放动画。


        onGameEnd() {
          //播放第一次动画
          this.getServerData();
          console.log('开始游戏:', this.cmd_s_gameEnd.step[0]);
          globalThis.sgj_run.play(this.cmd_s_gameEnd.step[0]);
        } //正常动画回调


        runCallBack(arg1) {
          console.log('水果机回调函数:', arg1);
          console.log('结束数据：', this.cmd_s_gameEnd); //清理下注界面

          globalThis.sgj_view.ClearBetToZero(1, 0); //显示中奖区域

          globalThis.sgj_view.showEndArea(this.cmd_s_gameEnd.area); //普通中奖、闪灯

          if (this.cmd_s_gameEnd.eventid == 1) {
            globalThis.sgj_view.setWinScore(this.cmd_s_gameEnd.wins_core[0]);
            this.gameState = 1;
            globalThis.sgj_endFlash.play(this.cmd_s_gameEnd.step); //按钮状态

            globalThis.sgj_view.all_btn.interactable = true;
            globalThis.sgj_view.left_btn.interactable = true;
            globalThis.sgj_view.right_btn.interactable = true;
            globalThis.sgj_view.small_btn.interactable = true;
            globalThis.sgj_view.big_btn.interactable = true;
            globalThis.sgj_view.go_btn.interactable = true;
            globalThis.sgj_view.bet1_btn.interactable = true;
            globalThis.sgj_view.bet2_btn.interactable = true;
            globalThis.sgj_view.bet3_btn.interactable = true;
            globalThis.sgj_view.bet4_btn.interactable = true;
            globalThis.sgj_view.bet5_btn.interactable = true;
            globalThis.sgj_view.bet6_btn.interactable = true;
            globalThis.sgj_view.bet7_btn.interactable = true;
            globalThis.sgj_view.bet8_btn.interactable = true;
            return;
          } //没有中奖


          this.gameState = 0;
        } //设置赢分: 数据，是否刷新界面


        setWinScore(score, refresh = true) {
          this.wins_core = score;
          if (!refresh) return; //刷新界面

          globalThis.sgj_view.setWinScoreView(score);
        } //设置用户分数:数据，是否刷新界面


        setUserScore(score, refresh = true) {
          globalThis.userMgr.score = score;
          if (!refresh) return; //刷新界面

          globalThis.sgj_view.setUserScoreView(score);
        } //设置下注分数:数据，是否刷新界面


        setBetScore(area, score, refresh = true) {
          if (area < 0 || area > 7) return;
          this.bet_score[area] = score;
          if (!refresh) return; //刷新界面

          globalThis.sgj_view.setBetScoreView(area, score);
        } //获取下注区域分数


        getBetScore(area) {
          if (area < 0 || area > 7) return;
          return this.bet_score[area];
        } // //下注+1
        // addBetOneScore(area: number, showtips: boolean = true) {
        //     if (area < 0 || area > 7) return;
        //     if (globalThis.userMgr.score > 0 && this.bet_score[area] < 100) {
        //         this.bet_score[area] += 1;
        //         globalThis.userMgr.score -= 1;
        //         //刷新下注、用户分数
        //         this.setBetScore(area, this.bet_score[area]);
        //         this.setUserScore(globalThis.userMgr.score);
        //         //开启go按钮
        //         globalThis.sgj_view.go_btn.interactable = true;
        //     }
        //     else {
        //         if (showtips) {
        //             globalThis.sgj_view.addTops('余额不足,请充值。。。');
        //         }
        //     }
        // }
        // //下注全部加1
        // addAllBetOneScore() {
        //     if (globalThis.userMgr.score <= 0) {
        //         globalThis.sgj_view.addTops('余额不足,请充值。。。');
        //         return;
        //     }
        //     if (this.bet_score[0] >= 99 &&
        //         this.bet_score[1] >= 99 &&
        //         this.bet_score[2] >= 99 &&
        //         this.bet_score[3] >= 99 &&
        //         this.bet_score[4] >= 99 &&
        //         this.bet_score[5] >= 99 &&
        //         this.bet_score[6] >= 99 &&
        //         this.bet_score[7] >= 99) {
        //         globalThis.sgj_view.addTops('已经是最大下注了，请点击开始游戏！');
        //         return;
        //     }
        //     this.addBetOneScore(0, false);
        //     this.addBetOneScore(1, false);
        //     this.addBetOneScore(2, false);
        //     this.addBetOneScore(3, false);
        //     this.addBetOneScore(4, false);
        //     this.addBetOneScore(5, false);
        //     this.addBetOneScore(6, false);
        //     this.addBetOneScore(7, false);
        // }
        //清理下注为0 view界面、value值 0不清理，1清理


        clearBetToZero(view, value) {
          if (view == 1) {
            for (let i = 0; i < 8; i++) {
              this.setBetScore(i, 0);
            }
          }

          if (value == 1) {
            for (let i = 0; i < 8; i++) {
              this.bet_score[i] = 0;
            }
          }
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

        update(deltaTime) {}

        onEnable() {
          globalThis.sgjEvent.on('sgj_runcallback', this.runCallBack, this);
        }

        onDisable() {
          globalThis.sgjEvent.off('sgj_runcallback', this.runCallBack, this);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0f035370f059e5e9b698483a2b6e0704c63657ef.js.map