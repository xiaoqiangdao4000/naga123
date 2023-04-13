import { _decorator, Component, Node } from 'cc';
import { AudioMgr } from '../utils/AudioMgr';
const { ccclass, property } = _decorator;

@ccclass('sgj_moveScore')
export class sgj_moveScore extends Component {
    scoretime_add = 1;

    start() {
        globalThis.sgj_moveScore = this;
    }

    play() {
        let win = globalThis.game_sgj.getWinScore();
        this.scoretime_add = 1;

        // if (win < 50) {
        //     this.scoretime_add = Math.floor(win / 5);
        //     AudioMgr.inst.playOneShot("moveScroe");
        // }
        // else if (win < 300) {
        //     this.scoretime_add = Math.floor(win / 10);
        // }
        // else if (win < 700) {
        //     this.scoretime_add = Math.floor(win / 15);
        // }
        // else if (win < 1000) {
        //     this.scoretime_add = Math.floor(win / 20);
        // }
        // else if (win < 2000) {
        //     this.scoretime_add = Math.floor(win / 25);
        // }
        // else if (win < 4000) {
        //     this.scoretime_add = Math.floor(win / 30);
        // }
        // else {
        //     this.scoretime_add = Math.floor(win / 40);
        // }
        this.schedule(this.updateScore, 0.05);
    }

    stop() {
        this.unschedule(this.updateScore);
        AudioMgr.inst.stop()
    }



    updateScore() {
        let t_game_sgj = globalThis.game_sgj;
        let win = t_game_sgj.getWinScore();
        if (win > 0) {
            t_game_sgj.setWinScore(win - 1);
            globalThis.userMgr.score = globalThis.userMgr.score + 1;
            t_game_sgj.setUserScore(globalThis.userMgr.score);
            AudioMgr.inst.play('sound/sgj/getscore')
        }
        else {

        }
    }

    update(deltaTime: number) {

    }
}

