// ============================================
// MainLayout — Wraps Navbar + children + Footer
// ============================================

import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import ScrollToTop from '@components/ScrollToTop';
import WhatsAppButton from '@components/WhatsAppButton';
import ScrollProgress from '@components/ScrollProgress';

const MainLayout = () => {
  const location = useLocation();

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </>
  );
};

export default MainLayout;
