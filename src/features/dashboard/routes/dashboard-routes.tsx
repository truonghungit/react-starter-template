import { RouteObject } from 'react-router-dom';

import DashboardPage from '../views/dashboard-page/dashboard-page';

const dashboardRoutes: Array<RouteObject> = [
  {
    path: 'dashboard',
    element: <DashboardPage />,
  },
];

export default dashboardRoutes;
