$(function () {
  $('.changeList').click(function () {
    $(this).addClass('addBg').siblings('.changeList').removeClass('addBg');
    $('.list').eq($(this).index()).show();
    $('.list').eq($(this).index()).siblings('.list').hide();
  })
  $('.conter ul li ').click(function () {
    location.href = "../page/fightDetail.html"
  })
  api.userRoom({
    page: 1,
    rows: 10,
    userid: 'e04d33c9648011e89774525400b4f4ae'
  }).then(function (res) {
    console.log(res)
    res = (typeof res === 'string' ? JSON.parse(res) : res)
    var html = "";
    for (var i = 0; i < res.data.beans.length; i++) {
      html += `<li palyId="${res.data.beans[i].palyId}">
          <div class="mediePic">
            <img src="" alt="">
          </div>
          <div class="title">
            <div class="fjn emp">房间号：${res.data.beans[i].roomId}</div>
            <div class="time emp">${res.data.beans[i].createtime}</div>
          </div>
          <div class="detail">
            <span class="lose">-35</span>
            <em></em>
          </div>
        </li>`
    }
    $('.list').eq(0).find('ul').append(html)
  }, function (err) {
    console.log(err)
  })
})