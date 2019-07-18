(function (_win) {

  //关闭图标
  var base64_close = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACRElEQVR4Xu3a0U0DMQwGYHsC2IBuABsUd4KyQdmgGwATsAJsUBZoygS0GzACTGBkqSdVp9I752Jbp0uf28T/d050iYow8Q9OPD9UgNoBExeoS2DiDVA3wboE6hKYuEDWEthut3NEPBDRT7RfSumamW9z61EByGQAkADg7hj8kYjeohBSSlKH1CN1ycMgItpr6tECPAPAU2uCEIRW+KakDyJaegPIfK4I/4SXOswBZsy8R8SrM8ouCBfCS0myBHZmHSADSwHMvItA6Aif9QBUe0AjG4FgEV7yZAF4d4JV+EEAXgiW4QcDWCNYhy8CYIXgEb4YQGkEr/BFAUoheIYvDjAUwTu8CUAuQkR4MwAtQlR4U4C+CJHhzQF6IMjxen08z7fPMFnv9pqDkAtAD4RzNbuEdwNQIriFdwXoieAaPgTg5A4vtPWbybOPw9rNpmO3Px3OtQtcABThGwg3BHOAjvAvzLyOuF5zWQJ9XnIirtdO15tZB/QJ3xQSiWACoAkfjVAcICd8JEJRgCHhoxCKAZQIH4FQBKBkeG+EwQAW4T0RBgFYhvdCyAbwCO+BkAXgGd4aQQ0QEd4SQQWQUpoBwFfkHV7Ha/MDEW00R3UtwLn/CMl8bsfXSzdLzPy5WCzuLQHkBve1NYFr+I7l8E5EK0sA+U/eBhHnzPyLiCtty2mK6/rucTlIPTfMfEDEJRF9d/3O5TisKSLyu6o9ILJQq7krgJXsWMatHTCWJ2VVZ+0AK9mxjFs7YCxPyqrO2gFWsmMZ9w8Y6uxQLAt6ZQAAAABJRU5ErkJggg==';
  //logo图片
  var base64_logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAACwCAMAAACYaRRsAAAA3lBMVEVHcEz////////////////////////////////////////////e6v7///////////////////////////////////////8HZ/P/YKIRbfUhePj/TZP/P4n/V5v/SJAZc/b/Upcpffn/Q4z/W58xg/s6ifz/6lr/xkz/817/0k//ukn/31X/rUIAWvT/L4H/HnX/7UMASfH/udX/+fX/9tv/yi//7LCPuvz/6PFrpPv/8YTc6f7v9v//nsT/1ubC2v3/rin/hrdNk/v/nin/caqqzP3/2Zr/zXz/kRj/hAUrcTL4AAAAFnRSTlMAEnoJrGCD8snibJLGNzJBHEhUISwlxngsdwAAC1dJREFUeNrtnXlzokoUxWcSEzWpWd+8RpDdLWqAuGvcotEk7/t/odcb0CwuIBqomoNlkvlj5lcn597bIEN/+bJb326ucoVi/qIqFnK3dz+uv0TWn7tcEXya8oWrb1For+8K4NNVuPp5JO7XqyJIhfK3RyHf5UF6dHswzT+KIFUq3uznvQWp0/0e3J8FkEIVv+/i/TcP0qlfO+KbVl4AQoP8A6RYdyF5AKnWj8C0yKcbGPgrr5ByXpC/Tnv/9SvnWUiCDOg3A5zPAjD46q53MsHrhuIaZET/UuCrrABTi6/zWQGmKb7LDC9dahayA5zPwCIiuNC8yhJwLluJgGcfmZlytv5kYxnBnnvcZAv4NgsLS2/V5bIFXMxWk0DAxawBZ6urweH8F/gv8F/gv8AJAPfOjNHr9RIDHnc3UrlcljbzxTlQ+8Pn5wei5+fhsN87EXixEi3LMqHge6mbNO3zwxNUHeqhjr+F2Puh9wP3NqZlirYgc2mcKO7TU7uO9eAKUUPoWMALkcGF0kVLTC4Xw7aDiw32Qj/3owMvLEsXvdItKyni4aDdhsCU2UcMmR8iA4+DvIjYHCfI27Z5A8RPz5GB1SCvLuqyVUkkv4Nmu02R2yQVvihHjsTcz6vjA3o8TwC4PWhTsaGoHzR4N3DPNH246CXqumiKvQQCAQ1utj0me3Kxy+DdwHMrgKsjXF1PwuImEsZFX+qBJO80eDdwyQqkgSDrunly3b0NEC9+1Z+x0/W2JxdPkfvwWDR90aW0ULK1OXHl0GgQi5vNIfzpefDUfGJi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';
  //提示跳转到浏览器下载提示图片
  var base54_tips_down = 'data:image/png;base64,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';
  //企业设置向导图片
  var path_course = 'http://cdn.vchatshow.com/prod/tg/hj2/images/course.gif?x1';
  //浏览器环境参数
  var ua = _win.navigator.userAgent;

  var app = {
    hasIos: /(iPhone|iPad|iPod|iOS)/i.test(ua),
    hasAndroid: /(Android)/i.test(ua),
    android_down: 'https://www.pgyer.com/pFHr', //安卓下载地址
    ios_down: 'itms-services://?action=download-manifest&url=https://dist.vliao55.com/ios/manifest.b_512.plist', //ios分发包地址
    ios_store: 'https://www.pgyer.com/Ava6', //ios商城地址
    goto_system_set: 'https://www.pgyer.com/app/getProvisionFile', // 'http://cdn.vchat1.com/prod/tg/BaoJiaF.mobileprovision', //ios跳转设置证书配置文件地址
    certname: 'HangZhou Xunku Technology Co., Ltd.', //ios企业证书名
    ios_install_time: 40, //ios企业包安装进度时间
    //禁止滑动
    disabled_move: function (selector) {
      $(selector).on('touchmove', function (e) {
        e.preventDefault();
      });
    },
    getQueryString: function (name) {
      //获取链接参数
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return encodeURIComponent(r[2]);
      return null
    },
    //设置下载链接
    setDownUrl: function () {
      var self = this;
      //设置安卓下载地址
      if (self.hasAndroid) {
        $('.down').attr('href', self.android_down)
      }
      //设置苹果下载地址
      if (self.hasIos) {
        if (/(baidu|sogou)/i.test(ua)) {
          //商城
          $('.down').attr('href', self.ios_store)
        } else if (/(weibo)/i.test(ua)) {
          $('.down').attr('herf', 'javascript:void(0)');
        } else if (/(ucbrowse)/i.test(ua)) {
          //a标签下载
          $('.down').attr('href', self.ios_down)
        } else {
          $('.down').attr('href', self.ios_down)
        }

        $(".down").unbind();

        $('.down').click(function () {
          if (/(weibo)/i.test(ua)) {
            //提示在浏览器下载
            $('body').append('<div class="tips-jump-down"><img src="' + base54_tips_down + '"></div>');
            self.disabled_move('.tips-jump-down');
            $('.tips-jump-down').click(function () {
              $(self).remove();
            });
          } else {
            self.showDownIos();
          }
        });
      }
    },
    init: function () {
      var self = this;
      if ($('.down').length > 0) {
        self.setDownUrl();
      }
      $('.show-down').click(function () {
        self.showDown()
      });
    },
    showDown: function () {
      var self = this;
      if ($('.mask-down').length > 0) {
        $('.mask-down').show()
      } else {
        //微博处理
        if (self.hasIos && /(weibo)/i.test(ua)) {
          //提示在浏览器下载
          $('body').append('<div class="tips-jump-down"><img src="' + base54_tips_down + '"></div>');
          self.disabled_move('.tips-jump-down');
          $('.tips-jump-down').click(function () {
            $(this).remove();
          });
          return;
        }

        //添加下载框
        $('body').append(
          '<div class="mask-down"><div class="dialog bounceIn"><img class="mask-close" src="' + base64_close + '"><img src="' + base64_logo + '" class="logo"><p>为保护该主播隐私<br>请下载V聊APP与她真人视频<br>建议17岁以上下载观看<br></p><a class="down btn-down" href="#">立即下载</a></div></div>'
        )

        //关闭下载对话框
        $('.mask-close').click(function () {
          $('.mask-down').hide()
        })

        //禁止滑动
        self.disabled_move('.mask-down');

        self.setDownUrl();

        //下载app事件
        $('.btn-down').click(function () {
          $('.mask-down').hide();
        });
      }
    },
    showDownIos: function () {
      var self = this;
      if ($('.mask-ios').length > 0) {
        $('.mask-ios').show()
      } else {
        var hasSafari = /(Safari)/i.test(ua);
        $('body').append('<div class="mask-ios">' +
          '<div class="box">' +
          '<div class="dialog">' +
          '<img class="mask-ios-close" src="' + base64_close + '">' +
          '<span class="title">“V聊”安装中...</span>' +
          '<span class="tips">若安装后无法正常使用，请删除旧版V聊</span>' +
          '<div class="progress">' +
          '<div class="scale"></div>' +
          '</div>' +
          '<img class="course" src="' + path_course + '">' +
          '<div class="cert">' +
          '<a href="' + (hasSafari ? self.goto_system_set : 'javascript:void(0);') + '" class="btncert">' + (hasSafari ? '前往企业证书' : '安装完成，请到设备管理添加信任') + '</a>' +
          '<p class="certname">' +
          '请点击证书名' + self.certname +
          '</p></div></div></div></div>');

        self.disabled_move('.mask-ios');

        setTimeout(function () {
          $('.scale').css('transition', 'width ' + self.ios_install_time + 's linear 0s');
          $('.scale').css('width', '100%');
        }, 100)

        var ios_install_speed = setTimeout(function () {
          $('.mask-ios .progress').hide();
          $('.mask-ios .cert').show();
          $('.mask-ios .title').text('安装完成，请开始设置！');
        }, self.ios_install_time * 1000 + 100);

        $('.mask-ios .mask-ios-close').click(function () {
          clearTimeout(ios_install_speed);
          $('.mask-ios').remove();
        });
      }
    }
  }

  $(document).ready(function () {
    app.init();
  });

  _win.app = app;

})(window);