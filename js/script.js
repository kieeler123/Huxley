$(function(){
  var docWidth =  $(document).width();
  function widthCalc(){
    $('html').css("font-size",docWidth/100);
  }
  widthCalc();
  $(window).resize(function(){
    docWidth =  $(this).width();
    widthCalc();
  })
})
