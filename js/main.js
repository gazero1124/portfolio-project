$(function(){
  $('.projectNav li').click(function(e) {
    e.preventDefault();
    // 클래스 on 이동
    $('.projectNav li').removeClass('on');
    $(this).addClass('on');

    // 인덱스를 기반으로 컨텐츠 표시
    var index = $(this).index();
    $('.projectWork li').removeClass('active');
    $('.projectWork li').eq(index).addClass('active');
  });
})
$(document).ready(function() {
  let currentImageIndex = -1; // 현재 보여지는 이미지의 인덱스 (-1: 아무것도 보여지지 않음)

  $('.banner a').click(function(e) {
      e.preventDefault();
      currentImageIndex = $(this).data('index') - 1;
      $('.bannerPopup ul li').hide().eq(currentImageIndex).show();
  });

  $(document).click(function(e) {
      if ($(e.target).closest('.banner').length === 0) {
          // .sns 영역이 아닌 곳을 클릭한 경우
          currentImageIndex = -1;
          $('.bannerPopup ul li').hide();
      }
  });

  // 각 이미지에 data-index 속성 부여 (수정 필요)
  $('.banner a:nth-child(1)').data('index', 1);
  $('.banner a:nth-child(2)').data('index', 2);
  $('.banner a:nth-child(3)').data('index', 3);
  $('.banner a:nth-child(4)').data('index', 4);
  // ... 이하 생략 (8번까지 반복)
});
$(document).ready(function() {
  let currentImageIndexs = -1; // 현재 보여지는 이미지의 인덱스 (-1: 아무것도 보여지지 않음)

  $('.sns a').click(function(e) {
      e.preventDefault();
      currentImageIndexs = $(this).data('index') - 1;
      $('.snsPopup ul li').hide().eq(currentImageIndexs).show();
  });

  $(document).click(function(e) {
      if ($(e.target).closest('.sns').length === 0) {
          // .sns 영역이 아닌 곳을 클릭한 경우
          currentImageIndexs = -1;
          $('.snsPopup ul li').hide();
      }
  });

  // 각 이미지에 data-index 속성 부여 (수정 필요)
  $('.sns a:nth-child(1)').data('index', 1);
  $('.sns a:nth-child(2)').data('index', 2);
  $('.sns a:nth-child(3)').data('index', 3);
  $('.sns a:nth-child(4)').data('index', 4);
  $('.sns a:nth-child(5)').data('index', 5);
  $('.sns a:nth-child(6)').data('index', 6);
  $('.sns a:nth-child(7)').data('index', 7);
  $('.sns a:nth-child(8)').data('index', 8);
  // ... 이하 생략 (8번까지 반복)
});

$(document).ready(function() {
  var text = "WELCOME TO MY PORTFOLIO!";
  var index = 0; // 현재 출력할 인덱스
  var interval = 200; // 1초 간격
  var cursorVisible = true; // 커서 깜빡임 상태

  // 타이핑 효과와 커서 깜빡임을 위한 타이머 설정
  var timer = setInterval(function() {
    // 현재까지의 텍스트 + 커서를 출력
    $('#home p').html(text.slice(0, index) + (cursorVisible ? '|' : ''));

    // 커서를 깜빡이게 하기 위해 cursorVisible 상태를 토글
    cursorVisible = !cursorVisible;

    // 다음 글자가 있을 때만 인덱스 증가
    if (index < text.length) {
      index++;
    } else {
      // 모든 글자가 출력된 후 커서가 사라지게 종료
      clearInterval(timer);
      $('#home p').html(text); // 마지막으로 커서를 제거하고 텍스트만 남김
    }
  }, interval);
});