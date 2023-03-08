import { _decorator, Component, Node, sys } from 'cc';
const { ccclass, property } = _decorator;
globalThis.userMgr = null;
@ccclass('userMgr')
export class userMgr extends Component {

    public account = null;  //账号
    public userId = 0;      //用户id
    public nickName = '';   //昵称
    public userScore = 0;   //分数
    public sign = 0;        //标志
    public ip = '';         //ip
    public sex = 0;         //性别 
    public roomData = null; //房间数据
    public OldRoomId = null;//已创房间号
    static instance = null;

    public static getInstance()
    {
        if(userMgr.instance == null)
        {
            userMgr.instance = new userMgr();
            return userMgr.instance;
        }
        else
        {
            return userMgr.instance;
        }
    }

    start() {
        console.log('userMgr =====')
        globalThis.userMgr = userMgr.getInstance();
    }

    getAccount()
    {
        let account = sys.localStorage.getItem('account');
        if(account == null){
            console.log('Date.now() = ', Date.now());
            this.account = 'guest'+ Date.now(); //date
        }
    }

    update(deltaTime: number) {
        
    }
}


