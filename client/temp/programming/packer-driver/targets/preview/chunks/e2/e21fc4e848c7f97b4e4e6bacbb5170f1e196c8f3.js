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

      _export("game_sgj", game_sgj = (_dec = ccclass('game_sgj'), _dec(_class = class game_sgj extends Component {
        constructor() {
          super(...arguments);
          this.betScore = [0, 0, 0, 0, 0, 0, 0, 0];
          this.betData_C = {
            type: 'CMD_C_SGJ_PlaceJetton',
            data: this.betScore
          };
          this.bigSmall_C = {
            type: 'CMD_C_SGJ_BigSmall',
            data: 0 //赌注

          };
          this.bigSmall_S = {
            type: 'CMD_S_SGJ_BigSmall',
            iswin: 0,
            //猜大小成功 0失败，1成功。
            bigsmall: 0,
            //大小的实际数值
            winscore: 0,
            //玩家成绩
            userscore: 0 //玩家积分

          };
          this.gameEnd_S = {
            type: 'CMD_S_SGJ_GameEnd',
            step: 0,
            area: 0,
            tiems: 0,
            winscore: 0,
            userscore: 0,
            record: [0, 0, 0, 0, 0, 0, 0, 0],
            eventid: 0
          };
        }

        // typedef struct 
        // {
        //     WORD			wEventId;							//时间id
        //     BYTE			cbCount;							//开奖区域数量
        //     BYTE			cbStep[24];			//开奖格子
        //     BYTE			cbArea[24];			//开奖区域
        //     WORD			wTimes[24];			//倍数
        //     LONGLONG        lScore[24];			//倍数
        // }SGJ_tagEventData;
        start() {
          console.log('betScore', this.betData_C);
          globalThis.curgame = this;
        }

        update(deltaTime) {} //接受消息


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
//# sourceMappingURL=e21fc4e848c7f97b4e4e6bacbb5170f1e196c8f3.js.map