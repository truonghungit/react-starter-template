import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import appRoutes from './routes';
import { Loader } from './routes/loader/loader';

export default function App() {
  const routes = useRoutes(appRoutes);

  return (
    <>
      <Suspense fallback={<Loader />}>{routes}</Suspense>;
    </>
  );
}
