// ============================================
// FAQ DATA — SONU BIN SALON
// ============================================

export const faqCategories = [
  {
    id: 'appointments',
    name: 'Appointments',
    items: [
      {
        question: 'How do I book an appointment at Sonu Bin Salon?',
        answer: 'You can book an appointment through our website\'s Book Appointment page, call us directly at +91 86036 32642, or click the floating WhatsApp button to message us directly.'
      },
      {
        question: 'What is your rescheduling policy?',
        answer: 'We kindly request a minimum of 24 hours notice for any rescheduling or cancellations. For bridal packages, we ask for 72 hours notice.'
      },
      {
        question: 'Can I request a specific stylist?',
        answer: 'Yes, when booking online or by phone, you can request your preferred stylist (e.g. Sonu Bin or other expert stylists) subject to their availability.'
      }
    ]
  },
  {
    id: 'pricing',
    name: 'Pricing & Payments',
    items: [
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit/debit cards, UPI (GPay, PhonePe, Paytm, BHIM), cash, and digital net banking transfers.'
      },
      {
        question: 'Are there any hidden charges in your pricing?',
        answer: 'No, all prices listed are transparent and comprehensive. Any optional add-on treatments will be discussed and approved by you before the service begins.'
      }
    ]
  },
  {
    id: 'haircare',
    name: 'Hair Care',
    items: [
      {
        question: 'How long does a Keratin treatment last?',
        answer: 'A professional Keratin treatment generally lasts 4 to 6 months depending on hair texture and your maintenance routine. We recommend using sulfate-free shampoos.'
      },
      {
        question: 'Which hair coloring products do you use?',
        answer: 'We use premium, dermatologically-approved international brands like Wella, L\'Oréal Professionnel, and Schwarzkopf to ensure hair health and vibrant shade longevity.'
      }
    ]
  },
  {
    id: 'beauty',
    name: 'Beauty Services',
    items: [
      {
        question: 'Do you offer custom bridal makeup trials?',
        answer: 'Yes! We offer professional makeup consultation and trial sessions for brides to map out the perfect look for your special day.'
      },
      {
        question: 'Are your skin facials safe for sensitive skin?',
        answer: 'Absolutely. Our skincare experts perform a detailed skin analysis before every facial to select the perfect organic or specialized hypoallergenic ingredients.'
      }
    ]
  },
  {
    id: 'hours',
    name: 'Opening Hours',
    items: [
      {
        question: 'What are your standard opening hours?',
        answer: 'We are open Monday to Saturday from 9:00 AM to 8:00 PM, and Sundays from 10:00 AM to 6:00 PM.'
      },
      {
        question: 'Do you open early for morning weddings?',
        answer: 'Yes, we arrange special early-morning bookings for bridal parties. Please coordinate this with our front desk at least 2 weeks in advance.'
      }
    ]
  }
];

// Flat list for homepage preview
export const faqs = faqCategories.flatMap((cat) => 
  cat.items.map((item, idx) => ({
    id: `${cat.id}-${idx}`,
    question: item.question,
    answer: item.answer
  }))
);
