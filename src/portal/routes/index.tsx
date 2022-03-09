import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PortalLayout = lazy(() => import('../layout/PortalLayout/PortalLayout'));
const UsersPage = lazy(() => import('../users/views/UsersPage/UsersPage'));
const UserDetailPage = lazy(() => import('../users/views/UsersPage/UsersPage'));
const UserCreationPage = lazy(() => import('../users/views/UserCreationPage/UserCreationPage'));

export const PortalRoutes: Array<RouteObject> = [
  {
    path: '/',
    element: <PortalLayout />,
    children: [
      {
        path: 'users',
        element: <UsersPage />,
      },
      {
        path: 'users/create',
        element: <UserCreationPage />,
      },
      {
        path: 'users/:id',
        element: <UserDetailPage />,
      },
    ],
  },
];
