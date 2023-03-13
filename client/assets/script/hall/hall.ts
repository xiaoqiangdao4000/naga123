import { _decorator, Component, Node, Prefab, EventTarget, Label, director } from 'cc';
import { userMgr } from '../utils/userMgr';
const { ccclass, property } = _decorator;

if (globalThis.eventTargets == null) {
    globalThis.eventTargets = new EventTarget();
}


@ccclass('hall')
export class hall extends Component {
    @property(Node)
    bindAccount_prefab: Node;

    @property(Label)
    nickname_lb: Label;

    @property(Label)
    userid_lb: Label;

    @property(Label)
    score_lb: Label;


    start() {
        this.init();
    }

    init() {
        this.nickname_lb.string = globalThis.userMgr.nickname;
        this.userid_lb.string = globalThis.userMgr.userid;
        this.score_lb.string = globalThis.userMgr.score;
    }

    onEnable() {
        globalThis.eventTargets.on('hall_chick_nickname', this.addTops, this);
        globalThis.eventTargets.on('hall_chick_password', this.addTops, this);
        
    }

    onDisable() {
        globalThis.eventTargets.off('hall_chick_nickname', this.addTops, this);
        globalThis.eventTargets.on('hall_chick_password', this.addTops, this);
    }

    addTops(arg1) {
        console.log('Hello World = ', arg1);
    }

    update(deltaTime: number) {

    }

    onBtnClick(event: any, customEventData: any) {
        switch (customEventData) {
            case 'bindaccount':
                {
                    this.bindAccount_prefab.active = true;
                    break;
                }
            case 'rank':
                {
                    director.loadScene('loginScene');
                }
            default:
                break;

        }
    }
}


