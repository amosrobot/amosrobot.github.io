var hrefUrl = window.location.href;
var timeNum = null;
var initData = {
  userId: config.byUrl('userId'),
  roomId: +config.byUrl('roomId'),
  rule: +config.byUrl('rule'),
  playerNum: +config.byUrl('playerNum'),
  clip: +config.byUrl('clip'),
  upper: +config.byUrl('upper'),
  special: +config.byUrl('special'),
  roundNumber: +config.byUrl('roundNumber'),
  mainType: +config.byUrl('mainType')
}
function msg(m){
  dialogView.msg({
    message: m,
    showTime: 1500
  })
}
var ws = new WebSocket("ws://193.112.6.245:8082/websocket");

var agreement = {
  //创建房间
  CREATEROOMREQUEST: 1001,
  CREATEROOMRESPONSE: 2001,

  //进入房间
  INTOROOMREQUEST: 1002,
  INTOROOMRESPONSE: 2002,

  //准备
  PREPAREREQUEST: 1003,
  PREPARERESPONSE: 2003,

  //抢庄
  CHOICEMAINREQUEST: 1004,
  CHOICEMAINRESPONSE: 2004,

  //摇色子
  RANDOMDICEREQUEST: 1005,
  RANDOMDICERESPONSE: 2005,

  //下注
  CHIPINREQUEST: 1006,
  CHIPINRESPONSE: 2006,

  //开色子
  OPENDICEREQUEST: 1007,
  OPENDICERESPONSE: 2007,

  //算分
  COUNTSCORESREQUEST: 1008,
  COUNTSCORESRESPONSE: 2008,

  //游戏结束
  ENDGAMEREQUEST: 1009,
  ENDGAMERESPONSE: 2009,

  //异常
  ERRORCODE: 0000,

  //是庄
  ISMAINREQUEST: 3001,
}
var json = {
  userId: config.byUrl('userId'),
  roomId: 1,
  rule: 1,
  playerNum: 1,
  clip: 1,
  upper: 100,
  special: 1,
  roundNumber: 12,
  mainType: 1,
  messageCode: agreement.CREATEROOMREQUEST
}
ws.onopen = function (evt) {
  console.log("Connection open ...");
  ws.send(JSON.stringify(json));
};

function send() {
  return function(msg){
    switch (ws.readyState) {
      case WebSocket.CONNECTING:
        // do something
        break;
      case WebSocket.OPEN:
        ws.send(msg);
        break;
      case WebSocket.CLOSING:
        // do something
        break;
      case WebSocket.CLOSED:
        // do something
        break;
      default:
        // this never happens
        break;
    }
  };
}
ws.onmessage = function (evt) {
  try {
    var data = JSON.parse(evt.data)
  } catch (error) {
    var data = {}
  }
  switch (data.messageCode) {
    case agreement.CREATEROOMRESPONSE:
      //创建房间

      break;
    case agreement.INTOROOMRESPONSE:
      //进入房间

      break;
    case agreement.PREPARERESPONSE:
      //准备

      break;
    case agreement.CHOICEMAINRESPONSE:
      //抢庄

      break;
    case agreement.RANDOMDICERESPONSE:
      //摇色子

      break;
    case agreement.CHIPINRESPONSE:
      //下注

      break;
    case agreement.OPENDICERESPONSE:
      //开色子

      break;
    case agreement.COUNTSCORESRESPONSE:
      //算分

      break;
    case agreement.ENDGAMERESPONSE:
      //游戏结束

      break;
    case agreement.ISMAINREQUEST:
      //是庄

      break;
    case agreement.ERRORCODE:
      //异常

      break;
    default:
      //异常
      break;
  }
  console.log("Received Message: " + evt.data);
  // ws.close();
};

ws.onclose = function (evt) {
  console.log("Connection closed.");
};

$(function () {
  $('.getCart').click(function () {
    $('.gouka,.showWin').show()
  })
  $('.gouka').click(function () {
    $('.gouka,.showWin').hide()
  })
  $('.minTip').click(function () {
    $('.xieyi').show()
  })
  $('.goHome').click(function () {
    $('.joinFail').show()
  })
  $('.xieyibtn').click(function () {
    $('.xieyi').hide()
  })
  $('.ok').click(function () {
    window.location.href = "../index.html"
  })
  $('.no').click(function () {
    $('.joinFail').hide()
  })
  $('.iconPic').eq(2).click(function () {
    $('.liaotianbg,.liaotian').show()
  })
  $('.liaotianbg').click(function () {
    $('.liaotianbg,.liaotian').hide()
  })
  $('.liaotian .liaotianCon div').click(function () {
    console.log($(this).text() + '调用协议传输')
  })
  $('.iconPic').eq(1).click(function () {
    $('.jushu,.jushucon').show()
  })
  $('.jushu').click(function () {
    $('.jushu,.jushucon').hide()
  })
  $('.iconPic').eq(0).click(function () {
    $(this).toggleClass('closeSy')
  })
  $('.money div').click(function () {
    var num = $(this).attr('arg');
    $(this).toggleClass('active').siblings('div').removeClass('active')
    console.log('金钱数' + num);
    ws.send()
  })
  $('.gameKing div').eq(0).click(function () {
    console.log('摇骰子');
    ws.send()
  })
  $('.gameKing div').eq(1).click(function () {
    console.log('结束');
    ws.send()
  })
  $('.betterKing').eq(0).click(function () {
    console.log('抢庄');
    ws.send()
  })
  $('.betterKing').eq(1).click(function () {
    console.log('不抢');
    ws.send()
  })
  $('.ready').click(function () {
    console.log('开始');
    ws.send(JSON.stringify({
      userId: config.byUrl('userId'),
      messageCode: agreement.PREPAREREQUEST
    }))
    $('.ready').hide();
  })
  $('.stopSet').click(function () {
    console.log('停止下注');
    ws.send()
  })
  $('.gameIcon ul li').click(function () {
    var lem = 0;
    var len = $('.gameIcon ul li em');
    for (var i = 0; i < len.length; i++) {
      lem += (+len.eq(i).text())
    }
    if ($('.money .active').length > 0) {
      var num = (+$(this).find('em').html() || 0) + (+$('.money .active').attr('arg'));
      if (lem + (+num) > +config.byUrl('upper')) {
        dialogView.msg({
          message: '本局游戏每轮上限' + (+config.byUrl('upper')),
          showTime: 1000
        })
      } else {
        $(this).find('em').html(num)
        ws.send()
      }
    } else {
      if ((+$(this).find('em').html())) {
        $(this).find('em').html('')
      }
    }
  })
})

function addClock(curCount, callback) {
  clearInterval(timeNum)
  timeNum = setInterval(function () {
    if (curCount == 0) {
      clearInterval(timeNum); //停止计时器 
      callback && callback()
    } else {
      curCount--;
      $('.timelock').html(curCount);
    }
  }, 1000);
}
// addClock(10,function(){console.log('122')})