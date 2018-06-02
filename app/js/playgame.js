$(function(){
  $('.getCart').click(function(){
    dialogView.confirm({
      message: '<img src="https://oa.tydic.com/css/images/newIndex/left_photo22.png" alt="">',
      buttons: [{
        skin: "yes",
        text: "关闭"
      }]
    });
  })
  $('.minTip').click(function(){
    dialogView.confirm({
      message: '本游戏仅仅提供娱乐xxxxxx',
      buttons: [{
        skin: "yes",
        text: "我知道了"
      }]
    });
  })
  $('.goHome').click(function(){
    dialogView.confirm({
      message: '是否回到主页',
      buttons: [{
        skin: "yes",
        text: "是",
        callback:function(){
          console.log('回首页')
        }
      },{
        skin: "no",
        text: "否"
      }]
    });
  })
})