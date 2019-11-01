$(document).ready(() => {
  const state = {
    normal: {
      opacity: '1',
      width: '100%'
    },
    zoom: {
      opacity: 0.5,
      width: '200%'
    }
  };
  $('#photoZoom .item').hover(
    function() {
      $(this)
        .find('img')
        .animate(state.normal);
    },
    function() {
      $(this)
        .find('img')
        .animate(state.zoom);
    }
  );
});
