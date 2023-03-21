import { _decorator, Component, Node, Label, Sprite, tween, Quat, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('loading')
export class loading extends Component {

    @property(Sprite)
    loading_spr: Sprite;

    @property(Label)
    tips_lb: Label;

    public ex = 0
    public ey = 0;
    public ez = 360;
    public speed = 3;
    public startR = true;

    start() {

    }

    setTips(type, tips, deltaTime = 0) {
        this.tips_lb.string = tips;

        if (type == 'show') this.node.active = true;
        else if (type == 'hide') {

            if (deltaTime == 0) this.node.active = false;
            else {
                let tweenDuration = deltaTime;
                let nodec = this.node;
                tween(this.node)
                    .delay(tweenDuration)
                    .call(function () {
                        nodec.active = false;
                    })
                    .start()
            }
        }

        // function cc() {
        //     this.node.active = false;
        // }
    }

    update(deltaTime: number) {

        if (this.startR) {
            var sprnode = this.loading_spr.node;
            this.ex = this.ex + this.speed;
            this.ey = this.ey + this.speed;
            this.ez = this.ez - this.speed;
            sprnode.setRotationFromEuler(0, 0, this.ez);
            if (this.ez < 0) this.ez = 360;
        }

    }
}


