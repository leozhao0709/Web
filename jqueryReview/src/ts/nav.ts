import { routes } from '../routes/routes';

$(document).ready(() => {
  const ul = $('<ul/>');
  routes.forEach(route => route.navName && ul.append(`<li><a href=${route.path}>${route.navName}</a></li>`));

  $('nav')
    .append(ul)
    .on('click', 'a', function(event) {
      event.preventDefault();
      $(this)
        .parent()
        .addClass('active')
        .siblings()
        .removeClass('active');

      if ($('nav .menu').is(':visible')) {
        $(this)
          .parent()
          .parent()
          .toggle(1000);
      }

      const path = $(this).attr('href');
      const route = routes.find(r => r.path === path)!;
      const htmlFile = route.content;
      $('#app').html(htmlFile);
      // window.history.replaceState(route.navName, route.navName!, path);
    })
    .find('.menu .icon')
    .on('click', function() {
      $('nav ul').toggle(1000);
    });
});
