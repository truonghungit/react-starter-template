import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Home = lazy(() => import('../views/home/home'));

const homeRoutes: Array<RouteObject> = [
  {
    path: '',
    index: true,
    element: <Home />,
  },
];

export default homeRoutes;
