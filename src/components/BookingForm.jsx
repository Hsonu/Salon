// ============================================
// BookingForm Component — Light Theme
// ============================================

import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiUser, FiPhone, FiMail, FiCalendar, FiClock, FiMessageSquare, FiCheck } from 'react-icons/fi';
import { services } from '@data/services';
import { team } from '@data/team';

const timeSlots = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
  '01:00 PM', '02:00 PM', '02:30 PM', '03:00 PM',
  '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM',
  '05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM',
];const inputBase = (hasIcon, hasError) =>
  `w-full bg-salon-input border ${
    hasError ? 'border-red-400' : 'border-salon-border focus:border-primary'
  } rounded-xl text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 ${
    hasIcon ? 'pl-11 pr-4 py-3.5' : 'px-4 py-3.5'
  }`;

const InputWrapper = ({ children, label, error, icon: Icon }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-text-secondary text-xs font-medium tracking-wider uppercase">{label}</label>
    <div className="relative">
      {Icon && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary">
          <Icon size={15} />
        </div>
      )}
      {children}
    </div>
    {error && <span className="text-red-500 text-xs mt-0.5">{error}</span>}
  </div>
);

const BookingForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    console.log('Booking data:', data);
    setLoading(false);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-primary/30 bg-primary-gradient">
          <FiCheck size={36} className="text-white" strokeWidth={2.5} />
        </div>
        <h3 className="font-display text-3xl font-bold text-text-primary mb-3">Appointment Booked!</h3>
        <p className="text-text-secondary mb-8 max-w-md">
          Thank you for choosing SJ Salon. We'll confirm your appointment shortly via WhatsApp or email.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="px-8 py-3 rounded-full border border-primary text-primary text-sm font-medium hover:bg-primary hover:text-white transition-all duration-300"
        >
          Book Another
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      {/* Row 1: Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <InputWrapper label="Full Name" error={errors.name?.message} icon={FiUser}>
          <input
            type="text"
            placeholder="Your full name"
            className={inputBase(true, !!errors.name)}
            {...register('name', { required: 'Name is required', minLength: { value: 2, message: 'At least 2 characters' } })}
          />
        </InputWrapper>
        <InputWrapper label="Phone Number" error={errors.phone?.message} icon={FiPhone}>
          <input
            type="tel"
            placeholder="+91 98765 43210"
            className={inputBase(true, !!errors.phone)}
            {...register('phone', { required: 'Phone is required', pattern: { value: /^[6-9]\d{9}$/, message: 'Valid 10-digit mobile number' } })}
          />
        </InputWrapper>
      </div>

      {/* Email */}
      <InputWrapper label="Email Address" error={errors.email?.message} icon={FiMail}>
        <input
          type="email"
          placeholder="your@email.com"
          className={inputBase(true, !!errors.email)}
          {...register('email', { required: 'Email is required', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email' } })}
        />
      </InputWrapper>

      {/* Service + Stylist */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <InputWrapper label="Select Service" error={errors.service?.message}>
          <select className={`${inputBase(false, !!errors.service)} appearance-none cursor-pointer`} {...register('service', { required: 'Please select a service' })} defaultValue="">
            <option value="" disabled>Choose a service...</option>
            {services.map((s) => <option key={s.id} value={s.title}>{s.title}</option>)}
          </select>
        </InputWrapper>
        <InputWrapper label="Preferred Stylist" error={errors.stylist?.message}>
          <select className={`${inputBase(false, !!errors.stylist)} appearance-none cursor-pointer`} {...register('stylist')} defaultValue="">
            <option value="" disabled>Select stylist (optional)</option>
            <option value="any">No Preference</option>
            {team.map((t) => <option key={t.id} value={t.name}>{t.name}</option>)}
          </select>
        </InputWrapper>
      </div>

      {/* Date + Time */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <InputWrapper label="Preferred Date" error={errors.date?.message} icon={FiCalendar}>
          <input
            type="date"
            className={inputBase(true, !!errors.date)}
            min={new Date().toISOString().split('T')[0]}
            {...register('date', { required: 'Please select a date' })}
          />
        </InputWrapper>
        <InputWrapper label="Preferred Time" error={errors.time?.message} icon={FiClock}>
          <select className={`${inputBase(false, !!errors.time)} appearance-none cursor-pointer`} {...register('time', { required: 'Please select a time' })} defaultValue="">
            <option value="" disabled>Select time slot...</option>
            {timeSlots.map((slot) => <option key={slot} value={slot}>{slot}</option>)}
          </select>
        </InputWrapper>
      </div>

      {/* Message */}
      <InputWrapper label="Additional Message" icon={FiMessageSquare}>
        <textarea
          rows={4}
          placeholder="Any special requests or notes..."
          className="w-full bg-salon-input border border-salon-border focus:border-primary rounded-xl text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 pl-11 pr-4 py-3.5 resize-none"
          {...register('message')}
        />
      </InputWrapper>

      {/* Submit */}
      <motion.button
        type="submit"
        disabled={loading}
        whileHover={{ scale: loading ? 1 : 1.01 }}
        whileTap={{ scale: loading ? 1 : 0.99 }}
        className="w-full py-4 rounded-full font-semibold text-base tracking-wider text-white transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-md shadow-primary/30 bg-primary-gradient"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Processing...
          </span>
        ) : (
          'Confirm Appointment'
        )}
      </motion.button>
    </form>
  );
};

export default BookingForm;
