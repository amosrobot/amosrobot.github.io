$(function(){
  $('.changeList').click(function(){
    $(this).addClass('addBg').siblings('.changeList').removeClass('addBg');
    $('.list').eq($(this).index()).show();
    $('.list').eq($(this).index()).siblings('.list').hide();
  })
})