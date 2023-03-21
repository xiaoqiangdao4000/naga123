import { sys } from "cc";

export default class HTTP {
    public url = 'http://127.0.0.1:3000';
    public token = null;

    public static instance = null;

    static getInstance() {
        if (this.instance == null) {
            this.instance = new HTTP();
            return this.instance;
        }
        else {
            return this.instance;
        }
    }

    setUrl(ip, port) {
        this.url = 'http://' + ip + ':' + port;
        console.log('设置新的http地址=', this.url);
    }

    sendRequest(path, data, handler, extraUrl) {
        var xhr = new XMLHttpRequest();
        xhr.timeout = 5000;

        xhr.ontimeout = function () {
            console.log('连接超时，请检查网络!');
            globalThis.eventTargets.emit('login_poploading', 'hide', '连接超时，请检查网络!', 1);
        }

        xhr.onerror = function () {
            console.log('网络连接错误!');
            globalThis.eventTargets.emit('login_poploading', 'hide', '连接超时，请检查网络!', 1);
        }

        if (data == null) {
            data = {};
        }
        if (extraUrl == null) {
            extraUrl = this.url;
            console.log("修改后的extraUrl", extraUrl);
        }

        //解析请求路由以及格式化请求参数
        var sendpath = path;
        var sendtext = '?';
        for (var k in data) {
            if (sendtext != "?") {
                sendtext += "&";
            }
            sendtext += (k + "=" + data[k]);
        }

        //组装完整的URL
        var requestURL = extraUrl + sendpath + encodeURI(sendtext);

        //发送请求
        console.log("RequestURL:" + requestURL);

        xhr.open("GET", requestURL, true);

        if (sys.isNative) {
            //xhr.setRequestHeader("Accept-Encoding", "gzip,deflate", "text/html;charset=UTF-8");
            xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
        }

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300)) {
                var respText = xhr.responseText;
                var ret = null;
                try {
                    ret = JSON.parse(respText);
                    //console.log("服务端返回的结果为", ret);
                } catch (e) {
                    console.log("err:" + e);
                    ret = {
                        errcode: -10001,
                        errmsg: e
                    };
                }
                if (handler) {
                    handler(ret);
                }
                handler = null;
            } else if (xhr.readyState === 4) {
                // console.log('readystate:' + xhr.readyState + ', status:' + xhr.status);
            } else {
                // console.log('other readystate:' + xhr.readyState + ', status:' + xhr.status);
            }
        };

        try {
            xhr.send();
        } catch (e) {
            console.log('异常:', e);

        }
        return xhr;
    }
}