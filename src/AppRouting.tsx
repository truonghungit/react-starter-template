import { lazy, Suspense } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';

import { AuthRoutes } from './auth/routes';
import { PortalRoutes } from './portal/routes';

const PageLoader = () => {
  return <div>Loading...</div>;
};

const Home = lazy(() => import('./home/views/Home/Home'));

export default function AppRouting() {
  const routes = useRoutes([
    {
      path: '',
      element: <Home />,
    },
    ...AuthRoutes,
    ...PortalRoutes,
  ]);

  return <Suspense fallback={<PageLoader />}>{routes}</Suspense>;
}
