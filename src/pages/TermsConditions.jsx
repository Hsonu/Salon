// ============================================
// Terms & Conditions Page Component — Sonu Bin Salon
// ============================================

import { motion } from 'framer-motion';
import PageTransition from '@components/PageTransition';

const TermsConditions = () => {
  return (
    <PageTransition>
      <div className="relative pt-32 pb-16 bg-[#111111] text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #C89B3C 0%, transparent 60%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#C89B3C] text-xs tracking-[0.35em] uppercase mb-4">Agreement</p>
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-white mb-6">
            Terms & <span className="text-primary-gradient">Conditions</span>
          </h1>
          <p className="text-[#777777] max-w-xl mx-auto text-xs sm:text-sm">
            Last Updated: June 28, 2026
          </p>
        </div>
      </div>

      <section className="py-20 bg-[#F8F8F8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E5E5E5] shadow-sm text-[#333333] space-y-8 font-light text-sm sm:text-base leading-relaxed">
            
            <div>
              <h2 className="font-display text-2xl font-bold text-[#111111] mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing, browsing, or using the Sonu Bin Salon website and booking platform, you agree to comply with and be bound by these Terms & Conditions. If you do not agree with any part, please refrain from using our services.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-[#111111] mb-4">2. Appointment Bookings & Lateness</h2>
              <p className="mb-4">
                We strongly recommend scheduling bookings in advance. While we accommodate walk-ins when possible, scheduled appointments receive absolute priority.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Please arrive 10 minutes prior to your booking.</li>
                <li>If you are running more than 15 minutes late, we may need to shorten your service or reschedule to protect subsequent clients' reservations.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-[#111111] mb-4">3. Health & Safety Protocol</h2>
              <p>
                Clients are required to disclose any skin conditions, allergies, or physical sensitivities prior to hair styling, spa therapies, or facial treatments. Sonu Bin Salon will not be responsible for reactions to ingredients/products that were not disclosed beforehand.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-[#111111] mb-4">4. Pricing & Payments</h2>
              <p>
                All prices are subject to change without prior notice. Individual rates vary based on hair length, density, and customized stylist requirements. We accept cash, credit cards, and UPI payments on service completion.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-[#111111] mb-4">5. Intellectual Property</h2>
              <p>
                All brand logos, text layouts, custom styling photos, and code files on this website are the intellectual property of Sonu Bin Salon and may not be reproduced without written permission.
              </p>
            </div>

          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default TermsConditions;
