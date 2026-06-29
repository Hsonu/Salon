// ============================================
// Privacy Policy Page Component — Sonu Bin Salon
// ============================================

import { motion } from 'framer-motion';
import PageTransition from '@components/PageTransition';

const PrivacyPolicy = () => {
  return (
    <PageTransition>
      <div className="relative pt-32 pb-16 bg-[#111111] text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #C89B3C 0%, transparent 60%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#C89B3C] text-xs tracking-[0.35em] uppercase mb-4">Legal & Privacy</p>
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-white mb-6">
            Privacy <span className="text-primary-gradient">Policy</span>
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
              <h2 className="font-display text-2xl font-bold text-[#111111] mb-4">1. Information We Collect</h2>
              <p className="mb-4">
                At Sonu Bin Salon, we value your privacy. We collect personal information that you provide directly to us when booking appointments, submitting job applications, or filling out contact forms. This information may include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, phone number, and email address.</li>
                <li>Preferred service, booking dates, and styling preferences.</li>
                <li>Resume, portfolio links, and career history (for job applicants).</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-[#111111] mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">
                We use the information collected from you to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Schedule and manage your appointments.</li>
                <li>Send booking confirmations, updates, and rescheduling alerts via WhatsApp or email.</li>
                <li>Evaluate candidate applications for career openings.</li>
                <li>Respond to feedback, questions, or support inquiries.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-[#111111] mb-4">3. Data Security & Retention</h2>
              <p>
                We execute state-of-the-art security measures to safeguard your personal details against unauthorized access, alteration, or distribution. Your data is retained only as long as necessary to provide styling services or fulfill administrative requirements.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-[#111111] mb-4">4. Sharing Information</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share details only with reliable software services that operate our online reservation systems, under strict confidentiality terms.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-[#111111] mb-4">5. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please write to us at <a href="mailto:privacy@sonubinsalon.in" className="text-[#C89B3C] font-semibold">privacy@sonubinsalon.in</a> or visit our salon at SEEPZ Gate No.1, Andheri East, Mumbai.
              </p>
            </div>

          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default PrivacyPolicy;
