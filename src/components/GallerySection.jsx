// ============================================
// Gallery Section — Light Theme
// ============================================

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiZoomIn } from 'react-icons/fi';
import { galleryImages, galleryCategories } from '@data/gallery';
import SectionHeader from './SectionHeader';

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section className="py-24 bg-salon-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Our Portfolio"
          title="Our Stunning"
          highlight="Gallery"
          description="A showcase of transformations, artistry, and luxury beauty moments."
        />

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
                activeCategory === cat
                  ? 'text-white shadow-md shadow-primary/30 bg-primary-gradient'
                  : 'border border-salon-border bg-white text-text-secondary hover:border-primary/40 hover:text-text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div layout className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
          <AnimatePresence>
            {filtered.map((img) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="relative group break-inside-avoid cursor-pointer overflow-hidden rounded-xl shadow-sm"
                onClick={() => setLightbox(img)}
              >
                <img
                  src={img.image}
                  alt={img.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-400 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center gap-2">
                    <FiZoomIn size={24} className="text-white" />
                    <span className="text-white text-xs font-medium tracking-wider">{img.title}</span>
                  </div>
                </div>
                <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-2 py-0.5 rounded text-[9px] uppercase tracking-wider text-white font-bold bg-primary-gradient">
                    {img.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              className="relative max-w-4xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightbox.image} alt={lightbox.title} className="w-full h-full object-contain rounded-2xl" />
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-text-primary hover:text-primary transition-colors shadow-md"
              >
                <FiX size={18} />
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent rounded-b-2xl">
                <p className="text-white font-semibold">{lightbox.title}</p>
                <p className="text-primary-light text-xs tracking-wider uppercase mt-0.5">{lightbox.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
