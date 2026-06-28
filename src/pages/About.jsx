// ============================================
// About Page — Sonu Bin Salon Gold Theme
// ============================================

import { motion } from 'framer-motion';
import { FiAward, FiHeart, FiTarget, FiShield, FiCheckCircle } from 'react-icons/fi';
import PageTransition from '@components/PageTransition';
import TeamSection from '@components/TeamSection';
import SectionHeader from '@components/SectionHeader';

const trustFactors = [
  {
    icon: FiShield,
    title: 'Certified Products Only',
    desc: 'We partner exclusively with gold-certified international haircare and cosmetic developers, ensuring chemical safety and organic purity.'
  },
  {
    icon: FiAward,
    title: 'Expert Artistry Guidance',
    desc: 'Every team member passes rigorous testing under owner Sonu Bin, ensuring consistency in haircutting precision and styling trends.'
  },
  {
    icon: FiHeart,
    title: 'Sanitized Luxury Comfort',
    desc: 'We follow hospital-grade clinical sanitation protocols for all tools, grooming stations, and spa chairs for absolute client safety.'
  }
];

const About = () => {
  return (
    <PageTransition>
      {/* Hero Banner */}
      <div className="relative pt-32 pb-20 bg-[#111111] text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #C89B3C 0%, transparent 60%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#C89B3C] text-xs tracking-[0.35em] uppercase mb-4">Our Legacy</p>
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-white mb-6">
            About <span className="text-primary-gradient">Sonu Bin Salon</span>
          </h1>
          <p className="text-[#777777] max-w-xl mx-auto text-sm sm:text-base leading-relaxed font-light">
            Crafting beauty masterpieces with passion, precision, and state-of-the-art luxury styling since 2012.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <p className="text-[#C89B3C] text-xs tracking-[0.3em] uppercase mb-4 font-semibold">Est. 2012</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#111111] mb-6 leading-tight">
                Our Story: An Artistry Sanctuary Guided by Sonu Bin
              </h2>
              <div className="space-y-4 text-[#333333] text-sm sm:text-base leading-relaxed font-light">
                <p>
                  Sonu Bin Salon was founded in 2012 by master stylist **Sonu Bin** with a clear-cut purpose: to build a premium salon retreat where clients receive bespoke styling treatments, absolute comfort, and expert results. 
                </p>
                <p>
                  Located in the heart of Mumbai near SEEPZ Gate No.1, Andheri East, the salon has grown from a local boutique studio into a benchmark for modern luxury styling. Our expert hairdressers, skincare doctors, and cosmetic artists share Sonu Bin's unwavering dedication to detail.
                </p>
                <p>
                  Whether it is a custom haircut, premium keratin protection, structural nail extension, or bridal makeup session, we ensure your visit is relaxed and customized.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden h-48 shadow-md border border-[#E5E5E5]"><img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&q=80" alt="Salon Styling" className="w-full h-full object-cover" /></div>
                  <div className="rounded-2xl overflow-hidden h-64 shadow-md border border-[#E5E5E5]"><img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80" alt="Hair Spa" className="w-full h-full object-cover" /></div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="rounded-2xl overflow-hidden h-64 shadow-md border border-[#E5E5E5]"><img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80" alt="Skincare Facial" className="w-full h-full object-cover" /></div>
                  <div className="rounded-2xl overflow-hidden h-48 shadow-md border border-[#E5E5E5]"><img src="https://images.unsplash.com/photo-1596701062351-8ac031668975?w=400&q=80" alt="Bridal Makeover" className="w-full h-full object-cover" /></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#F8F8F8] border-y border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader subtitle="Our Purpose" title="Mission &" highlight="Vision" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: FiTarget, title: 'Our Mission', desc: 'To provide custom-tailored, premium beauty and wellness styling treatments with artistic precision and medical-grade hygiene.' },
              { icon: FiHeart, title: 'Our Vision', desc: 'To remain the most trusted premium luxury salon in Mumbai, recognized for master stylists, hospitality, and quality consistency.' },
              { icon: FiAward, title: 'Our Values', desc: 'Trust, Transparency, Artistic Passion, and Safety. We believe that personal confidence is the ultimate beauty statement.' },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white border border-[#E5E5E5] hover:border-[#C89B3C]/30 transition-all duration-500 text-center shadow-sm hover:shadow-lg hover:shadow-[#C89B3C]/10">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  style={{ background: 'rgba(200, 155, 60, 0.1)', border: '1px solid rgba(200, 155, 60, 0.2)' }}>
                  <item.icon size={28} className="text-[#C89B3C]" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#111111] mb-4">{item.title}</h3>
                <p className="text-[#777777] text-sm leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Customers Trust Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-[#C89B3C] font-semibold">Trust & Excellence</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#111111] mt-2">Why Customers Trust Us</h2>
            <div className="primary-divider mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustFactors.map((f, i) => (
              <div key={i} className="p-6 bg-[#F8F8F8] border border-[#E5E5E5] rounded-2xl flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#C89B3C]/10 text-[#C89B3C] mb-4">
                  <f.icon size={20} />
                </div>
                <h3 className="font-display text-lg font-bold text-[#111111] mb-2">{f.title}</h3>
                <p className="text-xs text-[#777777] leading-relaxed font-light">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-20 bg-[#111111] text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 10% 90%, #C89B3C 0%, transparent 50%)' }} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs uppercase tracking-widest text-[#C89B3C] font-semibold">Our Commitment</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-2 mb-6">Our Quality Promise</h2>
          <p className="text-[#777777] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light mb-8">
            "We promise to never compromise on ingredients, time, or craftsmanship. Every client visiting Sonu Bin Salon receives our full dedication, personalized consultation, and professional execution. If you do not love your results, we will correct them free of cost."
          </p>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#C89B3C] border border-[#C89B3C]/30 px-4 py-2 rounded-full bg-[#C89B3C]/5">
            <FiCheckCircle /> Sonu Bin Signature Quality Assurance
          </div>
        </div>
      </section>

      {/* Team section */}
      <TeamSection />
    </PageTransition>
  );
};

export default About;
