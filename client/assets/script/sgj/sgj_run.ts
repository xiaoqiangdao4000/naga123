import { _decorator, Component, Node, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('sgj_run')
export class sgj_run extends Component {



    start() {
        globalThis.sgj_run = this;
    }

    update(deltaTime: number) {

    }

    play() {

    }
}



