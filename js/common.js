$(function(){
  // $(".wrap_bg img").mousemove(function(e){
  //   var xC = e.clientX;
  //   var yC = e.clientY;
  //   var xO = e.offsetX;
  //   var yO = e.offsetY;
  //   console.log(xC,yC,xO,yO);
  // })
  $(".wrap_bg_all").css("margin-left","calc(-100% - 20px)");
  $(".mainmenuBottom").mouseenter(function(){
    $(".subMenu>li").animate({height:"40px"});
  }).mouseleave(function(){
    $(".subMenu>li").animate({height:"0"});
  })
  $(".mainmenuBottom>li").mouseenter(function(){
    $(".top").addClass("on");
  }).mouseleave(function(){
    $(".top").removeClass("on");
  })
  $(".subMenu>li").mouseover(function(){
    $(this).addClass("on");
  }).mouseleave(function(){
    $(this).removeClass("on");
  })
  $(".mainmenuBottom li:nth-of-type(6) a").click(function(){
    $(this).prepend("<input type = 'text' placeholder='please text'>");
    $("input").css("position","absolute");
    $("input").css("top","100px");
    console.log($(".mainmenuBottom li a").children("input"));
  }).dblclick(function(){
  $("input").remove();
  })
  $(".bottom_button .sect:nth-of-type(1)").click(function(){
    $(this).addClass("once");
    $(".bottom_button .sect:nth-of-type(2)").removeClass("once");
    $(".bottom_button .sect:nth-of-type(3)").removeClass("once");
    if($(".wrap_bg li").attr("class")=="two"){
      btn1();
    }else if($(".wrap_bg li").attr("class")=="three"){
      btn1()*btn1();
    }
  })
  $(".bottom_button .sect:nth-of-type(2)").click(function(){
    $(".bottom_button .sect:nth-of-type(1)").removeClass("once");
    $(this).addClass("once");
    $(".bottom_button .sect:nth-of-type(3)").removeClass("once");
    if($(".wrap_bg li").attr("class")=="one"){
      btn2();
    }else if($(".wrap_bg li").attr("class")=="three"){
      btn1();
    }
  })
  $(".bottom_button .sect:nth-of-type(3)").click(function(){
    $(".bottom_button .sect:nth-of-type(1)").removeClass("once");
    $(".bottom_button .sect:nth-of-type(2)").removeClass("once");
    $(this).addClass("once");
    if($(".wrap_bg li").attr("class")=="one"){
      btn2()*btn2();
    }else if($(".wrap_bg li").attr("class")=="two"){
      btn2();
    }
  })
 })
  $(window).scroll(function(){
    if($(this).scrollTop()>0){
      $(".top").css("background-color","white");
      $("a").css("color","black");
      $(".top").css("transition","1s");
      $("a").css("transition","1s");
    }else{
      $(".top").css("background-color","transparent");
      $("a").css("color","dimgray");
    }
  })
  function goTop(){
    $('html, body').animate({scrollTop:0},1000);
  }
  function btn1(){
    $(".btn").hide();
    wid = $(".wrap_bg_all").width();
    mar = $(".wrap_bg_all").css("margin-left");
    $(".wrap_bg_all").animate({marginLeft:parseInt(mar)+wid+"px"},"slow","swing",function(){
      console.log(parseInt(mar)-wid);
      $(".wrap_bg_all").css("margin-left","-"+wid+"px");
      $(".wrap_bg:last").prependTo(".wrap_bg_up");
      $(".btn").show();
    })
  }
  function btn2(){
    $(".btn").hide();
    wid = $(".wrap_bg_all").width();
    mar = $(".wrap_bg_all").css("margin-left");
    $(".wrap_bg_all").animate({marginLeft:parseInt(mar)-wid+"px"},"slow","swing",function(){
      console.log(parseInt(mar)-wid);
      $(".wrap_bg_all").css("margin-left","-"+wid+"px");
      $(".wrap_bg:first").appendTo(".wrap_bg_up");
      $(".btn").show();
    })
  }