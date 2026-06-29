// ============================================
// Contact Page — Sonu Bin Salon Gold Theme
// ============================================

import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock, FiInstagram, FiFacebook } from 'react-icons/fi';
import PageTransition from '@components/PageTransition';
import ContactForm from '@components/ContactForm';

const contactInfo = [
  { 
    icon: FiMapPin, 
    title: 'Visit Sonu Bin Salon', 
    lines: ['SEEPZ Gate No.1, Andheri East', 'Mumbai, Maharashtra - 400096', 'India'] 
  },
  { 
    icon: FiPhone, 
    title: 'Call / WhatsApp Us', 
    lines: ['+91 86036 32642', 'Direct Hotline Available'] 
  },
  { 
    icon: FiMail, 
    title: 'Email Inquiries', 
    lines: ['hello@sonubinsalon.in', 'bookings@sonubinsalon.in'] 
  },
  { 
    icon: FiClock, 
    title: 'Salon Hours', 
    lines: ['Mon – Sat: 9:00 AM – 8:00 PM', 'Sunday: 10:00 AM – 6:00 PM'] 
  },
];

const Contact = () => {
  return (
    <PageTransition>
      {/* Banner */}
      <div className="relative pt-32 pb-16 bg-[#111111] text-center overflow-hidden border-b border-[#C89B3C]/10">
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #C89B3C 0%, transparent 60%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#C89B3C] text-xs tracking-[0.35em] uppercase mb-4 font-semibold">
            Get In Touch
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl font-bold text-white mb-5">
            Contact <span className="text-primary-gradient">Us</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-[#777777] max-w-lg mx-auto text-sm leading-relaxed font-light">
            Have questions about our treatments or want to book Sonu Bin for a custom styling session? Reach out.
          </motion.p>
        </div>
      </div>

      <section className="py-20 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Left: Info + Map + Socials */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {contactInfo.map((item, i) => (
                  <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                    className="p-5 rounded-2xl bg-white border border-[#E5E5E5] hover:border-[#C89B3C]/30 transition-all duration-300 shadow-sm flex flex-col justify-start">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-[#C89B3C]" style={{ background: 'rgba(200, 155, 60, 0.1)' }}>
                      <item.icon size={18} />
                    </div>
                    <h4 className="text-[#111111] font-bold text-sm mb-2">{item.title}</h4>
                    {item.lines.map((line) => <p key={line} className="text-[#333333] text-xs leading-relaxed font-light">{line}</p>)}
                  </motion.div>
                ))}
              </div>

              {/* Google Map Embed */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="rounded-3xl overflow-hidden border border-[#E5E5E5] mb-8 shadow-sm" style={{ height: '280px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.7562095941195!2d72.87679361530948!3d19.11835735560934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c83fbf119777%3A0x73ebca5c39ee730e!2sSEEPZ%20Gate%20No.%201%2C%20SEEPZ%2C%20Andheri%20East%2C%20Mumbai%2C%20Maharashtra%20400096!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin"
                  width="100%" height="100%" style={{ border: 0 }}
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Sonu Bin Salon Location Map"
                />
              </motion.div>

              {/* Social Media & WhatsApp Button */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between p-5 bg-white rounded-2xl border border-[#E5E5E5] shadow-sm">
                <div>
                  <p className="text-[10px] text-[#777777] uppercase tracking-wider font-semibold mb-2">Connect Instantly</p>
                  <div className="flex gap-2">
                    <a href="#" className="w-8 h-8 rounded-full border border-[#E5E5E5] flex items-center justify-center text-[#777777] hover:text-[#C89B3C] hover:border-[#C89B3C] transition-all">
                      <FiInstagram size={14} />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full border border-[#E5E5E5] flex items-center justify-center text-[#777777] hover:text-[#C89B3C] hover:border-[#C89B3C] transition-all">
                      <FiFacebook size={14} />
                    </a>
                  </div>
                </div>

                <a 
                  href="https://wa.me/918603632642" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366] text-white text-xs font-bold shadow-md hover:bg-[#20ba59] transition-all duration-300"
                >
                  <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.918-1.422A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.952 7.952 0 01-4.065-1.116l-.291-.173-3.023.873.853-3.109-.19-.302A7.952 7.952 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z"/>
                  </svg>
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Right: Contact Form */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl border border-[#E5E5E5] p-8 sm:p-12 shadow-sm">
              <h2 className="font-display text-3xl font-bold text-[#111111] mb-2">Send a Message</h2>
              <p className="text-xs text-[#777777] mb-8 font-light">Feel free to ask questions about services, custom wedding bookings, or scheduling.</p>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
