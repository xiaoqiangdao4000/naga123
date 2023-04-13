import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

//所有动画播放完毕后，所有中奖格子闪动
@ccclass('sgj_endFlash')
export class sgj_endFlash extends Component {
    steps: [];

    start() {
        globalThis.sgj_endFlash = this;
    }

    play(step: []) {
        this.steps = step;
        this.schedule(this.updateRun, 0.5);
    }

    stop() {
        this.unschedule(this.updateRun);
    }

    updateRun() {

        for (let i = 0; i < this.steps.length; i++) {
            let index = this.steps[i];
            let mask = globalThis.sgj_view.mask_node[index];
            let light = globalThis.sgj_view.light_node[index];
            mask.active = !mask.active;
            light.active = !light.active;
        }

    }

    resetMask() {
        for (let i = 0; i < 24; i++) {
            globalThis.sgj_view.mask_node[i].active = false;
            globalThis.sgj_view.light_node[i].active = false;
        }
    }

    update(deltaTime: number) {

    }
}

