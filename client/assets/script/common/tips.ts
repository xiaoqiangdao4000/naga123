import { _decorator, Component, Node, Label, tween, Vec3, color, Color, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('tips')
export class tips extends Component {

    @property(Label)
    tips_lb: Label;

    start() {
    }

    update(deltaTime: number) {

    }

    onShow(text: string) {
        this.tips_lb.string = text;
        let tweenDuration: number = 1.0;
        tween(this.node)
            .to(tweenDuration, { position: new Vec3(0, 370, 0) })
            // to 动作完成后会调用该方法     
            .removeSelf()
            .start()
    }
}

