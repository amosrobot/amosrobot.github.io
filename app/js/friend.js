$(".right").click(function() {
  if ($(this).attr("index") == "0") {
    // 没开启
    dialogView.confirm({
      message: "是否消耗100张房卡开通好友管理功能",
      buttons: [
        {
          skin: "yes",
          text: "是",
          callback: function() {
            $('.ball').animate({'left':'40px'},function(){
              $('.right').css({'background':'url("../image/openhomeend.png") no-repeat','background-size': '80px 40px'});
              $('.ball').hide();
            });
            $(".right").attr('index','1');
            $('.con').css({'display':'-webkit-box'});
          }
        },
        {
          skin: "no",
          text: "否"
        }
      ]
    });
  }else if($(this).attr("index") == "1"){
    dialogView.confirm({
      message: "是否关闭好友管理功能",
      buttons: [
        {
          skin: "yes",
          text: "是",
          callback: function() {
            $('.ball').show();
            $('.right').css({'background':'url("../image/solid4.png") no-repeat','background-size': '80px 40px'});
            $('.ball').animate({'left':'0px'});
            $(".right").attr('index','0');
            $('.con').css({'display':'none'});
          }
        },
        {
          skin: "no",
          text: "否"
        }
      ]
    });
  }
});
