// ============================================
// Testimonials Swiper — Light Theme
// ============================================

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import { testimonials } from '@data/testimonials';
import SectionHeader from './SectionHeader';

const StarRating = ({ rating }) => (
  <div className="flex gap-1">
    {[1, 2, 3, 4, 5].map((star) => (
      <FiStar key={star} size={14} className={star <= rating ? 'text-primary' : 'text-slate-200'} fill={star <= rating ? 'currentColor' : 'none'} />
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-24 bg-salon-alt overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Client Love"
          title="What Our"
          highlight="Clients Say"
          description="Real experiences from clients who've discovered the SJ Salon difference."
        />

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            className="pb-12"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="relative bg-white rounded-2xl p-7 border border-salon-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/8 transition-all duration-500 h-full flex flex-col shadow-sm">
                  {/* Quote mark */}
                  <div className="absolute top-5 right-6 font-display text-7xl leading-none opacity-10 font-bold select-none text-primary-gradient">
                    "
                  </div>

                  <StarRating rating={t.rating} />

                  <p className="text-text-secondary text-sm leading-relaxed mt-4 flex-1 italic">
                    "{t.review}"
                  </p>

                  <div className="mt-6 pt-5 border-t border-salon-border flex items-center gap-4">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-11 h-11 rounded-full object-cover border-2 border-primary/30"
                    />
                    <div>
                      <p className="text-text-primary font-semibold text-sm">{t.name}</p>
                      <p className="text-text-muted text-xs mt-0.5">{t.role}</p>
                    </div>
                    <div className="ml-auto">
                      <span className="text-[10px] text-primary tracking-wider uppercase">{t.service}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
