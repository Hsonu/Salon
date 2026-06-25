// ============================================
// App.jsx — Root Application Component
// ============================================

import { BrowserRouter } from 'react-router-dom';
import { LoaderProvider } from '@context/LoaderContext';
import Loader from '@components/Loader';
import AppRoutes from '@routes/AppRoutes';

const App = () => {
  return (
    <BrowserRouter>
      <LoaderProvider>
        {/* Luxury Intro Loader */}
        <Loader />
        {/* Application Routes */}
        <AppRoutes />
      </LoaderProvider>
    </BrowserRouter>
  );
};

export default App;
