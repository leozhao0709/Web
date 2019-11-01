$(document).ready(() => {
  let pause = false;
  const interval = setInterval(() => {
    if (!$('#newsTicker').get(0)) {
      clearInterval(interval);
    }
    if (!pause) {
      $('#newsTicker li:first').slideUp(function() {
        $(this)
          .appendTo('#newsTicker ul')
          .slideDown();
      });
    }
  }, 2000);

  $('#newsTicker')
    .on('mouseenter', () => (pause = true))
    .on('mouseleave', () => (pause = false));
});
