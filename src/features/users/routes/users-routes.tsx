import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const UsersPage = lazy(() => import('../views/users-page/users-page'));
const UserDetailPage = lazy(() => import('../views/users-page/users-page'));
const UserCreationPage = lazy(() => import('../views/user-creation-page/user-creation-page'));

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
