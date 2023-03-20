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

        sendRequest(path, data, handler, extraUrl) {
          var xhr = new XMLHttpRequest();
          xhr.timeout = 5000;

          if (data == null) {
            data = {};
          }

          if (extraUrl == null) {
            extraUrl = this.url; // console.log("修改后的extraUrl", extraUrl);
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
            xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
          }

          xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
              var respText = xhr.responseText;
              var ret = null;

              try {
                ret = JSON.parse(respText); //console.log("服务端返回的结果为", ret);
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
            } else if (xhr.readyState === 4) {// console.log('readystate:' + xhr.readyState + ', status:' + xhr.status);
            } else {// console.log('other readystate:' + xhr.readyState + ', status:' + xhr.status);
            }
          };

          try {
            xhr.send();
          } catch (e) {
            console.log('异常:', e);
          }

          return xhr;
        }

      });

      HTTP.instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=debae4a3f1624d971f38978d8140471d5e9a3299.js.map