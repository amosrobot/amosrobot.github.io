$(function () {
  $('#inputChange').keyup(function () {
    console.log($(this).val())
    if ($(this).val() == "") {
      $('.numLen span').html('0')
    } else {
      $('.numLen span').html($(this).val())
    }

  })
  api.userBaes({
    ids: 'ca3676ea661711e89774525400b4f4ae'
  }).then(function (res) {
    console.log(res)
    $('.span_one em i').html(res.actualcard||0)
  }, function (err) {
    console.log(err)
  })
  $('.btn1.btn').click(function(){
    if($('#inputChange').val() > $('.span_one em i').html()){
      alert('房卡不足');
    } 
  })
})