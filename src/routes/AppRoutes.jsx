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

// New pages for luxury upgrade
const FAQPage = lazy(() => import('@pages/FAQPage'));
const Blog = lazy(() => import('@pages/Blog'));
const Careers = lazy(() => import('@pages/Careers'));
const PrivacyPolicy = lazy(() => import('@pages/PrivacyPolicy'));
const TermsConditions = lazy(() => import('@pages/TermsConditions'));
const RefundPolicy = lazy(() => import('@pages/RefundPolicy'));
const TestimonialsPage = lazy(() => import('@pages/TestimonialsPage'));

// Minimal fallback loader
const PageLoader = () => (
  <div className="min-h-screen bg-[#111111] flex items-center justify-center">
    <div className="w-10 h-10 rounded-full border-t-2 border-[#C89B3C] animate-spin" />
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
          
          {/* New Page Routes */}
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />

          {/* Wildcard 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
