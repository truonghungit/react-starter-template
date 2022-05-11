import { RouteObject } from 'react-router-dom';

import authRoutes from '../features/auth/routes';
import dashboardRoutes from '../features/dashboard/routes';
import homeRoutes from '../features/home/routes';
import usersRoutes from '../features/users/routes';
import MinimalLayout from '../layout/minimal-layout/minimal-layout';
import PortalLayout from '../layout/portal-layout/portal-layout';

const appRoutes: Array<RouteObject> = [
  ...homeRoutes,
  {
    path: '/',
    element: <MinimalLayout />,
    children: [...authRoutes],
  },
  {
    path: '/',
    element: <PortalLayout />,
    children: [...dashboardRoutes, ...usersRoutes],
  },
];

export default appRoutes;
