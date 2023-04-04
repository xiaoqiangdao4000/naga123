import { _decorator, Component, Node, EventHandler, EventTouch, Sprite } from 'cc';
import { AudioMgr } from '../utils/audioMgr';

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

    start() {

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
                    globalThis.sgj_view.addBetScore(1);
                    break;
                }
            case 'b2':
                {
                    AudioMgr.inst.play('sound/sgj/sgj_bt2')
                    globalThis.sgj_view.addBetScore(2);
                    break;
                }
            case 'b3':
                {
                    AudioMgr.inst.play('sound/sgj/sgj_bt3')
                    globalThis.sgj_view.addBetScore(3);
                    break;
                }
            case 'b4':
                {
                    AudioMgr.inst.play('sound/sgj/sgj_bt4')
                    globalThis.sgj_view.addBetScore(4);
                    break;
                }
            case 'b5':
                {
                    AudioMgr.inst.play('sound/sgj/sgj_bt5')
                    globalThis.sgj_view.addBetScore(5);
                    break;
                }
            case 'b6':
                {
                    AudioMgr.inst.play('sound/sgj/sgj_bt6')
                    globalThis.sgj_view.addBetScore(6);
                    break;
                }
            case 'b7':
                {
                    AudioMgr.inst.play('sound/sgj/sgj_bt7')
                    globalThis.sgj_view.addBetScore(7);
                    break;
                }
            case 'b8':
                {
                    AudioMgr.inst.play('sound/sgj/sgj_bt8')
                    globalThis.sgj_view.addBetScore(8);
                    break;
                }
            case 'all':
                {
                    globalThis.sgj_view.addAllBetScore();
                    break;
                }
            case 'go':
                {
                    globalThis.sgj_normal.stop();
                    break;
                }
        }
    }

}