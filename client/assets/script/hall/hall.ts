import { _decorator, Component, Node, Prefab, Label, director } from 'cc';
import { userMgr } from '../utils/userMgr';
const { ccclass, property } = _decorator;

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


