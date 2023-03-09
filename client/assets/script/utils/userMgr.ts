import { _decorator, Component, Node, sys } from 'cc';
const { ccclass, property } = _decorator;
@ccclass('userMgr')
export class userMgr extends Component {

    public account = null;  //账号
    public userid = 0;      //用户id
    public nickname = '';   //昵称
    public score = 0;   //分数
    public sign = 0;        //标志
    public ip = '';         //ip
    public sex = 0;         //性别 
    public roomid = null; //房间数据
    static instance = null;

    public static getInstance() {
        if (userMgr.instance == null) {
            userMgr.instance = new userMgr();
            return userMgr.instance;
        }
        else {
            return userMgr.instance;
        }
    }

    start() {
        console.log('userMgr =====')
        globalThis.userMgr = userMgr.getInstance();
    }

    //获取账号信息
    getAccount() {
        let userData = sys.localStorage.getItem('account');
        let account = JSON.parse(userData);
        if (account == null) {
            account = 'guest'
            return account;
        }
        else {
            console.log('获取到本地账户:', account);
            return account;
        }
    }

    //保存账号信息
    saveAccount(account: any) {
        sys.localStorage.setItem('account', JSON.stringify(account));
    }

    update(deltaTime: number) {

    }
}


