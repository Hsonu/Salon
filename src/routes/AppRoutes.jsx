// ============================================
// AppRoutes — React Router DOM v6 Routes
// ============================================

import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '@layouts/MainLayout';

// Lazy-loaded pages for code splitting
const Home = lazy(() => import('@pages/Home'));
const About = lazy(() => import('@pages/About'));
const Services = lazy(() => import('@pages/Services'));
const Pricing = lazy(() => import('@pages/Pricing'));
const Gallery = lazy(() => import('@pages/Gallery'));
const Team = lazy(() => import('@pages/Team'));
const Appointment = lazy(() => import('@pages/Appointment'));
const Contact = lazy(() => import('@pages/Contact'));
const NotFound = lazy(() => import('@pages/NotFound'));

// Minimal fallback loader
const PageLoader = () => (
  <div className="min-h-screen bg-white flex items-center justify-center">
    <div className="w-10 h-10 rounded-full border-t-2 border-primary animate-spin" />
  </div>
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/team" element={<Team />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
