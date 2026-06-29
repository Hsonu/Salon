// ============================================
// App.jsx — Root Application Component
// ============================================

import { HashRouter } from 'react-router-dom';
import { LoaderProvider } from '@context/LoaderContext';
import Loader from '@components/Loader';
import AppRoutes from '@routes/AppRoutes';

const App = () => {
  return (
    <HashRouter>
      <LoaderProvider>
        {/* Luxury Intro Loader */}
        <Loader />
        {/* Application Routes */}
        <AppRoutes />
      </LoaderProvider>
    </HashRouter>
  );
};

export default App;
