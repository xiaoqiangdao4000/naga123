import { _decorator, Component, Node, EventHandler, EventTouch, Sprite, math, randomRangeInt, Button } from 'cc';
import { AudioMgr } from '../utils/AudioMgr';

const { ccclass, property } = _decorator;

@ccclass('sgj_btn')
export class sgj_btn extends Component {
    @property({
        tooltip: "触摸回调间隔（秒）。假如为0.1，那么1秒内会回调10次 ${longTouchEvents} 事件数组"
    })
    touchInterval: number = 0.2;

    @property({
        tooltip: "是否支持长按"
    })
    isLongPress: boolean = true;

    @property({
        readonly: true,
        tooltip: "是否支持多点触控（当前还不支持）"
    })
    enableMultiTouching: boolean = false;

    @property({
        type: [Component.EventHandler],
        tooltip: "回调事件数组，每间隔 ${toucheInterval}s 回调一次"
    })
    longTouchEvents: EventHandler[] = [];

    private _touchCounter: number = 0;
    private _isTouching: boolean = false;
    myButton: Button;

    start() {
        this.myButton = this.node.getComponent(Button);
    }

    update(deltaTime: number) {

    }

    onEnable() {
        this.node.on(Node.EventType.TOUCH_START, this._onTouchStart, this);
        this.node.on(Node.EventType.TOUCH_END, this._onTouchEnd, this);
        this.node.on(Node.EventType.TOUCH_CANCEL, this._onTouchCancel, this);
    }

    onDisable() {
        this.node.off(Node.EventType.TOUCH_START, this._onTouchStart, this);
        this.node.off(Node.EventType.TOUCH_END, this._onTouchEnd, this);
        this.node.off(Node.EventType.TOUCH_CANCEL, this._onTouchCancel, this);
    }

    private _onTouchStart(event: EventTouch) {

        if (this.myButton.interactable == false) return;

        this._isTouching = true;
        // 第一次触摸立即回调一次
        this.publishOneTouch();

        //不支持长按
        if (this.isLongPress == true) {
            this._isTouching = true;
        }
        else {
            this._isTouching = false;
            return;
        }
        // 然后开启计时器，计算后续的长按相当于触摸了多少次
        this.schedule(this._touchCounterCallback, this.touchInterval);
    }

    private _onTouchEnd(event: EventTouch) {
        this._isTouching = false;
        this._touchCounter = 0;
        this.unschedule(this._touchCounterCallback);
    }

    private _onTouchCancel(event: EventTouch) {
        this._isTouching = false;
        this._touchCounter = 0;
        this.unschedule(this._touchCounterCallback);
    }

    private _touchCounterCallback() {
        if (this._isTouching) {
            this.publishOneTouch();
        } else {
            this.unschedule(this._touchCounterCallback);
        }
    }

    /**
     * 通知出去：被点击/触摸了一次，长按时，会连续多次回调这个方法
     */
    private publishOneTouch() {
        if (!this._isTouching) {
            return;
        }
        this._touchCounter++;
        this.longTouchEvents.forEach((eventHandler: EventHandler) => {
            eventHandler.emit([this._touchCounter]);
        });
    }

