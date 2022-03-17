import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Home = lazy(() => import('../views/Home/Home'));

const homeRoutes: Array<RouteObject> = [
  {
    path: '',
    element: <Home />,
  },
];

export default homeRoutes;
