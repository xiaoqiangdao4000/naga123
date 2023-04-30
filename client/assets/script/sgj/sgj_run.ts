import { _decorator, Component, Node, Sprite, math } from 'cc';
import { AudioMgr } from '../utils/AudioMgr';
const { ccclass, property } = _decorator;
if (globalThis.sgjEvent == null) {
    globalThis.sgjEvent = new EventTarget();
}
@ccclass('sgj_run')
export class sgj_run extends Component {

    startIndex = 0; //开始格子
    endIndex = 0;   //中奖格子
    runCount = 72;  //运行圈数
    sound2_time = 0;//播放声音间隔时间,循环
    sound3_time = false;//第三段音乐播放控制，不循环

    start() {
        globalThis.sgj_run = this;
    }

    update(deltaTime: number) {

    }

    //播放中奖动画 1到24
    play(endIndex) {
        this.stop();
        this.startIndex = 0;
        this.sound2_time = 0;
        this.sound3_time = false;
        this.endIndex = endIndex + this.runCount; //中奖格子加上圈数
        this.resetMask();
        AudioMgr.inst.playOneShot('sound/sgj/turnstep1');
        this.schedule(this.updateMask, 0.05);
        console.log('播放中奖动画,中奖格子 = ', endIndex);
    }

    stop() {
        this.unschedule(this.updateMask);
    }

    resetMask() {
        for (let i = 0; i < 24; i++) {
            globalThis.sgj_view.mask_node[i].active = false;
            globalThis.sgj_view.light_node[i].active = false;
        }
    }

    updateMask() {
        //中奖结束回调
        let curIndex = Math.floor(this.startIndex) % 24 + 1;
        //console.log('当前格子 = ', curIndex);
        if (Math.floor(this.startIndex) == this.endIndex) {
            console.log('中奖格子 = ', this.endIndex);
            AudioMgr.inst.playOneShot('sound/sgj/turnstep4');
            this.unschedule(this.updateMask);
            globalThis.sgjEvent.emit('sgj_runcallback', '中奖结束!');
            return;
        }

        for (let i = 0; i < 24; i++) {
            //当前高亮的格子
            if (curIndex == i) {
                globalThis.sgj_view.mask_node[i].active = true;
                globalThis.sgj_view.light_node[i].active = true;
            }
            else {
                globalThis.sgj_view.mask_node[i].active = false;
                globalThis.sgj_view.light_node[i].active = false;
            }
        }

        //速度控制
        if (this.startIndex < 14) {
            this.startIndex = this.startIndex + 0.5;
        }
        else if (this.startIndex < this.endIndex - 7) {
            this.startIndex = this.startIndex + 1;
        }
        else if (this.startIndex < this.endIndex) {
            this.startIndex = this.startIndex + 0.5;
        }
        else {
            this.startIndex = this.startIndex + 0.5;
        }

        //音频控制2
        if (this.startIndex > 14 && this.startIndex < this.endIndex - 16 && this.sound2_time > 1) {
            this.sound2_time = 0
            if (AudioMgr.inst.isPlaying()) {
                console.log('正在播放中。。。。 = ', AudioMgr.inst.isPlaying());
            }
            else {
                AudioMgr.inst.playOneShot('sound/sgj/turnstep2');
                //console.log('正在播放中。。。。 = ', AudioMgr.inst.isPlaying());
            }
        }
        else {
            this.sound2_time = this.sound2_time + 0.5
        }

        //音频控制3
        if (this.startIndex > this.endIndex - 16 && this.sound3_time == false) {
            this.sound3_time = true;
            AudioMgr.inst.playOneShot('sound/sgj/turnstep3');
        }
    }
}



