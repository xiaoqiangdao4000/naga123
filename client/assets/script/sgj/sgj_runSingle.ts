import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('sgj_runSingle')
export class sgj_runSingle extends Component {

    step = []; //中奖格子
    area = []; //中奖区域

    start() {
        globalThis.sgj_runSingle = this;
    }

    play() {
        //this.step.push();
        this.schedule(this.updateRun, 0.6);
    }

    stop() {
        this.unschedule(this.updateRun);
    }

    updateRun() {

    }

    update(deltaTime: number) {

    }
}

