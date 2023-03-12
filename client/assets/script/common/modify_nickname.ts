import { _decorator, Component, Node, Label, EditBox } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('modify_nickname')
export class modify_nickname extends Component {

    @property(Label)
    number_lb: Label;

    @property(EditBox)
    nickname_editbox: EditBox;

    start() {

    }

    update(deltaTime: number) {

    }

    onBtnClick(event: any, customEventData: any) {
        switch (customEventData) {
            case 'ok_btn':
                {
                    let nickname = this.nickname_editbox.string;
                    console.log('输入框新昵称:', nickname);
                    this.node.active = false;
                    break;
                }
            default:
                break;
        }
    }
}


