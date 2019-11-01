// tslint:disable: no-var-requires
const accordion = require('../components/accordion');
const slidePanel = require('../components/slidePanel');
const newsTicker = require('../components/newsTicker');
const photoZoom = require('../components/photoZoom');
const memoryGame = require('../components/memoryGame');

export const routes = [
  {
    path: '/',
    redirectTo: '/accordion'
  },
  { path: '/accordion', navName: 'accordion', content: accordion },
  { path: '/slide_panel', navName: 'slide panel', content: slidePanel },
  { path: '/news_ticker', navName: 'news ticker', content: newsTicker },
  { path: '/photo_zoom', navName: 'photo zoom', content: photoZoom },
  { path: '/memory_game', navName: 'memory game', content: memoryGame }
];
