$(function(){
  // 메뉴 열기 버튼 클릭
  $(".menuOpen").click(function(){
    $(".menuOpen").css('display', 'none');
    $("#header .nav").animate({
      left: '0'
    }, 200);
  });

  $('#header .nav>ul>li').mouseover(function(){
    $(this).find('ul').stop().slideDown('slow')
  })
  $('#header .nav>ul>li').mouseout(function(){
    $(this).find('ul').stop().slideUp('slow')
  })
  // 메뉴 외부 클릭 시 메뉴 닫기
  $(document).click(function(event) {
    if (!$(event.target).closest('#header .nav, .menuOpen').length) {
      // 메뉴와 버튼을 제외한 나머지 클릭 시 메뉴 닫기
      $("#header .nav").animate({
        left: '-400px'
      }, 'fast');

      // 메뉴 닫은 후 1초 후에 버튼 보이기
      setTimeout(function() {
        $(".menuOpen").fadeIn(100); 
      }, 500); 
    }
  });

  setInterval(function(){
    $('#slide ul').animate({
      left : '-=' + 1920
    },'slow',function(){
      $('#slide ul li').first().appendTo('#slide ul')
      $('#slide ul').css('left',0)
    })
  },5000)

  $(window).on("scroll", function() {
    var scrollHeight = $(this).scrollTop(); 
    if (scrollHeight > 1100) {
      $("#header .logo").addClass("scrolled");
    } else {
      $("#header .logo").removeClass("scrolled");
    }
  });

})