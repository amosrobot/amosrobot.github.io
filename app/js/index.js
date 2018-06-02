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
  
});
