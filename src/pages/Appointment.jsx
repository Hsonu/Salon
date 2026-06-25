// ============================================
// Appointment Page — Light Theme
// ============================================

import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiMapPin, FiPhone } from 'react-icons/fi';
import PageTransition from '@components/PageTransition';
import BookingForm from '@components/BookingForm';

const infoItems = [
  { icon: FiPhone, label: 'Call Us', value: '+91 86036 32642' },
  { icon: FiClock, label: 'Working Hours', value: 'Mon–Sat: 9 AM–8 PM' },
  { icon: FiMapPin, label: 'Location', value: 'Mumbai SEEPZ 400096' },
  { icon: FiCalendar, label: 'Advance Booking', value: 'Recommended 2–3 days' },
];

const Appointment = () => {
  return (
    <PageTransition>
      {/* Banner */}
      <div className="relative pt-32 pb-16 bg-salon-alt text-center border-b border-salon-border">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary text-xs tracking-[0.35em] uppercase mb-4">
          Reserve Your Spot
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl font-bold text-text-primary mb-5">
          Book an{' '}
          <span className="text-primary-gradient">
            Appointment
          </span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-text-secondary max-w-lg mx-auto">
          Fill in your details below and we'll confirm your booking within hours.
        </motion.p>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Info Sidebar */}
            <div className="space-y-6">
              {infoItems.map((item, i) => (
                <motion.div key={item.label} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="flex gap-4 p-5 rounded-xl bg-salon-alt border border-salon-border shadow-sm">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'rgba(15,118,110,0.1)' }}>
                    <item.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-text-muted text-xs uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="text-text-primary text-sm font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}

              {/* Note */}
              <div className="p-5 rounded-xl border border-primary/25 bg-salon-alt shadow-sm">
                <p className="text-primary text-xs font-semibold mb-1">💡 Pro Tip</p>
                <p className="text-text-secondary text-xs leading-relaxed">
                  For bridal appointments, please book at least 2–3 months in advance to ensure availability.
                </p>
              </div>
            </div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="lg:col-span-2 bg-white rounded-2xl border border-salon-border p-8 shadow-sm">
              <h2 className="font-display text-2xl font-bold text-text-primary mb-8">Appointment Details</h2>
              <BookingForm />
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Appointment;
