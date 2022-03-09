import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import MinimalLayout from '@/layout/MinimalLayout/MinimalLayout';

const SignInPage = lazy(() => import('../views/SignInPage/SignInPage'));
const SignUpPage = lazy(() => import('../views/SignUpPage/SignUpPage'));

export const AuthRoutes: Array<RouteObject> = [
  {
    path: '/',
    element: <MinimalLayout />,
    children: [
      {
        path: 'sign-in',
        element: <SignInPage />,
      },
      {
        path: 'sign-up',
        element: <SignUpPage />,
      },
    ],
  },
];
