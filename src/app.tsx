import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import appRoutes from './routes';
import { CircularLoadingIndicator } from './ui/loading-indicator';

export default function App() {
  const routes = useRoutes(appRoutes);

  return (
    <>
      <Suspense fallback={<CircularLoadingIndicator />}>{routes}</Suspense>
    </>
  );
}
