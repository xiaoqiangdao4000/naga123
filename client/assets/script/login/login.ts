import { _decorator, Component, Node, EventTarget, Button, director, instantiate, Prefab, resources } from 'cc';
import { userMgr } from '../utils/userMgr';
import HTTP from '../utils/HTTP';

globalThis.userMgr = userMgr.getInstance();

const { ccclass, property } = _decorator;

globalThis.eventTargets = new EventTarget();

@ccclass('login')
export class login extends Component {

    @property(Node)
    login_account_node: Node;

    @property(Node)
    tips_node: Node;

    @property(Node)
    loading_node: Node;

    onLoad() {

    }

    start() {

    }
    update(deltaTime: number) {
    }

    onEnable() {
        globalThis.eventTargets.on('login_popTips', this.addTops, this);
        globalThis.eventTargets.on('login_poploading', this.addLoadingTips, this);
    }

    onDisable() {
        globalThis.eventTargets.off('login_popTips', this.addTops, this);
        globalThis.eventTargets.off('login_poploading', this.addLoadingTips, this);
    }

    //arg1:弹窗内容
    addTops(arg1: string) {
        resources.load("prefab/tips", Prefab, (err, prefab) => {
            let t_fb = instantiate(prefab);
            this.tips_node.addChild(t_fb);
            let t_script = t_fb.getComponent("tips");
            t_script.onShow(arg1);
        });
    }

    //连接提示
    addLoadingTips(type: string, tipsText: string, deltaTime: number = 0) {
        console.log(type, tipsText, deltaTime)
        let t_script = this.loading_node.getComponent("loading");
        t_script.setTips(type, tipsText, deltaTime);
    }

    //按钮事件
    onBtnClick(event: any, customEventData: any) {
        switch (customEventData) {
            case 'guestLogin':  //游客登陆
                {
                    let userinfo = globalThis.userMgr.getAccount();
                    HTTP.getInstance().sendRequest("/guest", { nickname: userinfo.nickname }, globalThis.userMgr.onGuest)
                    console.log('发送游客登录请求/guest = ', userinfo); 
                    globalThis.eventTargets.emit('login_poploading', 'show', '游客登陆中，请稍等!');
                    break;
                }
            case 'accountLogin'://账号登陆
                {
                    this.login_account_node.active = true;
                }
            default:
                break;
        }
    }





}

