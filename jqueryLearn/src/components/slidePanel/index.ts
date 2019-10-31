$(document).ready(() => {
  $('.btn').on('click', function() {
    $('.panel>.content').slideToggle(1500, () => {
      $(this)
        .find('i')
        .toggleClass('icon-arrow-up2 icon-arrow-down2');
    });
  });
});
