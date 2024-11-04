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