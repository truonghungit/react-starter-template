import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import authRoutes from './features/auth/routes';
import dashboardRoutes from './features/dashboard/routes';
import homeRoutes from './features/home/routes';
import usersRoutes from './features/users/routes';
import MinimalLayout from './layout/MinimalLayout/MinimalLayout';
import PortalLayout from './layout/PortalLayout/PortalLayout';

const PageLoader = () => {
  return <div>Loading...</div>;
};

export default function AppRouting() {
  const routes = useRoutes([
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
  ]);

  return <Suspense fallback={<PageLoader />}>{routes}</Suspense>;
}
