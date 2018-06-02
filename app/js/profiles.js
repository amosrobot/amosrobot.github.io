$(function(){
  $('.changeList').click(function(){
    $(this).addClass('addBg').siblings('.changeList').removeClass('addBg');
    $('.list').eq($(this).index()).show();
    $('.list').eq($(this).index()).siblings('.list').hide();
  })
  $('.conter ul li ').click(function(){
    location.href="../page/fightDetail.html"
  })
  api.userRoom({
    page: 1,
    rows: 10,
    userid: 'ca3676ea661711e89774525400b4f4ae'
  }).then(function (res) {
    console.log(res)
  }, function (err) {
    console.log(err)
  })
})