// ============================================
// ContactForm — Light Theme
// ============================================

import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiUser, FiMail, FiMessageSquare, FiSend, FiCheck } from 'react-icons/fi';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    console.log('Contact data:', data);
    setLoading(false);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5 shadow-lg shadow-primary/30 bg-primary-gradient">
          <FiCheck size={28} className="text-white" strokeWidth={2.5} />
        </div>
        <h3 className="font-display text-2xl font-bold text-text-primary mb-2">Message Sent!</h3>
        <p className="text-text-secondary text-sm mb-6">We'll get back to you within 24 hours.</p>
        <button onClick={() => setSubmitted(false)} className="text-primary text-sm underline underline-offset-4 hover:text-primary-dark">
          Send another message
        </button>
      </motion.div>
    );
  }

  const inputStyle = (hasError) =>
    `w-full bg-salon-input border ${hasError ? 'border-red-400' : 'border-salon-border focus:border-primary'} rounded-xl pl-11 pr-4 py-3.5 text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300`;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {/* Name */}
      <div>
        <label className="text-text-secondary text-xs uppercase tracking-wider block mb-1.5">Your Name</label>
        <div className="relative">
          <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" size={14} />
          <input type="text" placeholder="Full name" className={inputStyle(!!errors.name)}
            {...register('name', { required: 'Name is required' })} />
        </div>
        {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name.message}</span>}
      </div>

      {/* Email */}
      <div>
        <label className="text-text-secondary text-xs uppercase tracking-wider block mb-1.5">Email Address</label>
        <div className="relative">
          <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" size={14} />
          <input type="email" placeholder="your@email.com" className={inputStyle(!!errors.email)}
            {...register('email', { required: 'Email is required', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email' } })} />
        </div>
        {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
      </div>

      {/* Message */}
      <div>
        <label className="text-text-secondary text-xs uppercase tracking-wider block mb-1.5">Message</label>
        <div className="relative">
          <FiMessageSquare className="absolute left-4 top-4 text-primary" size={14} />
          <textarea rows={5} placeholder="How can we help you?"
            className={`w-full bg-salon-input border ${errors.message ? 'border-red-400' : 'border-salon-border focus:border-primary'} rounded-xl pl-11 pr-4 py-3.5 text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none`}
            {...register('message', { required: 'Message is required', minLength: { value: 10, message: 'At least 10 characters' } })} />
        </div>
        {errors.message && <span className="text-red-500 text-xs mt-1">{errors.message.message}</span>}
      </div>

      <motion.button
        type="submit"
        disabled={loading}
        whileHover={{ scale: loading ? 1 : 1.02 }}
        whileTap={{ scale: loading ? 1 : 0.98 }}
        className="w-full flex items-center justify-center gap-2 py-4 rounded-full font-semibold tracking-wider text-sm text-white transition-all duration-300 shadow-md shadow-primary/30 bg-primary-gradient"
      >
        {loading ? (
          <><svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Sending...</>
        ) : (
          <>Send Message<FiSend size={14} /></>
        )}
      </motion.button>
    </form>
  );
};

export default ContactForm;
