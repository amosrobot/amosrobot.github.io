$(function () {
  $("#service").click(function () {
    $(".showWin,.showWinBg").show();
  });
  $(".showWinBg").click(function (event) {
    $(".showWin,.showWinBg").hide();
  });
  $("#more").click(function () {
    $(".showWinmore,.showWinmoreConter").show();
  });
  $(".closeWin1").click(function () {
    $(".showWinmore,.showWinmoreConter").hide();
  });

  $(document).on("click", ".openWin", function () {
    $(".showWinroom,.showWinroomConter").show();
  });
  $(".closeWin").click(function () {
    $(".showWinroom,.showWinroomConter").hide();
  });
  $(".settingType .item").click(function () {
    $(this)
      .addClass("active")
      .siblings(".item")
      .removeClass("active");
  });
  $('#gogame').click(function(){
    window.location.href="../page/playgame.html?userId=e04d33c9648011e89774525400b4f4ae&roomId=1&rule=1&playerNum=1&clip=1&upper=100&special=1&roundNumber=12&mainType=1"
  })
  $('input[type=radio][name=peopleNumber]').change(function () {
    if (this.value == '1') {
      $('#fknum').html('12局 X 4房卡')
    } else if (this.value == '2') {
      $('#fknum').html('12局 X 5房卡')
    }
  });
  api.login({
    nickName: '1234',
    headIcon: "https://oa.tydic.com/css/images/newIndex/left_photo22.png",
    openId: 12345,
    province: "江苏",
    city: "南京",
    sex: 1
  }).then(function (res) {
    console.log(res)
  }, function (err) {
    console.log(err)
  })
  api.userBaes({
    userId: 123,
    ids: '1232323'
  }).then(function (res) {
    console.log(res)
  }, function (err) {
    console.log(err)
  })
  api.userCard({
    page: 0,
    rows: 10,
    rechargeId: 123
  }).then(function (res) {
    console.log(res)
  }, function (err) {
    console.log(err)
  })
  api.userCard({
    page: 0,
    rows: 10,
    userid: 456
  }).then(function (res) {
    console.log(res)
  }, function (err) {
    console.log(err)
  })
  api.userRoom({
    page: 0,
    rows: 10,
    userid: 789
  }).then(function (res) {
    console.log(res)
  }, function (err) {
    console.log(err)
  })
  api.userPaly({
    palyId: 789
  }).then(function (res) {
    console.log(res)
  }, function (err) {
    console.log(err)
  })
});
