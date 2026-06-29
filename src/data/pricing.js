// ============================================
// PRICING DATA — SONU BIN SALON
// ============================================

export const pricingPlans = [
  {
    id: 1,
    name: 'Royal Essential',
    tagline: 'Perfect for regular grooming and styling',
    price: 1499,
    period: 'per visit',
    color: 'silver',
    popular: false,
    features: [
      'Precision Haircut & Style',
      'Relaxing Head Massage (20 min)',
      'Basic Face Cleanup',
      'Eyebrow Shaping & Threading',
      'Complimentary Refreshment',
      'Expert Stylist Consultation',
    ],
    notIncluded: [
      'Premium Spa Therapies',
      'Advanced Facials / Cleanups',
      'Keratin & Slik Treatments',
    ],
    cta: 'Book Essential',
  },
  {
    id: 2,
    name: 'Sonu Bin Signature',
    tagline: 'Our ultimate highly recommended experience',
    price: 3499,
    period: 'per visit',
    color: 'gold',
    popular: true,
    features: [
      'Everything in Royal Essential',
      'Luxury Nourishing Hair Spa',
      'Premium Radiance Facial (60 min)',
      'Manicure & Pedicure Deluxe',
      'Stylist-designed Beard / Hair Blowout',
      'Premium Turkish Coffee / Green Tea',
      'Priority Booking Slot',
    ],
    notIncluded: [
      'Bridal Airbrush Makeup',
    ],
    cta: 'Book Signature',
  },
  {
    id: 3,
    name: 'Imperial Prestige',
    tagline: 'The supreme luxury makeover session',
    price: 7999,
    period: 'per session',
    color: 'platinum',
    popular: false,
    features: [
      'Everything in Signature Pack',
      'Keratin or Smoothening Treatment',
      'Therapeutic Deep Tissue Massage (60 min)',
      'Luxury Detan Face & Neck Bleach',
      'Nail Art / Gel Overlay',
      'Personal Senior Stylist assigned',
      'Luxury Hamper & Home Care Guide',
    ],
    notIncluded: [],
    cta: 'Book Prestige',
  },
];

export const servicesPricing = {
  "Men's Services": [
    { service: 'Hair Cut & Styling', price: '₹599' },
    { service: 'Beard Trimming & Design', price: '₹299' },
    { service: 'Royal Hot Towel Shave', price: '₹399' },
    { service: 'Hair Spa (Men)', price: '₹799' },
    { service: 'Grooming Combo Pack', price: '₹1,499' },
  ],
  "Women's Services": [
    { service: 'Precision Hair Cut & Wash', price: '₹799' },
    { service: 'Blowdry & Advanced Styling', price: '₹599' },
    { service: 'Eyebrow & Facial Threading', price: '₹199' },
    { service: 'Rica Honey Waxing (Full Body)', price: '₹1,999' },
    { service: 'Luxury Manicure', price: '₹599' },
    { service: 'Luxury Pedicure', price: '₹799' },
  ],
  "Hair Treatments": [
    { service: 'Keratin Protein Treatment', price: '₹3,499' },
    { service: 'Pro-Smoothening Service', price: '₹2,999' },
    { service: 'Global Color (Ammonia Free)', price: '₹1,999' },
    { service: 'Balayage / Ombre / Highlights', price: '₹3,999' },
    { service: 'Hair Spa Nourishment Therapy', price: '₹999' },
  ],
  "Spa Packages": [
    { service: 'Aromatic Stress-Relief Massage (60 min)', price: '₹2,199' },
    { service: 'Deep Tissue Therapeutic Massage (60 min)', price: '₹2,499' },
    { service: 'Traditional Hot Oil Head Massage (30 min)', price: '₹399' },
    { service: 'Soothing Foot Reflexology (45 min)', price: '₹899' },
    { service: 'Back & Shoulder Release (30 min)', price: '₹799' },
  ],
  "Bridal Packages": [
    { service: 'Elite HD Bridal Makeup', price: '₹9,999' },
    { service: 'Prestige Airbrush Bridal Makeup', price: '₹14,999' },
    { service: 'Pre-Bridal Luxury Grooming Glow Kit', price: '₹6,999' },
    { service: 'Bridesmaid / Party Makeup', price: '₹2,499' },
    { service: 'Bridal Saree Draping & Hair Updo', price: '₹1,999' },
  ],
  "Combo Packages": [
    { service: 'Royal Grooming Combo (Cut + Shave + Facial)', price: '₹2,299' },
    { service: 'Luxe Pamper Combo (Spa + Mani + Pedi)', price: '₹1,999' },
    { service: 'Imperial Makeover Combo (Cut + Color + Blowdry)', price: '₹4,499' },
    { service: 'Total Rejuvenation Combo (Massage + Facial)', price: '₹3,299' },
  ],
};
