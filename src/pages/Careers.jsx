// ============================================
// Careers Page Component — Sonu Bin Salon
// ============================================

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FiBriefcase, FiMapPin, FiClock, FiCheck, FiSend, FiUser, FiMail, FiPhone, FiFileText } from 'react-icons/fi';
import PageTransition from '@components/PageTransition';

const jobs = [
  {
    id: 1,
    title: 'Senior Hair Stylist',
    department: 'Hair Styling & Design',
    location: 'Mumbai - Andheri East (SEEPZ)',
    type: 'Full-time',
    experience: '5+ Years Required',
    salary: 'Competitive + Commission',
    description: 'We are seeking a creative Senior Hair Stylist specializing in balayage, complex cuts, and texture services. Must demonstrate exceptional client consulting skills and trend awareness.'
  },
  {
    id: 2,
    title: 'Professional Makeup Artist',
    department: 'Beauty & Cosmetics',
    location: 'Mumbai - Andheri East (SEEPZ)',
    type: 'Full-time / Seasonal',
    experience: '3+ Years Required',
    salary: 'Negotiable based on portfolio',
    description: 'Join our award-winning bridal glam crew. Specialized expertise in HD airbrush makeup, traditional draping, and contemporary evening styling is essential.'
  },
  {
    id: 3,
    title: 'Nail Technician & Artist',
    department: 'Nails & Beauty',
    location: 'Mumbai - Andheri East (SEEPZ)',
    type: 'Full-time',
    experience: '2+ Years Required',
    salary: 'Standard salary + incentives',
    description: 'Looking for a nail professional skilled in acrylic extensions, gel art, luxury pedicures, and nail structural treatments. Focus on meticulous hygiene standards.'
  },
  {
    id: 4,
    title: 'Spa & Wellness Therapist',
    department: 'Spa & Relaxation',
    location: 'Mumbai - Andheri East (SEEPZ)',
    type: 'Full-time',
    experience: '3+ Years Required',
    salary: 'Industry standard + bonuses',
    description: 'Seeking a licensed therapist proficient in Swedish massage, deep tissue therapy, and premium body scrubs. Warm client etiquette and positive energy is required.'
  }
];

