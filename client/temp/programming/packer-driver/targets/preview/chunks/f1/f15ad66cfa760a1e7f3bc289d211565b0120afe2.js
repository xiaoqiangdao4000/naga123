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
          this.sererMap = [{
            step: '0',
            area: 1,
            times: 0,
            name: '橙子'
          }, {
            step: '1',
            area: 3,
            times: 0,
            name: '铃铛'
          }, {
            step: '2',
            area: 17,
            times: 0,
            name: '小bar'
          }, {
            step: '3',
            area: 7,
            times: 0,
            name: 'bar'
          }, {
            step: '4',
            area: 0,
            times: 0,
            name: '苹果'
          }, {
            step: '5',
            area: 10,
            times: 0,
            name: '小苹果'
          }, {
            step: '6',
            area: 2,
            times: 0,
            name: '木瓜'
          }, {
            step: '7',
            area: 4,
            times: 0,
            name: '西瓜'
          }, {
            step: '8',
            area: 14,
            times: 0,
            name: '小西瓜'
          }, {
            step: '9',
            area: 8,
            times: 0,
            name: 'lucky'
          }, {
            step: '10',
            area: 0,
            times: 0,
            name: '苹果'
          }, {
            step: '11',
            area: 11,
            times: 0,
            name: '小橙子'
          }, {
            step: '12',
            area: 1,
            times: 0,
            name: '橙子'
          }, {
            step: '13',
            area: 3,
            times: 0,
            name: '铃铛'
          }, {
            step: '14',
            area: 16,
            times: 0,
            name: '小77'
          }, {
            step: '15',
            area: 6,
            times: 0,
            name: '77'
          }, {
            step: '16',
            area: 0,
            times: 0,
            name: '苹果'
          }, {
            step: '17',
            area: 12,
            times: 0,
            name: '小木瓜'
          }, {
            step: '18',
            area: 2,
            times: 0,
            name: '木瓜'
          }, {
            step: '19',
            area: 5,
            times: 0,
            name: '双星'
          }, {
            step: '20',
            area: 15,
            times: 0,
            name: '小双星'
          }, {
            step: '21',
            area: 8,
            times: 0,
            name: 'lucky'
          }, {
            step: '22',
            area: 0,
            times: 0,
            name: '苹果'
          }, {
            step: '23',
            area: 13,
            times: 0,
            name: '小铃铛'
          }];
        }

        static getInstance() {
          if (this.instance == null) {
            this.instance = new sgj_data();
            return this.instance;
          } else {
            return this.instance;
          }
        } //获取随机中奖格子


        getRandomStep() {
          var rd = randomRangeInt(0, 24);
          var data = this.sererMap[rd];
          rd = randomRangeInt(0, 7);
          data.times = this.times[rd];
          return data;
        } //获取中奖数据


        getEndData(betscore) {
          console.log('betscore = ', betscore);
        }

      });

      sgj_data.instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f15ad66cfa760a1e7f3bc289d211565b0120afe2.js.map