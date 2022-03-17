import { RouteObject } from 'react-router-dom';

import DashboardPage from '../views/DashboardPage/DashboardPage';

const dashboardRoutes: Array<RouteObject> = [
  {
    path: 'dashboard',
    element: <DashboardPage />,
  },
];

export default dashboardRoutes;
