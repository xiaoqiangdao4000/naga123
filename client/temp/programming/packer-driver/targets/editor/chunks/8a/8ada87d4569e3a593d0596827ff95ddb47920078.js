System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Prefab, EventTarget, Label, instantiate, resources, HTTP, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, hall;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

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
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      EventTarget = _cc.EventTarget;
      Label = _cc.Label;
      instantiate = _cc.instantiate;
      resources = _cc.resources;
    }, function (_unresolved_2) {
      HTTP = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0c5cfcwBa1ND6V2s0kN6fDr", "hall", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'EventTarget', 'Label', 'director', 'instantiate', 'resources']);

      ({
        ccclass,
        property
      } = _decorator);
      globalThis.eventTargets = new EventTarget();

      _export("hall", hall = (_dec = ccclass('hall'), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Label), _dec(_class = (_class2 = class hall extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "bindaccount_node", _descriptor, this);

          _initializerDefineProperty(this, "nickname_lb", _descriptor2, this);

          _initializerDefineProperty(this, "userid_lb", _descriptor3, this);

          _initializerDefineProperty(this, "score_lb", _descriptor4, this);

          _initializerDefineProperty(this, "tips_node", _descriptor5, this);

          _initializerDefineProperty(this, "notice_lb", _descriptor6, this);
        }

        start() {
          this.init();
        }

        init() {
          this.nickname_lb.string = globalThis.userMgr.nickname;
          this.userid_lb.string = globalThis.userMgr.userid;
          this.score_lb.string = globalThis.userMgr.score; //获取公告
          // this.notice_lb.string = globalThis.userMgr.noticemsg
        }

        onEnable() {
          globalThis.eventTargets.on('hall_popTips', this.addTops, this);
          globalThis.eventTargets.on('hall_bindAccountSuc', this.hall_bindAccountSuc, this);
        }

        onDisable() {
          globalThis.eventTargets.off('hall_popTips', this.addTops, this);
          globalThis.eventTargets.off('hall_bindAccountSuc', this.hall_bindAccountSuc, this);
        } //arg1:弹窗内容


        addTops(arg1) {
          resources.load("prefab/tips", Prefab, (err, prefab) => {
            let t_fb = instantiate(prefab);
            this.tips_node.addChild(t_fb);
            let t_script = t_fb.getComponent("tips");
            t_script.onShow(arg1);
          });
        }

        hall_bindAccountSuc(arg1, arg2) {
          this.nickname_lb.string = arg1;
          this.bindaccount_node.active = false;
          resources.load("prefab/tips", Prefab, (err, prefab) => {
            let t_fb = instantiate(prefab);
            this.tips_node.addChild(t_fb);
            let t_script = t_fb.getComponent("tips");
            t_script.onShow(arg2);
          });
        }

        onBtnClick(event, customEventData) {
          switch (customEventData) {
            case 'bindaccount':
              {
                this.bindaccount_node.active = true;
                break;
              }

            case 'rank':
              {
                this.refreshNotice();
                break; // director.loadScene('loginScene');
              }

            case 'seting':
              {
                globalThis.hall_message.printWebSocket();
                break;
              }

            default:
              break;
          }
        } //获取公告信息


        refreshNotice() {
          var self = this;

          var onGet = function (ret) {
            if (ret != 0) {
              for (let i = 0; i < ret.length; i++) {
                console.log('收到服务器发来的公告消息=', ret[i].msg);
                globalThis.userMgr.noticemsg.push(ret[i].msg);
              }
            }
          };

          var data = {
            userid: globalThis.userMgr.userid,
            //sign: cc.vv.userMgr.sign,
            type: "notice"
          };
          (_crd && HTTP === void 0 ? (_reportPossibleCrUseOfHTTP({
            error: Error()
          }), HTTP) : HTTP).getInstance().sendRequest("/get_message", data, onGet.bind(this));
        }

        update(deltaTime) {
          var x = this.notice_lb.node.x;
          x -= 0.05;

          if (x < -1100) {
            x = 300;
          }

          console.log('sdfdsfdfd = ', x);
          this.notice_lb.node.x = x;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bindaccount_node", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nickname_lb", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "userid_lb", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "score_lb", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "tips_node", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "notice_lb", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8ada87d4569e3a593d0596827ff95ddb47920078.js.map