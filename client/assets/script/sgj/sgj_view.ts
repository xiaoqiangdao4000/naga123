import { _decorator, Component, Node, SpriteFrame, Sprite, resources, Prefab, instantiate, Button } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('game_view')
export class game_sgj extends Component {

    //赢分、我的积分、比倍 用的数字
    @property(SpriteFrame)
    up_number_spf: SpriteFrame[] = [];

    //下注用的数字
    @property(SpriteFrame)
    dowm_number_spf: SpriteFrame[] = [];

    //赢分spr
    @property(Sprite)
    win_score_spr: Sprite[] = [];

    //我的积分spr
    @property(Sprite)
    user_score_spr: Sprite[] = [];

    //下注1分数spr
    @property(Sprite)
    bet1_score_spr: Sprite[] = [];

    //下注2分数spr
    @property(Sprite)
    bet2_score_spr: Sprite[] = [];

    //下注3分数spr
    @property(Sprite)
    bet3_score_spr: Sprite[] = [];

    //下注4分数spr
    @property(Sprite)
    bet4_score_spr: Sprite[] = [];

    //下注5分数spr
    @property(Sprite)
    bet5_score_spr: Sprite[] = [];

    //下注6分数spr
    @property(Sprite)
    bet6_score_spr: Sprite[] = [];

    //下注7分数spr
    @property(Sprite)
    bet7_score_spr: Sprite[] = [];

    //下注8分数spr
    @property(Sprite)
    bet8_score_spr: Sprite[] = [];

    //跑马灯-mask
    @property(Node)
    mask_node: Node[] = [];

    //跑马灯-light
    @property(Node)
    light_node: Node[] = [];

    //all+1
    @property(Button)
    all_btn: Button;

    //left
    @property(Button)
    left_btn: Button;

    //right
    @property(Button)
    right_btn: Button;

    //small
    @property(Button)
    small_btn: Button;

    //big
    @property(Button)
    big_btn: Button;

    //go
    @property(Button)
    go_btn: Button;

    //cancel_go
    @property(Node)
    cancel_go_btn: Node;

    //bet1
    @property(Button)
    bet1_btn: Button;

    @property(Button)
    bet2_btn: Button;

    @property(Button)
    bet3_btn: Button;

    @property(Button)
    bet4_btn: Button;

    @property(Button)
    bet5_btn: Button;

    @property(Button)
    bet6_btn: Button;

    @property(Button)
    bet7_btn: Button;

    @property(Button)
    bet8_btn: Button;

    //提示框
    @property(Node)
    tips_node: Node;

    start() {
        globalThis.sgj_view = this;

        //初始化分数
        globalThis.userMgr.score = 10000;

        this.setWinScoreView(0);
        this.setUserScoreView(globalThis.userMgr.score);

        //重置按钮
        this.all_btn.interactable = true;
        this.left_btn.interactable = false;
        this.right_btn.interactable = false;
        this.big_btn.interactable = false;
        this.small_btn.interactable = false;
        this.go_btn.interactable = false;
        this.cancel_go_btn.active = false;
        this.bet1_btn.interactable = true;
        this.bet2_btn.interactable = true;
        this.bet3_btn.interactable = true;
        this.bet4_btn.interactable = true;
        this.bet5_btn.interactable = true;
        this.bet6_btn.interactable = true;
        this.bet7_btn.interactable = true;
        this.bet8_btn.interactable = true;
    }

    update(deltaTime: number) {
    }

    //重置界面
    resetMask() {
        for (let i = 0; i < 24; i++) {
            this.mask_node[i].active = false;
            this.light_node[i].active = false;
        }
    }

    //设置赢分界面
    setWinScoreView(score: number) {
        let str = score.toString();
        let len = str.length;
        for (let i = 0; i < 10; i++) {
            if (i < len) {
                let st = Number(str[len - i - 1]);
                this.win_score_spr[i].spriteFrame = this.up_number_spf[st];
                this.win_score_spr[i].node.active = true;
            }
            else {
                this.win_score_spr[i].node.active = false;
            }
        }
    }

    //设置用户分数界面
    setUserScoreView(score: number) {
        let str = score.toString();
        let len = str.length;
        for (let i = 0; i < 10; i++) {
            if (i < len) {
                let st = Number(str[len - i - 1]);
                this.user_score_spr[i].spriteFrame = this.up_number_spf[st];
                this.user_score_spr[i].node.active = true;
            }
            else {
                this.user_score_spr[i].node.active = false;
            }
        }
    }

    //设置下注分数0,7
    setBetScoreView(area, score) {
        if (area < 0 || area > 7) return;
        let bet_node = this.getBetNode(area);
        let str = score.toString();
        let len = str.length;
        for (let i = 0; i < 2; i++) {
            if (i < len) {
                let st = Number(str[len - i - 1]);
                bet_node[i].spriteFrame = this.up_number_spf[st];
                bet_node[i].node.active = true;
            }
            else {
                bet_node[i].node.active = false;
            }
        }
    }

    //获取对应下注节点
    getBetNode(betIndex) {
        if (betIndex == 0) return this.bet1_score_spr;
        else if (betIndex == 1) return this.bet2_score_spr;
        else if (betIndex == 2) return this.bet3_score_spr;
        else if (betIndex == 3) return this.bet4_score_spr;
        else if (betIndex == 4) return this.bet5_score_spr;
        else if (betIndex == 5) return this.bet6_score_spr;
        else if (betIndex == 6) return this.bet7_score_spr;
        else if (betIndex == 7) return this.bet8_score_spr;
        return null;
    }

    //arg1:弹窗内容
    addTops(arg1: string) {
        resources.load("prefab/tips", Prefab, (err, prefab) => {
            let t_fb = instantiate(prefab);
            this.tips_node.addChild(t_fb);
            let t_script = t_fb.getComponent("tips");
            t_script.onShow(arg1);
        });
    }

}