const Careers = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedJobTitle, setSelectedJobTitle] = useState('');
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();

  const handleApplyNow = (jobTitle) => {
    setSelectedJobTitle(jobTitle);
    setValue('position', jobTitle);
    const element = document.getElementById('apply-form-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const onSubmit = async (data) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    console.log('Job Application:', data);
    setLoading(false);
    setSubmitted(true);
    reset();
  };

  const inputBase = (hasIcon, hasError) =>
    `w-full bg-[#FCFCFC] border ${
      hasError ? 'border-red-400 focus:ring-red-100' : 'border-[#E5E5E5] focus:border-[#C89B3C] focus:ring-[#C89B3C]/10'
    } rounded-xl text-[#111111] text-sm placeholder:text-[#777777] focus:outline-none focus:ring-2 transition-all duration-300 ${
      hasIcon ? 'pl-11 pr-4 py-3.5' : 'px-4 py-3.5'
    }`;

  return (
    <PageTransition>
      {/* Banner */}
      <div className="relative pt-32 pb-20 bg-[#111111] text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #C89B3C 0%, transparent 60%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#C89B3C] text-xs tracking-[0.35em] uppercase mb-4">Join Sonu Bin Salon</p>
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-white mb-6">
            Careers in <span className="text-primary-gradient">Beauty</span>
          </h1>
          <p className="text-[#777777] max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Elevate your passion for beauty and styling. Join a premium luxury workspace that values creativity, mastery, and professional growth.
          </p>
        </div>
      </div>

      {/* JobListings */}
      <section className="py-20 bg-[#F8F8F8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-[#C89B3C] font-semibold">Available Vacancies</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#111111] mt-2">Open Positions</h2>
            <div className="primary-divider mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
            {jobs.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl border border-[#E5E5E5] hover:border-[#C89B3C]/35 transition-all duration-300 card-hover shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="font-display text-xl font-bold text-[#111111]">{job.title}</h3>
                      <p className="text-xs text-[#C89B3C] font-medium tracking-wide uppercase mt-1">{job.department}</p>
                    </div>
                    <span className="px-3 py-1 bg-[#F8F8F8] border border-[#E5E5E5] rounded-full text-[10px] uppercase font-bold text-[#333333]">
                      {job.type}
                    </span>
                  </div>
                  
                  <p className="text-[#333333] text-sm leading-relaxed mb-6">{job.description}</p>
                  
                  <div className="space-y-2 mb-8 text-xs text-[#777777]">
                    <div className="flex items-center gap-2">
                      <FiMapPin className="text-[#C89B3C]" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiClock className="text-[#C89B3C]" />
                      <span>{job.experience}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#C89B3C] font-bold">₹</span>
                      <span>{job.salary}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleApplyNow(job.title)}
                  className="w-full text-center py-3 bg-primary-gradient text-white rounded-xl text-xs font-semibold tracking-wider hover:shadow-lg hover:shadow-[#C89B3C]/20 transition-all duration-300"
                >
                  Apply For This Job
                </button>
              </motion.div>
            ))}
          </div>

          {/* Form Section */}
          <div id="apply-form-section" className="max-w-2xl mx-auto bg-white border border-[#E5E5E5] rounded-3xl p-8 sm:p-12 shadow-sm">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl font-bold text-[#111111]">Submit Application</h2>
              <p className="text-xs text-[#777777] mt-2">Introduce yourself to us, and we will get back to you soon.</p>
            </div>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center text-center py-10"
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-[#C89B3C]/20 bg-primary-gradient">
                    <FiCheck size={28} className="text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#111111] mb-2">Application Received!</h3>
                  <p className="text-[#333333] text-sm mb-6 max-w-sm">
                    Thank you for applying to Sonu Bin Salon. We will evaluate your profile and contact you within 3–5 working days.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#C89B3C] font-bold underline underline-offset-4 hover:text-[#A37B2C]"
                  >
                    Submit another application
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  {/* Full Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#333333] uppercase tracking-wider">Full Name</label>
                    <div className="relative">
                      <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C89B3C]" size={14} />
                      <input
                        type="text"
                        placeholder="Your full name"
                        className={inputBase(true, !!errors.name)}
                        {...register('name', { required: 'Name is required' })}
                      />
                    </div>
                    {errors.name && <span className="text-red-500 text-xs mt-0.5">{errors.name.message}</span>}
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-[#333333] uppercase tracking-wider">Email</label>
                      <div className="relative">
                        <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C89B3C]" size={14} />
                        <input
                          type="email"
                          placeholder="name@email.com"
                          className={inputBase(true, !!errors.email)}
                          {...register('email', {
                            required: 'Email is required',
                            pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email' }
                          })}
                        />
                      </div>
                      {errors.email && <span className="text-red-500 text-xs mt-0.5">{errors.email.message}</span>}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-[#333333] uppercase tracking-wider">Phone</label>
                      <div className="relative">
                        <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C89B3C]" size={14} />
                        <input
                          type="tel"
                          placeholder="10-digit number"
                          className={inputBase(true, !!errors.phone)}
                          {...register('phone', {
                            required: 'Phone is required',
                            pattern: { value: /^[6-9]\d{9}$/, message: 'Must be 10-digit number' }
                          })}
                        />
                      </div>
                      {errors.phone && <span className="text-red-500 text-xs mt-0.5">{errors.phone.message}</span>}
                    </div>
                  </div>

                  {/* Position Dropdown */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#333333] uppercase tracking-wider">Target Position</label>
                    <select
                      className={`${inputBase(false, !!errors.position)} appearance-none cursor-pointer`}
                      {...register('position', { required: 'Please select a position' })}
                      defaultValue={selectedJobTitle}
                    >
                      <option value="" disabled>Select target vacancy...</option>
                      {jobs.map(j => <option key={j.id} value={j.title}>{j.title}</option>)}
                      <option value="other">Other Styling Specialist</option>
                    </select>
                    {errors.position && <span className="text-red-500 text-xs mt-0.5">{errors.position.message}</span>}
                  </div>

                  {/* Portfolio Link */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#333333] uppercase tracking-wider">Portfolio Link / Resume Drive URL</label>
                    <div className="relative">
                      <FiFileText className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C89B3C]" size={14} />
                      <input
                        type="url"
                        placeholder="https://drive.google.com/..."
                        className={inputBase(true, !!errors.portfolio)}
                        {...register('portfolio', { required: 'Portfolio or Resume link is required' })}
                      />
                    </div>
                    {errors.portfolio && <span className="text-red-500 text-xs mt-0.5">{errors.portfolio.message}</span>}
                  </div>

                  {/* Cover Letter */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#333333] uppercase tracking-wider">Tell Us About Yourself</label>
                    <textarea
                      rows={4}
                      placeholder="Share your experience details, achievements, and why you want to work at Sonu Bin Salon..."
                      className="w-full bg-[#FCFCFC] border border-[#E5E5E5] rounded-xl px-4 py-3.5 text-[#111111] text-sm focus:outline-none focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/10 transition-all duration-300 resize-none"
                      {...register('letter')}
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full py-4 rounded-xl bg-primary-gradient text-white text-sm font-semibold tracking-wider hover:shadow-lg hover:shadow-[#C89B3C]/20 transition-all duration-300 disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? 'Submitting...' : <><FiSend /> Submit Application</>}
                  </motion.button>
                </form>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>
    </PageTransition>
  );
};

export default Careers;
