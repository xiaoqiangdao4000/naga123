import { _decorator, Component, Node, Label, Sprite, tween, Quat, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('loading')
export class loading extends Component {

    @property(Sprite)
    loading_spr:Sprite;


    start() {
        console.log('开始旋转！');
        var sprnode = this.loading_spr.node
        let quat1 = new Quat();
        let r = sprnode.getRotation(quat1);
        r.y += 0.002;
        if(r.y > 2)
        {
            r.y = 0;
        }
        sprnode.setRotation(r);
        // tween(sprnode)
        // .by(1, { rotaton(): r })
        // .repeatForever()
        // .start()

        
    }

    onEnable()
    {
        // tween(this.loading_spr.node)
        // .to(1, { rotation: 360})
        // .repeatForever()
        // .start()    

        // tween(this.node)
        // .by(1, { scale: 1 })
        // .repeatForever()
        // .start()

       
    }

    update(deltaTime: number) {
        var sprnode = this.loading_spr.node
        let quat1 = new Quat();
        let r = sprnode.getRotation(quat1);
        r.y += 0.002;
        if(r.y > 2)
        {
            r.y = 0;
        }
        sprnode.setRotation(r);
    }
}


