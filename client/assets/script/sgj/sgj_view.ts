import { _decorator, Component, Node, SpriteFrame, Sprite, resources, Prefab, instantiate } from 'cc';
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

    //提示框
    @property(Node)
    tips_node: Node;

    //下注分数
    bet_score = [8];


    start() {
        globalThis.sgj_view = this;
        //初始化分数
        globalThis.userMgr.score = 10000;
        this.setUserScore(globalThis.userMgr.score);
        this.setWinScore(0);
        for (let i = 0; i < 8; i++) {
            this.bet_score[i] = 0;
        }
        this.restBetScore();
    }

    update(deltaTime: number) {

    }

    //设置赢分
    setWinScore(score: number) {
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

    //设置用户分数
    setUserScore(score: number) {
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

    //增加下注分数
    addBetScore(btnIndex, showtips = true) {
        let bet_node = this.getBetNode(btnIndex)
        if (this.bet_score[btnIndex - 1] < 99 && globalThis.userMgr.score > 0) {
            this.bet_score[btnIndex - 1] += 1;
            globalThis.userMgr.score -= 1;
            let str = this.bet_score[btnIndex - 1].toString();
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
            this.setUserScore(globalThis.userMgr.score);
        }
        else {
            if (showtips) {
                this.addTops('余额不足,请充值。。。');
            }

        }
    }

    //全部加1
    addAllBetScore() {
        if (globalThis.userMgr.score <= 0) {
            this.addTops('余额不足,请充值。。。');
            return;
        }
        if (this.bet_score[0] >= 99 &&
            this.bet_score[1] >= 99 &&
            this.bet_score[2] >= 99 &&
            this.bet_score[3] >= 99 &&
            this.bet_score[4] >= 99 &&
            this.bet_score[5] >= 99 &&
            this.bet_score[6] >= 99 &&
            this.bet_score[7] >= 99) {
            this.addTops('已经是最大下注了，请点击开始游戏！');
            return;
        }
        this.addBetScore(1, false);
        this.addBetScore(2, false);
        this.addBetScore(3, false);
        this.addBetScore(4, false);
        this.addBetScore(5, false);
        this.addBetScore(6, false);
        this.addBetScore(7, false);
        this.addBetScore(8, false);
    }

    //设置下注分数
    setBetScore(btnIndex, score) {
        let bet_node = this.getBetNode(btnIndex)
        this.bet_score[btnIndex] = score;
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
        if (betIndex == 1) return this.bet1_score_spr;
        else if (betIndex == 2) return this.bet2_score_spr;
        else if (betIndex == 3) return this.bet3_score_spr;
        else if (betIndex == 4) return this.bet4_score_spr;
        else if (betIndex == 5) return this.bet5_score_spr;
        else if (betIndex == 6) return this.bet6_score_spr;
        else if (betIndex == 7) return this.bet7_score_spr;
        else if (betIndex == 8) return this.bet8_score_spr;
        return null;
    }

    //重置下注分数
    restBetScore() {
        for (let i = 0; i < 8; i++) {
            this.bet_score[i] = 0;
            var bet_node = null;
            if (i == 0) bet_node = this.bet1_score_spr;
            else if (i == 1) bet_node = this.bet2_score_spr;
            else if (i == 2) bet_node = this.bet3_score_spr;
            else if (i == 3) bet_node = this.bet4_score_spr;
            else if (i == 4) bet_node = this.bet5_score_spr;
            else if (i == 5) bet_node = this.bet6_score_spr;
            else if (i == 6) bet_node = this.bet7_score_spr;
            else if (i == 7) bet_node = this.bet8_score_spr;
            let str = this.bet_score[i].toString();
            let len = str.length;
            for (let j = 0; j < 2; j++) {
                if (j < len) {
                    let st = Number(str[len - j - 1]);
                    bet_node[j].spriteFrame = this.up_number_spf[st];
                    bet_node[j].node.active = true;
                }
                else {
                    bet_node[j].node.active = false;
                }
            }
        }
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