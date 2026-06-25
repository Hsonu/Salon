// ============================================
// WhatsApp Floating Button
// ============================================

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/918603632642?text=Hello%20SJ%20Salon%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20SEEPZ%20Mumbai."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-40 w-13 h-13 flex items-center justify-center rounded-full shadow-lg group"
      style={{
        width: '52px',
        height: '52px',
        background: 'linear-gradient(135deg, #25d366, #128c7e)',
        boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
      }}
    >
      {/* Ping animation */}
      <span className="absolute inset-0 rounded-full bg-[#25d366] animate-ping opacity-20" />
      <FaWhatsapp size={26} className="text-white relative z-10" />
    </motion.a>
  );
};

export default WhatsAppButton;
