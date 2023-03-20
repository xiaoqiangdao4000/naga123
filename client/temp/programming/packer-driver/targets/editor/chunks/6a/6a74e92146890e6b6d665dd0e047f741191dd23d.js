System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, sys, HTTP, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      sys = _cc.sys;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "65198/vo+dMI4kHvP5UC/fK", "HTTP", undefined);

      __checkObsolete__(['sys']);

      _export("default", HTTP = class HTTP {
        constructor() {
          this.Url = 'http://127.0.0.1:3000';
          this.url = this.Url;
          this.master_url = this.Url;
          this.token = null;
        }

        static getInstance() {
          if (this.instance == null) {
            this.instance = new HTTP();
            return this.instance;
          } else {
            return this.instance;
          }
        }

        sendRequest1() {
          //访问地址
          let url = "http://127.0.0.1:3000/guest?nickname=123&name=321"; //新建Http

          let xhr = new XMLHttpRequest(); //接收数据

          xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 400) {
              var response = xhr.responseText;
              console.log('收到服务器消息 = ', response);
            }
          }; //错误处理


          xhr.onerror = function (evt) {
            console.log('错误处理:', evt);
          }; //初始化一个请求，GET方式，true异步请求


          xhr.open("GET", url, true);

          if (sys.isNative) {
            // xhr.setRequestHeader("Accept-Encoding", "gzip,deflate", "text/html;charset=UTF-8");
            console.log('本地机器---');
            xhr.setRequestHeader('Accept-Encoding', 'gzip,deflate');
          } //
          //发送请求


          xhr.send();
        }

        sendRequest(path, data, handler, extraUrl) {
          //var xhr = cc.loader.getXMLHttpRequest();
          var xhr = new XMLHttpRequest();
          xhr.timeout = 5000;

          if (data == null) {
            data = {};
          }

          if (this.token) {
            data.token = this.token;
          }

          if (extraUrl == null) {
            extraUrl = this.url;
            console.log("修改后的extraUrl", extraUrl);
          } //解析请求路由以及格式化请求参数


          var sendpath = path;
          var sendtext = '?';

          for (var k in data) {
            if (sendtext != "?") {
              sendtext += "&";
            }

            sendtext += k + "=" + data[k];
          } //组装完整的URL


          var requestURL = extraUrl + sendpath + encodeURI(sendtext); //发送请求

          console.log("RequestURL:" + requestURL);
          xhr.open("GET", requestURL, true);

          if (sys.isNative) {
            //xhr.setRequestHeader("Accept-Encoding", "gzip,deflate", "text/html;charset=UTF-8");
            xhr.setRequestHeader("Accept-Encoding", "gzip,deflate,text/html,charset=UTF-8"); //xhr.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8');
            //xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
          } // var timer = setTimeout(function () {
          //     xhr.abort();
          //     console.log('http timeout');
          //     retryFunc();
          // }, 5000);
          // var retryFunc = function () {
          //     console.log('重连：');
          //     HTTP.getInstance().sendRequest(path, data, handler, extraUrl);
          // };


          xhr.onreadystatechange = function () {
            console.log("onreadystatechange"); // clearTimeout(timer);

            if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
              // console.log("http res(" + xhr.responseText.length + "):" + xhr.responseText);
              //cc.log("request from [" + xhr.responseURL + "] data [", ret, "]");
              var respText = xhr.responseText;
              var ret = null;

              try {
                ret = JSON.parse(respText);
                console.log("服务端返回的结果为", ret);
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
              // if (xhr.hasRetried) {
              //     return;
              // }
              console.log('111other readystate == 4' + ', status:' + xhr.status);
              return; // setTimeout(function () {
              //     retryFunc();
              // }, 5000);
              // return;
            } else {
              console.log('222other readystate:' + xhr.readyState + ', status:' + xhr.status);
            }
          };

          xhr.send(); // try {
          //     xhr.send();
          // } catch (e) {
          //setTimeout(retryFunc, 200);
          //retryFunc();
          // }

          return xhr;
        }

      });

      HTTP.instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6a74e92146890e6b6d665dd0e047f741191dd23d.js.map