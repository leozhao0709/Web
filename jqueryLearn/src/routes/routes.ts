// tslint:disable: no-var-requires
const accordion = require('../components/accordion');
const slidePanel = require('../components/slidePanel');
const newsTicker = require('../components/newsTicker');

export const routes = [
  {
    path: '/',
    redirectTo: '/accordion'
  },
  { path: '/accordion', navName: 'accordion', content: accordion },
  { path: '/slide_panel', navName: 'slide panel', content: slidePanel },
  { path: '/news_ticker', navName: 'news ticker', content: newsTicker }
];
