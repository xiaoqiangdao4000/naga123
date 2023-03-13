import { _decorator, Component, Node, Prefab, EventTarget, Label, director } from 'cc';
import { userMgr } from '../utils/userMgr';
const { ccclass, property } = _decorator;

const eventTarget = new EventTarget();
// if (globalThis.eventTarget == null) {
//     const eventTarget = new EventTarget();
//     globalThis.eventTarget = eventTarget;
//     console.log(' globalThis.eventTarget --- = ', globalThis.eventTarget)
// }


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
        eventTarget.on('nickname', this._sayHello, this);
    }

    onDisable() {
        eventTarget.off('nickname', this._sayHello, this);
    }

    _sayHello() {
        console.log('Hello World');
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


