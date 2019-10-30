import { navData } from './data';

$(document).ready(() => {
  const ul = $('<ul/>');
  Object.keys(navData).forEach(key => ul.append(`<li><a href=${key}>${navData[key].name}</a></li>`));

  $('nav')
    .append(ul)
    .on('click', 'a', function(event) {
      event.preventDefault();
      $(this)
        .parent()
        .addClass('active')
        .siblings()
        .removeClass('active');

      const htmlFile = navData[$(this).attr('href')].content;
      $('#app').html(htmlFile);
    });

  $('nav ul li:first>a').click();
});
