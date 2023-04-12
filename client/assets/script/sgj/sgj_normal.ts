import { _decorator, Component, Node, random, randomRangeInt } from 'cc';
const { ccclass, property } = _decorator;

//待机、随机运动
@ccclass('sgj_normal')
export class sgj_normal extends Component {

    curIndex = 0;

    start() {
        globalThis.sgj_normal = this;
    }

    play() {
        this.schedule(this.updateMask, 0.6);
    }

    stop() {
        this.resetMask();
        this.unschedule(this.updateMask);
    }

    resetMask() {
        for (let i = 0; i < 24; i++) {
            globalThis.sgj_view.mask_node[i].active = false;
            globalThis.sgj_view.light_node[i].active = false;
        }
    }

    updateMask() {
        if (this.curIndex < 6) this.curIndex++;
        else this.curIndex = 1;
        for (let i = 0; i < 24; i++) {
            if (i % 7 == this.curIndex) {
                globalThis.sgj_view.mask_node[i].active = true;
                globalThis.sgj_view.light_node[i].active = true;
                globalThis.sgj_view.mask_node[i - 1].active = true;
                globalThis.sgj_view.light_node[i - 1].active = true;
            }
            else {
                globalThis.sgj_view.mask_node[i].active = false;
                globalThis.sgj_view.light_node[i].active = false;
            }
        }
    }

    update(deltaTime: number) {

    }
}