    //处理逻辑事件
    handleToucheLogic(touchCounter: number, customEventData?: any) {

        console.log(`当前下注按钮 = `, customEventData);
        switch (customEventData) {
            case 'b1':
                {
                    AudioMgr.inst.play('sound/sgj/sgj_bt1')
                    this.addBetOneScore(0);
                    break;
                }
            case 'b2':
                {
                    AudioMgr.inst.play('sound/sgj/sgj_bt2')
                    this.addBetOneScore(1);
                    break;
                }
            case 'b3':
                {
                    AudioMgr.inst.play('sound/sgj/sgj_bt3')
                    this.addBetOneScore(2);
                    break;
                }
            case 'b4':
                {
                    AudioMgr.inst.play('sound/sgj/sgj_bt4')
                    this.addBetOneScore(3);
                    break;
                }
            case 'b5':
                {
                    AudioMgr.inst.play('sound/sgj/sgj_bt5')
                    this.addBetOneScore(4);
                    break;
                }
            case 'b6':
                {
                    AudioMgr.inst.play('sound/sgj/sgj_bt6')
                    this.addBetOneScore(5);
                    break;
                }
            case 'b7':
                {
                    AudioMgr.inst.play('sound/sgj/sgj_bt7')
                    this.addBetOneScore(6);
                    break;
                }
            case 'b8':
                {
                    AudioMgr.inst.play('sound/sgj/sgj_bt8')
                    this.addBetOneScore(7);
                    break;
                }
            case 'all':
                {
                    AudioMgr.inst.play('sound/sgj/sgj_bt1')
                    this.addAllBetOneScore();
                    break;
                }
            case 'big':
                {
                    break;
                }
            case 'small':
                {
                    break;
                }
            case 'go':
                {
                    //判断当前状态
                    if (globalThis.game_sgj.gameState == 0)   //下注状态--开始游戏
                    {
                        //是否续投 0第一次，1续投
                        if (globalThis.game_sgj.bet_start == 1) {
                            let allbet = globalThis.game_sgj.getAllBetScore();
                            let userscore = globalThis.globalThis.userMgr.score;
                            if (userscore <= 0) {
                                globalThis.game_sgj.addTops('下注分数不够!');
                                return;
                            }
                            if (userscore < allbet) {
                                globalThis.game_sgj.addTops('下注分数不够，请重新下注！');
                                return;
                            }

                            //开始续投
                            globalThis.userMgr.score = globalThis.userMgr.score - allbet;
                            globalThis.sgj_view.setUserScoreView(globalThis.userMgr.score);
                            for (let i = 0; i < 8; i++) {
                                globalThis.game_sgj.setBetScore(i, globalThis.game_sgj.bet_score[i]);
                            }

                        }
                        //按钮状态begin-------
                        globalThis.sgj_view.all_btn.interactable = false;
                        globalThis.sgj_view.left_btn.interactable = false;
                        globalThis.sgj_view.right_btn.interactable = false;
                        globalThis.sgj_view.small_btn.interactable = false;
                        globalThis.sgj_view.big_btn.interactable = false;
                        globalThis.sgj_view.go_btn.interactable = false;
                        globalThis.sgj_view.bet1_btn.interactable = false;
                        globalThis.sgj_view.bet2_btn.interactable = false;
                        globalThis.sgj_view.bet3_btn.interactable = false;
                        globalThis.sgj_view.bet4_btn.interactable = false;
                        globalThis.sgj_view.bet5_btn.interactable = false;
                        globalThis.sgj_view.bet6_btn.interactable = false;
                        globalThis.sgj_view.bet7_btn.interactable = false;
                        globalThis.sgj_view.bet8_btn.interactable = false;
                        //按钮状态end---------

                        globalThis.sgj_normal.stop();
                        globalThis.sgj_endFlash.stop();
                        globalThis.game_sgj.onGameEnd();
                    }
                    else if (globalThis.game_sgj.gameState == 1)//结束状态--可以收分
                    {
                        globalThis.sgj_view.all_btn.interactable = false;
                        globalThis.sgj_view.left_btn.interactable = false;
                        globalThis.sgj_view.right_btn.interactable = false;
                        globalThis.sgj_view.small_btn.interactable = false;
                        globalThis.sgj_view.big_btn.interactable = false;
                        globalThis.sgj_view.go_btn.interactable = false;
                        globalThis.sgj_view.bet1_btn.interactable = false;
                        globalThis.sgj_view.bet2_btn.interactable = false;
                        globalThis.sgj_view.bet3_btn.interactable = false;
                        globalThis.sgj_view.bet4_btn.interactable = false;
                        globalThis.sgj_view.bet5_btn.interactable = false;
                        globalThis.sgj_view.bet6_btn.interactable = false;
                        globalThis.sgj_view.bet7_btn.interactable = false;
                        globalThis.sgj_view.bet8_btn.interactable = false;
                        globalThis.sgj_moveScore.play();
                    }

                    break;
                }
        }
    }

    //下注全部加1
    addAllBetOneScore() {
        if (globalThis.userMgr.score <= 0) {
            globalThis.sgj_view.addTops('余额不足,请充值。。。');
            return;
        }
        let t_game_sgj = globalThis.game_sgj;
        if (t_game_sgj.bet_score[0] >= 99 &&
            t_game_sgj.bet_score[1] >= 99 &&
            t_game_sgj.bet_score[2] >= 99 &&
            t_game_sgj.bet_score[3] >= 99 &&
            t_game_sgj.bet_score[4] >= 99 &&
            t_game_sgj.bet_score[5] >= 99 &&
            t_game_sgj.bet_score[6] >= 99 &&
            t_game_sgj.bet_score[7] >= 99) {
            globalThis.sgj_view.addTops('已经是最大下注了，请点击开始游戏！');
            return;
        }
        this.addBetOneScore(0, false);
        this.addBetOneScore(1, false);
        this.addBetOneScore(2, false);
        this.addBetOneScore(3, false);
        this.addBetOneScore(4, false);
        this.addBetOneScore(5, false);
        this.addBetOneScore(6, false);
        this.addBetOneScore(7, false);
    }

    //下注+1
    addBetOneScore(area: number, showtips: boolean = true) {
        if (area < 0 || area > 7) return;
        let t_game_sgj = globalThis.game_sgj;
        if (globalThis.userMgr.score > 0 && t_game_sgj.bet_score[area] < 100) {
            t_game_sgj.bet_score[area] += 1;
            globalThis.userMgr.score -= 1;
            //刷新下注、用户分数
            t_game_sgj.setBetScore(area, t_game_sgj.bet_score[area]);
            t_game_sgj.setUserScore(globalThis.userMgr.score);
            //开启go按钮
            globalThis.sgj_view.go_btn.interactable = true;
        }
        else {
            if (showtips) {
                globalThis.sgj_view.addTops('余额不足,请充值。。。');
            }
        }
    }

}