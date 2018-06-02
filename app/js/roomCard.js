$(function () {
  $('.changeList').click(function () {
    $(this).addClass('addBg').siblings('.changeList').removeClass('addBg');
    $('.list').eq($(this).index()).show();
    $('.list').eq($(this).index()).siblings('.list').hide();
  })
  api.userCard({
    page: 1,
    rows: 10,
    rechargeId: 'e04d33c9648011e89774525400b4f4ae'
  }).then(function (res) {
    console.log(res)
    res = (typeof res === 'string' ? JSON.parse(res) : res)
    var html = "";
    for (var i = 0; i < res.data.beans.length; i++) {
      html += `<li>
                <div class="title">
                  <div class="emp">${res.data.beans[i].rechargeName}</div>
                  <div class="num">${res.data.beans[i].recordNum}张</div>
                </div>
                <div class="detail">
                  <div class="time emp">${res.data.beans[i].createtime}</div>
                  <div class="state">${res.data.beans[i].status}</div>
                </div>
              </li>`
    }
    $('.list').eq(0).find('ul').html(html)
  }, function (err) {
    console.log(err)
  })
  api.userCard({
    page: 1,
    rows: 10,
    userid: 'e04d33c9648011e89774525400b4f4ae'
  }).then(function (res) {
    console.log(res)
    res = (typeof res === 'string' ? JSON.parse(res) : res)
    var html = "";
    for (var i = 0; i < res.data.beans.length; i++) {
      html += `<li>
                <div class="title">
                  <div class="emp">${res.data.beans[i].rechargeName}</div>
                  <div class="num">${res.data.beans[i].recordNum}张</div>
                </div>
                <div class="detail">
                  <div class="time emp">${res.data.beans[i].createtime}</div>
                  <div class="state">${res.data.beans[i].status}</div>
                </div>
              </li>`
    }
    $('.list').eq(1).find('ul').html(html)
  }, function (err) {
    console.log(err)
  })

})
var num = 1
var num2 = 1
var stop = true; //触发开关，防止多次调用事件  
$(window).scroll(function () {
  //当内容滚动到底部时加载新的内容 100当距离最底部100个像素时开始加载.  
  if ($(this).scrollTop() + $(window).height() + 100 >= $(document).height() && $(this).scrollTop() > 100) {

    if (stop == true) {
      stop = false;
      if ($('.changeList').eq(0).hasClass('addBg')) {
        //发出
        api.userCard({
          page: num++,
          rows: 10,
          rechargeId: 'e04d33c9648011e89774525400b4f4ae'
        }).then(function (res) {
          console.log(res)
          res = (typeof res === 'string' ? JSON.parse(res) : res)
          var html = "";
          for (var i = 0; i < res.data.beans.length; i++) {
            html += `<li>
                      <div class="title">
                        <div class="emp">${res.data.beans[i].rechargeName}</div>
                        <div class="num">${res.data.beans[i].recordNum}张</div>
                      </div>
                      <div class="detail">
                        <div class="time emp">${res.data.beans[i].createtime}</div>
                        <div class="state">${res.data.beans[i].status}</div>
                      </div>
                    </li>`
          }
          $('.list').eq(0).find('ul').html(html)
          stop = true;
        }, function (err) {
          stop = true;
          console.log(err)
        })
      } else if ($('.changeList').eq(0).hasClass('addBg')) {
        //  收到
        api.userCard({
          page: num2++,
          rows: 10,
          userid: 'e04d33c9648011e89774525400b4f4ae'
        }).then(function (res) {
          console.log(res)
          res = (typeof res === 'string' ? JSON.parse(res) : res)
          var html = "";
          for (var i = 0; i < res.data.beans.length; i++) {
            html += `<li>
                      <div class="title">
                        <div class="emp">${res.data.beans[i].rechargeName}</div>
                        <div class="num">${res.data.beans[i].recordNum}张</div>
                      </div>
                      <div class="detail">
                        <div class="time emp">${res.data.beans[i].createtime}</div>
                        <div class="state">${res.data.beans[i].status}</div>
                      </div>
                    </li>`
          }
          $('.list').eq(1).find('ul').html(html)
          stop = true;
        }, function (err) {
          stop = true;
          console.log(err)
        })
      }
    }
  }
});