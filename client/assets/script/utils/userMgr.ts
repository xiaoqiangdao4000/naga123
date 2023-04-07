import { _decorator, Component, Node, sys, director, game } from 'cc';
import HTTP from './HTTP';
const { ccclass, property } = _decorator;
@ccclass('userMgr')
export class userMgr extends Component {

    public account = null;  //账号
    public userid = 0;      //用户id
    public nickname = '';   //昵称
    public password = '';   //密码
    public score = 0;   //分数
    public sign = 0;        //标志
    public ip = '';         //ip
    public sex = 0;         //性别 
    public roomid = null;   //房间数据
    public bindaccount = 0;    //绑定账号
    public hallip = '';     //大厅ip
    public hallport = 0;    //大厅端口
    public noticemsg = [];  //消息公告
    public serverMap = [];

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
            nickname: '',
            password: '',
        };
        if (data == null) {
            userinfo.nickname = 'guest'
            userinfo.password = '';
        }
        else {

            userinfo.nickname = data.nickname;
            userinfo.password = data.password;
        }
        console.log('获取到本地账户:', userinfo);
        return userinfo;
    }

    //保存账号信息
    saveAccount(nickname: string, password: string) {
        let data = {
            nickname: nickname,
            password: password,
        }
        sys.localStorage.setItem('userinfo', JSON.stringify(data));
    }

    //游客登陆
    onGuest(data) {
        if (data.userid == 0) {
            globalThis.eventTargets.emit('login_popTips', '游客登陆失败！');
            console.log('游客登陆失败:', data);
            return;
        }
        else {
            globalThis.userMgr.userid = data.userid;
            globalThis.userMgr.nickname = data.nickname;
            globalThis.userMgr.score = data.score;
            globalThis.userMgr.password = data.password;
            globalThis.userMgr.roomid = data.roomid;
            globalThis.userMgr.bindaccount = data.bindaccount;
            globalThis.userMgr.saveAccount(data.nickname, data.password);
            globalThis.userMgr.serverMap = [];
            for (var s in data.serverMap) {
                var info = data.serverMap[s];
                globalThis.userMgr.serverMap.push(info)
            }
            // globalThis.userMgr.hallip = data.hallip;
            // globalThis.userMgr.hallport = data.hallport;
            // HTTP.getInstance().setUrl(data.hallip, data.hallport);

            globalThis.eventTargets.emit('login_poploading', 'hide', '游客登完毕!');
            console.log('游客登陆成功!服务器返回:' + data.userid + ' ,' + data.nickname + ' ,' + data.score + ' ,' + data.password + ' ,' + data.roomid + ' ,' + data.bindaccount);
            console.log('---开始切换场景---');
            director.loadScene('hallScene');
        }
    }

    //账号登陆
    onAccountLogin(data) {
        if (data.userid == 0) {
            globalThis.eventTargets.emit('login_popTips', '账号登陆失败:用户不存在或密码错误!');
            return;
        }
        globalThis.userMgr.userid = data.userid;
        globalThis.userMgr.nickname = data.nickname;
        globalThis.userMgr.score = data.score;
        globalThis.userMgr.password = data.password;
        globalThis.userMgr.roomid = data.roomid;
        globalThis.userMgr.bindaccount = data.bindaccount;
        globalThis.userMgr.serverMap = [];
        for (var s in data.serverMap) {
            var info = data.serverMap[s];
            globalThis.userMgr.serverMap.push(info)
        }
        // globalThis.userMgr.hallip = data.hallip;
        // globalThis.userMgr.hallport = data.hallport;
        // HTTP.getInstance().setUrl(data.hallip, data.hallport);
        globalThis.userMgr.saveAccount(data.nickname, data.password);
        globalThis.eventTargets.emit('login_poploading', 'hide', '游客登陆中，请稍等!');
        console.log('账号登陆成功!服务器返回:' + data.userid + ' ,' + data.nickname + ' ,' + data.score + ' ,' + data.password + ' ,' + data.roomid + ' ,' + data.bindaccount);
        console.log('---开始切换场景---');
        director.loadScene('hallScene');
    }

    //账号绑定
    onBindAccount(data) {
        if (data.userid == 0) {
            globalThis.eventTargets.emit('hall_popTips', '绑定账号失败！');
            return;
        }
        globalThis.userMgr.userid = data.userid;
        globalThis.userMgr.nickname = data.nickname;
        globalThis.userMgr.password = data.password;
        globalThis.userMgr.bindaccount = data.bindaccount;
        globalThis.userMgr.saveAccount(data.nickname, data.password);
        globalThis.eventTargets.emit('hall_bindAccountSuc', data.nickname, '绑定账号成功!');
        globalThis.eventTargets.emit('login_poploading', 'hide', '绑定账号成功!');
        console.log('绑定账号成功!:' + data.userid + ' ,' + data.nickname + ' ,' + data.password + ' ,' + data.bindaccount);
    }

    //获取当前游戏的数据
    getGameInfo(gamename) {
        for (let i = 0; i < globalThis.userMgr.serverMap.length; i++) {
            if (globalThis.userMgr.serverMap[i].name == gamename) {
                return globalThis.userMgr.serverMap[i];
            }
        }
        return null;
    }
}



