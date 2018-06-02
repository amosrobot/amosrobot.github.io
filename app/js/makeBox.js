$('#inputChange').keyup(function(){
  console.log($(this).val())
  if($(this).val() == ""){
    $('.numLen span').html('0')
  }else{
    $('.numLen span').html($(this).val())
  }
})