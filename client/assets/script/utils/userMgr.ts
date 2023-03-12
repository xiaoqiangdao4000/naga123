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
        let userData = sys.localStorage.getItem('userinfo');
        let data = JSON.parse(userData);
        let userinfo = {
            account: null,
            password: null
        };
        if (data == null) {
            userinfo.account = 'guest'
            userinfo.password = null;
            console.log('获取到本地账户:null');
        }
        else {

            userinfo.account = data.account;
            userinfo.password = data.password;
            console.log('获取到本地账户:', userinfo);
        }
        return userinfo;
    }

    //保存账号信息
    saveAccount(account: any, password: any) {
        let data = {
            account: account,
            password: password,
        }
        sys.localStorage.setItem('userinfo', JSON.stringify(data));
    }

    update(deltaTime: number) {

    }
}


