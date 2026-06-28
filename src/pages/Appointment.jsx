// ============================================
// Appointment Page — Sonu Bin Salon Gold Theme
// ============================================

import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiMapPin, FiPhone } from 'react-icons/fi';
import PageTransition from '@components/PageTransition';
import BookingForm from '@components/BookingForm';

const infoItems = [
  { icon: FiPhone, label: 'Hotline Desk', value: '+91 86036 32642' },
  { icon: FiClock, label: 'Salon Hours', value: 'Mon–Sat: 9 AM – 8 PM | Sun: 10 AM – 6 PM' },
  { icon: FiMapPin, label: 'Location', value: 'SEEPZ Gate No.1, Andheri East, Mumbai - 400096' },
  { icon: FiCalendar, label: 'Styling Reservation', value: 'Advance booking recommended 2–3 days' },
];

const Appointment = () => {
  return (
    <PageTransition>
      {/* Banner */}
      <div className="relative pt-32 pb-16 bg-[#111111] text-center overflow-hidden border-b border-[#C89B3C]/10">
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #C89B3C 0%, transparent 60%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#C89B3C] text-xs tracking-[0.35em] uppercase mb-4 font-semibold">
            Reserve Your Spot
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl font-bold text-white mb-5">
            Book an <span className="text-primary-gradient">Appointment</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-[#777777] max-w-lg mx-auto text-sm leading-relaxed font-light">
            Fill in your preferred times and service options below. Sonu Bin Salon's team will confirm your session shortly.
          </motion.p>
        </div>
      </div>

      <section className="py-20 bg-[#F8F8F8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Info Sidebar */}
            <div className="space-y-6">
              {infoItems.map((item, i) => (
                <motion.div key={item.label} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="flex gap-4 p-5 rounded-2xl bg-white border border-[#E5E5E5] shadow-sm">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-[#C89B3C]" style={{ background: 'rgba(200, 155, 60, 0.1)' }}>
                    <item.icon size={18} />
                  </div>
                  <div>
                    <p className="text-[#777777] text-[10px] uppercase tracking-wider font-semibold mb-1">{item.label}</p>
                    <p className="text-[#111111] text-xs font-semibold leading-relaxed">{item.value}</p>
                  </div>
                </motion.div>
              ))}

              {/* Note */}
              <div className="p-5 rounded-2xl border border-[#C89B3C]/35 bg-[#C89B3C]/5 shadow-sm">
                <p className="text-[#C89B3C] text-xs font-bold mb-1">💡 Important Note</p>
                <p className="text-[#333333] text-xs leading-relaxed font-light">
                  For bridal styling trials, please select the Bridal Packages option and book at least 2–3 months prior to ensure Sonu Bin or lead artists are locked.
                </p>
              </div>
            </div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="lg:col-span-2 bg-white rounded-3xl border border-[#E5E5E5] p-8 sm:p-12 shadow-sm">
              <h2 className="font-display text-2xl font-bold text-[#111111] mb-8">Appointment Details</h2>
              <BookingForm />
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Appointment;
