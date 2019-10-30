$(document).ready(() => {
  $('#accordion .content').hide();
  $('#accordion .header').on('click', function() {
    $(this)
      .next()
      .slideToggle(500)
      .parent()
      .siblings()
      .find('.content')
      .slideUp(500);
  });
});
