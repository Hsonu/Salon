// ============================================
// Cancellation & Refund Policy Page — Sonu Bin Salon
// ============================================

import { motion } from 'framer-motion';
import PageTransition from '@components/PageTransition';

const RefundPolicy = () => {
  return (
    <PageTransition>
      <div className="relative pt-32 pb-16 bg-[#111111] text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #C89B3C 0%, transparent 60%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#C89B3C] text-xs tracking-[0.35em] uppercase mb-4">Refunds & Cancellations</p>
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-white mb-6">
            Cancellation & <span className="text-primary-gradient">Refund Policy</span>
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
              <h2 className="font-display text-2xl font-bold text-[#111111] mb-4">1. Cancellation Policy</h2>
              <p>
                At Sonu Bin Salon, our stylists block dedicated time slots for each client. If you must cancel or reschedule your appointment, we kindly request a minimum of **24 hours notification**. This allows us the opportunity to offer that slot to other clients on our waitlist.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-[#111111] mb-4">2. Bridal & High-Value Packages</h2>
              <p>
                For high-value appointments, such as bridal makeup packages, full-day spa treatments, or group bookings, we require at least **72 hours notification** for cancellation or rescheduling. A deposit may be charged at the time of booking to secure your specialist.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-[#111111] mb-4">3. Late Cancellations & No-Shows</h2>
              <p className="mb-4">
                We understand that emergencies arise; however, repeated short-notice cancellations disrupt operations.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cancellations made less than 12 hours before the scheduled appointment may attract a partial service fee on your subsequent visit.</li>
                <li>Failing to show up for an appointment without any notification (No-Show) will require prepayment to secure any future bookings.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-[#111111] mb-4">4. Refund Policy</h2>
              <p className="mb-4">
                We want you to absolutely love your look! In the rare event that you are not satisfied with a service, please let us know:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>We do not offer direct monetary refunds for completed treatments, hair coloring, or styling services.</li>
                <li>However, we do offer complimentary corrective adjustments within 5 days of your initial appointment if there was an issue with execution.</li>
                <li>Refunds for retail products (shampoos, serums, oils) are accepted within 7 days of purchase only if the product remains unopened, in its original packaging, and with the invoice.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default RefundPolicy;
