import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import AuthLayout from '../layout/AuthLayout/AuthLayout';

const SigninPage = lazy(() => import('../views/Signin/Signin'));
const SignupPage = lazy(() => import('../views/Signup/Signup'));

export const AuthRoutes: Array<RouteObject> = [
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: 'signin',
        element: <SigninPage />,
      },
      {
        path: 'signup',
        element: <SignupPage />,
      },
    ],
  },
];
