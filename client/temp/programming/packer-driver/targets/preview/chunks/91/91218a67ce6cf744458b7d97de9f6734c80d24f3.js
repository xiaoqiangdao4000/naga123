System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, EventTarget, director, instantiate, Prefab, resources, userMgr, HTTP, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, login;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfuserMgr(extras) {
    _reporterNs.report("userMgr", "../utils/userMgr", _context.meta, extras);
  }

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
      EventTarget = _cc.EventTarget;
      director = _cc.director;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
      resources = _cc.resources;
    }, function (_unresolved_2) {
      userMgr = _unresolved_2.userMgr;
    }, function (_unresolved_3) {
      HTTP = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5a660/bAw1K1prTlu9jufqY", "login", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'EventTarget', 'Button', 'director', 'instantiate', 'Prefab', 'resources']);

      globalThis.userMgr = (_crd && userMgr === void 0 ? (_reportPossibleCrUseOfuserMgr({
        error: Error()
      }), userMgr) : userMgr).getInstance();
      ({
        ccclass,
        property
      } = _decorator);
      globalThis.eventTargets = new EventTarget();

      _export("login", login = (_dec = ccclass('login'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = class login extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "login_account_node", _descriptor, this);

          _initializerDefineProperty(this, "tips_node", _descriptor2, this);
        }

        onLoad() {}

        start() {}

        onEnable() {
          globalThis.eventTargets.on('login_popTips', this.addTops, this);
        }

        onDisable() {
          globalThis.eventTargets.off('login_popTips', this.addTops, this);
        } //arg1:弹窗内容


        addTops(arg1) {
          resources.load("prefab/tips", Prefab, (err, prefab) => {
            var t_fb = instantiate(prefab);
            this.tips_node.addChild(t_fb);
            var t_script = t_fb.getComponent("tips");
            t_script.onShow(arg1);
          });
        }

        onBtnClick(event, customEventData) {
          switch (customEventData) {
            case 'guestLogin':
              {
                var userinfo = globalThis.userMgr.getAccount();
                (_crd && HTTP === void 0 ? (_reportPossibleCrUseOfHTTP({
                  error: Error()
                }), HTTP) : HTTP).getInstance().sendRequest("/guest", {
                  nickname: userinfo.nickname
                }, this.onGuest);
                console.log('发送游客登录请求/guest = ', userinfo);
                break;
              }

            case 'accountLogin':
              {
                this.login_account_node.active = true;
              }

            default:
              break;
          }
        }

        update(deltaTime) {} //游客登陆


        onGuest(data) {
          console.log('处理游客登陆:', data);

          if (data.userid == 0) {
            globalThis.eventTargets.emit('login_popTips', '游客登陆失败！');
            console.log('游客登陆失败:', data);
            return;
          } else {
            globalThis.userMgr.userid = data.userid;
            globalThis.userMgr.nickname = data.nickname;
            globalThis.userMgr.score = data.score;
            globalThis.userMgr.password = data.password;
            globalThis.userMgr.roomid = data.roomid;
            globalThis.userMgr.bind_account = data.bind_account;
            globalThis.userMgr.saveAccount(data.nickname, data.password);
            console.log('游客登陆成功!服务器返回:' + data.userid + ' ,' + data.nickname + ' ,' + data.score + ' ,' + data.password + ' ,' + data.roomid + ' ,' + data.bind_account);
            console.log('---开始切换场景：主动关闭登陆连接---');
            director.loadScene('hallScene');
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "login_account_node", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tips_node", [_dec3], {
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
//# sourceMappingURL=91218a67ce6cf744458b7d97de9f6734c80d24f3.js.map