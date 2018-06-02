function isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
};
if (!isWeiXin()) {
    // 不是微信浏览器 打开新页面
    //window.location.href = "../native.html"
}

var loadingHtml = '<div class="loadingBox" id="loadingBox"><div class="loadwarp"><div class="loader">加载中...</div></div></div>'

var config = {
    URL: 'http://193.112.6.245:8082/',
    byUrl: function (name, url) {
        if (!url) url = location.href; // 取url
        var mat = new RegExp('[?&]' + name + '=(.*?)(&|#|$)').exec(url);
        if (mat) return decodeURIComponent(mat[1]);
        return '';
    },
    addloading: function () {
        if ($('#loadingBox').length){
            $('#loadingBox').show();
        }else{
            $('body').append(loadingHtml)
        }
    },
    closeLoading:function() {
        $('#loadingBox').hide();
    }
};
var api = (function ($, config) {
    var dfd = $.Deferred();
    function fetch(url, params, option) {
        config.addloading();
        return $.ajax({
            url: config.URL + url,
            type: option && option.type || 'POST',
            data: params,
            success: function (resp) {
                resp = ( typeof resp === 'string' ? JSON.parse(resp) : resp)
                if (!resp.isSuccess) {
                    dfd.reject(resp)
                } else {
                    dfd.resolve(resp)
                }
            },
            error: function (err) {
                // dialogView.close();
                // dialogView.alert({
                //     message:'接口调用失败点击确定重试',
                //     buttons:[{
                //         skin:'yes',
                //         text: "刷新本页",
                //         callback: function () {
                //             location.reload();
                //         }
                //     }]
                // })
                // dfd.reject(err)
            },
            complete: function () {
                config.closeLoading();
                console.log('接口调用结束，结束操作，关闭loading')
            }
        })
    }
    return {
        /**
         * 
         *  @method 
         *  @param { 参数类型 } 参数名 参数说明
         *  @return {返回值类型} 返回值说明
         * 
         */
        login: function (param) {
            return fetch('fishWebController/login', param)
        },
        userBaes: function (param) {
            return fetch('fishWebController/userBaes', param)
        },
        userCard: function (param) {
            return fetch('fishWebController/userCard', param)
        },
        userRoom: function (param) {
            return fetch('fishWebController/userRoom', param)
        },
        userPaly: function (param) {
            return fetch('fishWebController/userPaly', param)
        },

    }

})(jQuery, config)