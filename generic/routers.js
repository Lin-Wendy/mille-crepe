import {Route} from 'react-router-dom';
import reduce from 'lodash/reduce';
import forEach from 'lodash/forEach';

import {routes} from './utils/createRouteItems';

export default () => {
  const createRoute = (routeConfig, index) => (
    <Route
      path={routeConfig.path}
      exact={routeConfig.isExact}
      strict={routeConfig.isStrict}
      component={() => (<routeConfig.component />)}
      key={index}
    />
  );

  return (
    reduce(routes, (reactRoutes, currentRouteItem, index) => {
      reactRoutes.push(createRoute(currentRouteItem, index));

      if (currentRouteItem.children) {
        forEach(currentRouteItem.children, (subRoute, index) => {
          reactRoutes.push(createRoute(subRoute, index));
        });
      }

      return reactRoutes;
    }, [])
  );
};
