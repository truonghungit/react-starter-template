import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SignInPage = lazy(() => import('../views/SignInPage/SignInPage'));
const SignUpPage = lazy(() => import('../views/SignUpPage/SignUpPage'));

const authRoutes: Array<RouteObject> = [
  {
    path: 'sign-in',
    element: <SignInPage />,
  },
  {
    path: 'sign-up',
    element: <SignUpPage />,
  },
];

export default authRoutes;
