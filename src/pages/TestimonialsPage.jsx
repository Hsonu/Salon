// ============================================
// Testimonials Page Component — Sonu Bin Salon
// ============================================

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiStar, FiMessageSquare, FiUser, FiCheck, FiSend, FiMapPin, FiSmile } from 'react-icons/fi';
import { testimonials as initialTestimonials } from '@data/testimonials';
import PageTransition from '@components/PageTransition';

const StarRating = ({ rating, interactive = false, onRatingChange }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <FiStar
          key={star}
          size={16}
          className={`${
            star <= rating ? 'text-[#C89B3C]' : 'text-slate-200'
          } ${interactive ? 'cursor-pointer hover:scale-110 transition-transform' : ''}`}
          fill={star <= rating ? 'currentColor' : 'none'}
          onClick={() => interactive && onRatingChange(star)}
        />
      ))}
    </div>
  );
};

const TestimonialsPage = () => {
  const [reviews, setReviews] = useState(initialTestimonials);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const [newName, setNewName] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newReview, setNewReview] = useState('');
  const [newService, setNewService] = useState('');

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    if (!newName || !newReview || !newService) return;
    
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    
    const newEntry = {
      id: reviews.length + 1,
      name: newName,
      role: newLocation || 'Client',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80', // default avatar
      rating: newRating,
      review: newReview,
      service: newService
    };
    
    setReviews([newEntry, ...reviews]);
    setLoading(false);
    setSubmitted(true);
    
    // reset form fields
    setNewName('');
    setNewLocation('');
    setNewRating(5);
    setNewReview('');
    setNewService('');
  };

  return (
    <PageTransition>
      {/* Banner */}
      <div className="relative pt-32 pb-20 bg-[#111111] text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #C89B3C 0%, transparent 60%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#C89B3C] text-xs tracking-[0.35em] uppercase mb-4">Client Feedback</p>
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-white mb-6">
            Client <span className="text-primary-gradient">Testimonials</span>
          </h1>
          <p className="text-[#777777] max-w-xl mx-auto text-sm sm:text-base leading-relaxed font-light">
            Discover real experiences from our clients who have entrusted their hair, skin, and styling transformations to Sonu Bin Salon.
          </p>
        </div>
      </div>

      {/* Main content grid */}
      <section className="py-20 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            
            {/* Reviews Wall */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="font-display text-2xl font-bold text-[#111111] mb-6 flex items-center gap-2">
                <FiSmile className="text-[#C89B3C]" /> What Clients Are Saying ({reviews.length})
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {reviews.map((r, idx) => (
                  <motion.div
                    key={r.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="relative bg-white rounded-2xl p-6 border border-[#E5E5E5] hover:border-[#C89B3C]/35 transition-all duration-300 shadow-sm flex flex-col justify-between"
                  >
                    <div className="absolute top-5 right-6 font-display text-6xl leading-none opacity-5 font-bold select-none text-primary-gradient">
                      "
                    </div>

                    <div>
                      <StarRating rating={r.rating} />
                      <p className="text-[#333333] text-sm leading-relaxed mt-4 italic font-light">
                        "{r.review}"
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#E5E5E5]/60 flex items-center gap-3">
                      <img
                        src={r.image}
                        alt={r.name}
                        className="w-10 h-10 rounded-full object-cover border border-[#C89B3C]/20"
                      />
                      <div>
                        <p className="text-[#111111] font-semibold text-xs">{r.name}</p>
                        <p className="text-[#777777] text-[10px] mt-0.5 flex items-center gap-1">
                          <FiMapPin size={10} className="text-[#C89B3C]" /> {r.role}
                        </p>
                      </div>
                      <span className="ml-auto text-[9px] uppercase tracking-wider font-bold text-[#C89B3C] bg-[#C89B3C]/5 border border-[#C89B3C]/20 px-2 py-0.5 rounded-full">
                        {r.service}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Write a Review Section */}
            <div className="bg-white border border-[#E5E5E5] rounded-3xl p-8 shadow-sm">
              <h2 className="font-display text-2xl font-bold text-[#111111] mb-2 flex items-center gap-2">
                <FiMessageSquare className="text-[#C89B3C]" /> Share Your Experience
              </h2>
              <p className="text-xs text-[#777777] mb-6">Your feedback helps us maintain our premium styling quality.</p>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-8"
                  >
                    <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5 mx-auto shadow-md shadow-[#C89B3C]/20 bg-primary-gradient">
                      <FiCheck size={24} className="text-white" strokeWidth={2.5} />
                    </div>
                    <h3 className="font-display text-xl font-bold text-[#111111] mb-2">Review Submitted!</h3>
                    <p className="text-xs text-[#777777] mb-6 max-w-xs mx-auto">
                      Thank you for reviewing Sonu Bin Salon. Your review has been added to our client wall.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-[#C89B3C] font-semibold underline hover:text-[#A37B2C]"
                    >
                      Write another review
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmitReview} className="space-y-4">
                    {/* Name */}
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-semibold text-[#333333] uppercase tracking-wider">Your Name</label>
                      <div className="relative">
                        <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#C89B3C]" size={13} />
                        <input
                          type="text"
                          required
                          placeholder="Full name"
                          value={newName}
                          onChange={(e) => setNewName(e.target.value)}
                          className="w-full bg-[#FCFCFC] border border-[#E5E5E5] focus:border-[#C89B3C] focus:ring-[#C89B3C]/10 rounded-xl text-sm placeholder:text-[#777777] focus:outline-none focus:ring-2 pl-10 pr-4 py-3 transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-semibold text-[#333333] uppercase tracking-wider">Location / Role</label>
                      <div className="relative">
                        <FiMapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#C89B3C]" size={13} />
                        <input
                          type="text"
                          placeholder="e.g. Mumbai, Maharashtra"
                          value={newLocation}
                          onChange={(e) => setNewLocation(e.target.value)}
                          className="w-full bg-[#FCFCFC] border border-[#E5E5E5] focus:border-[#C89B3C] focus:ring-[#C89B3C]/10 rounded-xl text-sm placeholder:text-[#777777] focus:outline-none focus:ring-2 pl-10 pr-4 py-3 transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Service */}
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-semibold text-[#333333] uppercase tracking-wider">Service Received</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Hair Cut / Bridal Makeup"
                        value={newService}
                        onChange={(e) => setNewService(e.target.value)}
                        className="w-full bg-[#FCFCFC] border border-[#E5E5E5] focus:border-[#C89B3C] focus:ring-[#C89B3C]/10 rounded-xl text-sm placeholder:text-[#777777] focus:outline-none focus:ring-2 px-4 py-3 transition-all duration-300"
                      />
                    </div>

                    {/* Rating */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-semibold text-[#333333] uppercase tracking-wider">Rating</label>
                      <StarRating rating={newRating} interactive={true} onRatingChange={setNewRating} />
                    </div>

                    {/* Review text */}
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-semibold text-[#333333] uppercase tracking-wider">Review</label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Share details of your luxury makeover session..."
                        value={newReview}
                        onChange={(e) => setNewReview(e.target.value)}
                        className="w-full bg-[#FCFCFC] border border-[#E5E5E5] focus:border-[#C89B3C] focus:ring-[#C89B3C]/10 rounded-xl text-sm placeholder:text-[#777777] focus:outline-none focus:ring-2 px-4 py-3 transition-all duration-300 resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="w-full py-3.5 rounded-xl bg-primary-gradient text-white text-xs font-semibold tracking-wider hover:shadow-lg hover:shadow-[#C89B3C]/20 transition-all duration-300 disabled:opacity-70 flex items-center justify-center gap-2"
                    >
                      {loading ? 'Submitting...' : <><FiSend /> Submit Review</>}
                    </motion.button>
                  </form>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>
    </PageTransition>
  );
};

export default TestimonialsPage;
