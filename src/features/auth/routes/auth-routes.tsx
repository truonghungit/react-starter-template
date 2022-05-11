import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SignInPage = lazy(() => import('../views/sign-in-page/sign-in-page'));
const SignUpPage = lazy(() => import('../views/sign-up-page/sign-up-page'));

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
