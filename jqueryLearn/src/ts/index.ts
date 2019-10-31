import { routes } from '../routes/routes';
import './nav';

const loadInitialData = () => {
  const currentPath = window.location.pathname;

  let route = routes.find(r => r.path === currentPath);

  if (route.redirectTo) {
    const redirectRoute = routes.find(r => r.path === route.redirectTo);
    if (redirectRoute) {
      window.history.replaceState(null, route.navName, redirectRoute.path);
      route = redirectRoute;
    } else {
      throw new Error(`Can't find redirect path: ${redirectRoute.redirectTo}`);
    }
  } else if (!route.path) {
    throw new Error(`Can't find path: ${currentPath}`);
  }

  if (route.content) {
    $('#app').html(route.content);

    $(`nav a[href='${route.path}']`)
      .parent()
      .addClass('active');
  }
};

$(document).ready(() => {
  loadInitialData();
});
