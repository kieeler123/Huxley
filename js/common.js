$(function(){
  var timer;
  $(".container").fadeIn(2000);
  if(matchMedia("screen and (max-width:1168px)").matches){
    $(".menuIcon").click(function(){
      $(".mainMenu").toggle(function(){
        if($(".mainMenu").css("right")=="-5%"){
          $(".mainMenu").animate({right:"-200%"},"1000","swing");
        }else{
          $(".mainMenu").animate({right:"-5%"},"1000","swing");
        }
      })
    })
    var wHeight = $(window).height();
    var thisScrollTop = $(this).scrollTop();
    $("section").each(function(){
      var thisOffset = $(this).offset();
      if( thisOffset.top <= thisScrollTop && thisScrollTop <= thisOffset.top + wHeight ){
        $(this).addClass("secleft");
      }else{
        $(this).removeClass("secleft");
      }
      if( thisOffset.top <= thisScrollTop && thisScrollTop <= thisOffset.top + wHeight ){
        $(this).addClass("sectop");
      }else{
        $(this).removeClass("sectop");
      }
    })
  }
  var res = 0;
  resizeFn();
  function resizeFn(){
    res = $(window).innerWidth();
    $(".wrap_bg li").css("width",res+20);
  }
  $(window).resize(function(){
    resizeFn();
  })
  timer = setInterval(function(){
    btn2();
  },5000);
  $(".btn, .sect").mouseenter(function(){
    clearInterval(timer);
  }).mouseout(function(){
    timer = setInterval(function(){
      btn2();
    },5000);
  }).click(function(){
    clearInterval(timer);
  })
  // $(".wrap_bg img").mousemove(function(e){
  //   var xC = e.clientX;
  //   var yC = e.clientY;
  //   var xO = e.offsetX;
  //   var yO = e.offsetY;
  //   console.log(xC,yC,xO,yO);
  // })
  $(".top").mouseenter(function(){
    $(".subMenu>li").animate({height:"40px"});
    $(".top").addClass("on");
  }).mouseleave(function(){
    $(".subMenu>li").animate({height:"0"});
    $(".top").removeClass("on");
  })
  $(".subMenu>li").mouseenter(function(){
    $(this).addClass("on");
  }).mouseleave(function(){
    $(this).removeClass("on");
  })
  $(".mainmenuBottom li:nth-of-type(6) a").click(function(){
    $(this).prepend("<input type = 'text' placeholder='please text'>");
    $("input").css("position","absolute");
    $("input").css("top","40px");
    $("input").css("right","0px");
    console.log($(".mainmenuBottom li a").children("input"));
  }).dblclick(function(){
  $("input").remove();
  })
  var wid = $(".wrap_bg_up").width();
  var mar = $(".wrap_bg_up").css("margin-left");
  $(".wrap_bg").css("margin-left",parseInt(mar)-wid-20+"px");
  $(".sect").click(function(){
    clearInterval(timer);
    if($(this).index() == 0){
      if($(".wrap_bg li").attr("class") == "two"){
        btn1();
      }
      else if($(".wrap_bg li").attr("class") == "three"){
        btn1()*btn1();
      }
    }
    else if($(this).index() == 1){
      if($(".wrap_bg li").attr("class") == "one"){
        btn2();
      }
      else if($(".wrap_bg li").attr("class") == "three"){
        btn1();
      }
    }
    else if($(this).index() == 2){
      if($(".wrap_bg li").attr("class") == "one"){
        btn2()*btn2();
      }
      else if($(".wrap_bg li").attr("class") == "two"){
        btn2();
      }
    }
  })
  // $(this).addClass("once");
  //     $(this).prev().removeClass("once");
  //     $(this).next().removeClass("once");
  //     $(this).prev().prev().removeClass("once");
  //     $(this).next().next().removeClass("once");
  // $(".bottom_button .sect:nth-of-type(1)").click(function(){
  //   $(this).addClass("once");
  //   $(".bottom_button .sect:nth-of-type(2)").removeClass("once");
  //   $(".bottom_button .sect:nth-of-type(3)").removeClass("once");
  //   if($(".wrap_bg li").attr("class")=="two"){
  //     btn1();
  //   }else if($(".wrap_bg li").attr("class")=="three"){
  //     btn1()*btn1();
  //   }
  // })
  // $(".bottom_button .sect:nth-of-type(2)").click(function(){
  //   $(".bottom_button .sect:nth-of-type(1)").removeClass("once");
  //   $(this).addClass("once");
  //   $(".bottom_button .sect:nth-of-type(3)").removeClass("once");
  //   if($(".wrap_bg li").attr("class")=="one"){
  //     btn2();
  //   }else if($(".wrap_bg li").attr("class")=="three"){
  //     btn1();
  //   }
  // })
  // $(".bottom_button .sect:nth-of-type(3)").click(function(){
  //   $(".bottom_button .sect:nth-of-type(1)").removeClass("once");
  //   $(".bottom_button .sect:nth-of-type(2)").removeClass("once");
  //   $(this).addClass("once");
  //   if($(".wrap_bg li").attr("class")=="one"){
  //     btn2()*btn2();
  //   }else if($(".wrap_bg li").attr("class")=="two"){
  //     btn2();
  //   }
  // })
  if($(".wrap_bg li").attr("class")=="one"){
    $(".bottom_button .sect:nth-of-type(1)").addClass("once");
    $(".bottom_button .sect:nth-of-type(2)").removeClass("once");
    $(".bottom_button .sect:nth-of-type(3)").removeClass("once");
  }else if($(".wrap_bg li").attr("class")=="two"){
    $(".bottom_button .sect:nth-of-type(1)").removeClass("once");
    $(".bottom_button .sect:nth-of-type(2)").addClass("once");
    $(".bottom_button .sect:nth-of-type(3)").removeClass("once");
  }else if($(".wrap_bg li").attr("class")=="three"){
    $(".bottom_button .sect:nth-of-type(1)").removeClass("once");
    $(".bottom_button .sect:nth-of-type(2)").removeClass("once");
    $(".bottom_button .sect:nth-of-type(3)").addClass("once");
  }
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
    var wHeight = $(window).height();
    var thisScrollTop = $(this).scrollTop();
    $("section").each(function(){
      var thisOffset = $(this).offset();
      if( thisOffset.top <= thisScrollTop+1000 && thisScrollTop <= thisOffset.top + wHeight ){
        $(this).addClass("secleft");
        $(this).addClass("sectop");
      }else{
        $(this).removeClass("secleft");
        $(this).removeClass("sectop");
      }
    })
  //  console.log($(document).scrollTop(),$(".sec1News").offset().top);
  // $(".sec4Img").mouseenter(function(){
  //   $(this).addClass("sca");
  // }).mouseleave(function(){
  //   $(this).removeClass("sca");
  // })
})
  function goTop(){
    $('html, body').animate({scrollTop:0},1000);
  }
  function btn1(){
    $(".btn").hide();
    wid = $(".wrap_bg_up").width();
    mar = $(".wrap_bg_up").css("margin-left");
    $(".wrap_bg_up").animate({marginLeft:parseInt(mar)+wid+"px"},"slow","swing",function(){
      console.log(parseInt(mar)-wid);
      $(".wrap_bg_up").css("margin-left","0px");
      $(".wrap_bg_up .wrap_bg li:last").prependTo(".wrap_bg");
      $(".btn").show();
      if($(".wrap_bg li").attr("class")=="one"){
        $(".bottom_button .sect:nth-of-type(1)").addClass("once");
        $(".bottom_button .sect:nth-of-type(2)").removeClass("once");
        $(".bottom_button .sect:nth-of-type(3)").removeClass("once");
      }else if($(".wrap_bg li").attr("class")=="two"){
        $(".bottom_button .sect:nth-of-type(1)").removeClass("once");
        $(".bottom_button .sect:nth-of-type(2)").addClass("once");
        $(".bottom_button .sect:nth-of-type(3)").removeClass("once");
      }else if($(".wrap_bg li").attr("class")=="three"){
        $(".bottom_button .sect:nth-of-type(1)").removeClass("once");
        $(".bottom_button .sect:nth-of-type(2)").removeClass("once");
        $(".bottom_button .sect:nth-of-type(3)").addClass("once");
      }
    })
  }
  function btn2(){
    $(".btn").hide();
    wid = $(".wrap_bg_up").width();
    mar = $(".wrap_bg_up").css("margin-left");
    $(".wrap_bg_up").animate({marginLeft:parseInt(mar)-wid+"px"},"slow","swing",function(){
      console.log(parseInt(mar)-wid);
      $(".wrap_bg_up").css("margin-left","0px");
      $(".wrap_bg_up .wrap_bg li:first").appendTo(".wrap_bg");
      $(".btn").show();
      if($(".wrap_bg li").attr("class")=="one"){
        $(".bottom_button .sect:nth-of-type(1)").addClass("once");
        $(".bottom_button .sect:nth-of-type(2)").removeClass("once");
        $(".bottom_button .sect:nth-of-type(3)").removeClass("once");
      }else if($(".wrap_bg li").attr("class")=="two"){
        $(".bottom_button .sect:nth-of-type(1)").removeClass("once");
        $(".bottom_button .sect:nth-of-type(2)").addClass("once");
        $(".bottom_button .sect:nth-of-type(3)").removeClass("once");
      }else if($(".wrap_bg li").attr("class")=="three"){
        $(".bottom_button .sect:nth-of-type(1)").removeClass("once");
        $(".bottom_button .sect:nth-of-type(2)").removeClass("once");
        $(".bottom_button .sect:nth-of-type(3)").addClass("once");
      }
    })
  }