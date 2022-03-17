import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const UsersPage = lazy(() => import('../views/UsersPage/UsersPage'));
const UserDetailPage = lazy(() => import('../views/UsersPage/UsersPage'));
const UserCreationPage = lazy(() => import('../views/UserCreationPage/UserCreationPage'));

const usersRoutes: Array<RouteObject> = [
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
];

export default usersRoutes;
