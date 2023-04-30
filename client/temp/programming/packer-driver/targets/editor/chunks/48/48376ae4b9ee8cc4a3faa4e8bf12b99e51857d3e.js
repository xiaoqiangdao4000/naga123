System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, randomRangeInt, sgj_data, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      randomRangeInt = _cc.randomRangeInt;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "59ba6JphxVJUbWWXiiv51ji", "sgj_data", undefined);

      __checkObsolete__(['randomRangeInt', 'sys']);

      _export("default", sgj_data = class sgj_data {
        constructor() {
          this.times = [5, 10, 15, 20, 30, 40, 100];
          this.serverStepName = ['橙子', '铃铛', '小bar', 'bar', '苹果', '小苹果', '木瓜', '西瓜', '小西瓜', 'lucky', '苹果', '小橙子', '橙子', '铃铛', '小77', '77', '苹果', '小木瓜', '木瓜', '双星', '小双星', 'lucky', '苹果', '小铃铛'];
          this.serverStepArea = [1, 3, 17, 7, 0, 10, 2, 4, 14, 8, 0, 11, 1, 3, 16, 6, 0, 12, 2, 5, 15, 8, 0, 13];
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
            win_score: [],
            //当前赢分,数组[24]
            user_score: 0,
            //分数
            record: [0, 0, 0, 0, 0, 0, 0, 0] //历史记录

          };
        }

        static getInstance() {
          if (this.instance == null) {
            this.instance = new sgj_data();
            return this.instance;
          } else {
            return this.instance;
          }
        }

        getAllBetScore(betscore) {
          let score = 0;

          for (let i = 0; i < 8; i++) {
            score += betscore;
          }

          return score;
        }

        getStepData(randomStep, betscore) {
          let t_step = randomStep;
          let t_area = this.serverStepArea[t_step];
          if (t_area > 9) t_area -= 10;
          let t_times = this.times[randomRangeInt(0, 7)];
          let winscore = 0;
          if (t_area == 8) winscore = randomRangeInt(1, 100) * t_times;else winscore = betscore[t_area] * t_times;
          return [t_step, t_area, t_times, winscore];
        } //获取中奖数据


        getEndData(betscore) {
          let endData = this.cmd_s_gameEnd;
          endData.step = [];
          endData.area = [];
          endData.tiems = [];
          endData.win_score = []; //获取第一次中奖格子

          let t_step = randomRangeInt(0, 24);
          let data = this.getStepData(t_step, betscore);
          endData.step.push(data[0]);
          endData.area.push(data[1]);
          endData.tiems.push(data[2]);
          endData.win_score.push(data[3]);
          endData.eventid = 0;
          let t_area = data[1];
          let t_winscore = data[3]; //判断是否中奖--中奖类型：0-不中奖，1-普通中奖，lucky：2-灭灯，3-翻倍，4-大三元，5-小三元，6-大四喜，7-众横四海，8-仙女散花，9-天龙八部，10-九莲宝灯，11-大满贯

          if (t_area == 8 || t_area < 8 && betscore[t_area] > 0) //lucky
            {
              endData.eventid = 2; //randomRangeInt(1,12);

              if (endData.eventid == 1) //1-普通中奖
                {} else if (this.cmd_s_gameEnd.eventid == 2) //2送灯--灭灯
                {
                  endData.step.push(data[0]);
                  endData.area.push(data[1]);
                  endData.tiems.push(data[2]);
                  endData.win_score.push(0);
                } else if (this.cmd_s_gameEnd.eventid == 2) //3送灯--翻倍
                {
                  endData.step.push(data[0]);
                  endData.area.push(data[1]);
                  endData.tiems.push(data[2]);
                  endData.win_score.push(t_winscore);
                }
            }

          return endData;
        }

      });

      sgj_data.instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=48376ae4b9ee8cc4a3faa4e8bf12b99e51857d3e.js.map