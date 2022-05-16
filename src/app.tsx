import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import { ErrorBoundary, ErrorFallback } from '@/core/error';
import { SplashScreen } from '@/core/splash-screen';

import appRoutes from './routes';

export default function App() {
  const routes = useRoutes(appRoutes);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<SplashScreen />}>{routes}</Suspense>
    </ErrorBoundary>
  );
}
