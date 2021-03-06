import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { t } from 'i18next';
import { flatMap, map } from 'lodash';
import PrivateLayout from '../../layout/PrivateLayout';
import NotFoundPage from '../../containers/404Page';
import Home from '../../pages/Dashboard';
import Users from '../../pages/Users';
import UsersCreate from '../../pages/Users/Create';
import UsersEdit from '../../pages/Users/Edit';
import Posts from '../../pages/Posts';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
    title: t('dashboard.title'),
  },
  {
    path: '/users',
    routes: [
      {
        path: '/',
        component: Users,
      },
      {
        path: '/create',
        component: UsersCreate,
      },
      {
        path: '/:id',
        component: UsersEdit,
      },
    ],
  },
  {
    path: '/posts',
    component: Posts,
  },
];

const PrivateRoutes = () => (
  <PrivateLayout>
    <Switch>
      {map(
        flatMap(routes, route => {
          if (route.routes) {
            return map(route.routes, subRoute => ({
              ...subRoute,
              path: route.path + subRoute.path,
              exact: subRoute.path === '/',
            }));
          }
          return route;
        }),
        route => (
          <Route {...route} key={route.path} />
        )
      )}
      <Route component={NotFoundPage} />
    </Switch>
  </PrivateLayout>
);

PrivateRoutes.propTypes = {};

export default PrivateRoutes;
