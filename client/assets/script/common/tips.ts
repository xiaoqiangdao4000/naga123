import { _decorator, Component, Node, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('tips')
export class tips extends Component {

    @property(Label)
    tips_lb: Label;

    start() {

    }

    update(deltaTime: number) {

    }

    show(text: string) {
        this.tips_lb.string = text;
    }
}

