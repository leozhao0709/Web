import React from 'react';
import { RouteObject } from 'react-router-dom';
import BlurLoading from './container/blurLoading';
import ExpandingCards from './container/expandingCards';
import FormInputWave from './container/formInputWave';
import HiddenSearch from './container/hiddenSearch';
import IncrementCounter from './container/incrementCounter';
import KeyCodes from './container/keyCodes';
import ProgressSteps from './container/progressSteps';
import RotatingNav from './container/rotatingNav';
import ScrollAnimation from './container/scrollAnimation';
import SplitLandingPage from './container/splitLandingPage';

const routes: RouteObject[] = [
  { path: '/expanding-cards', element: <ExpandingCards /> },
  { path: '/progress-steps', element: <ProgressSteps /> },
  { path: '/rotating-nav', element: <RotatingNav /> },
  { path: '/hidden-search', element: <HiddenSearch /> },
  { path: '/blur-loading', element: <BlurLoading /> },
  { path: '/scroll-animation', element: <ScrollAnimation /> },
  { path: '/split-landing-page', element: <SplitLandingPage /> },
  { path: '/form-input-wave', element: <FormInputWave /> },
  { path: '/key-codes', element: <KeyCodes /> },
  { path: '/increment-counter', element: <IncrementCounter /> },
];

export default routes;
