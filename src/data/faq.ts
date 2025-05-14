export interface FAQItem {
  category: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    category: "Services",
    question: "What services do you offer?",
    answer:
      "We offer a wide range of premium grooming services including classic haircuts, hot towel shaves, beard trims, hair coloring, deluxe packages, and kid's haircuts. Each service is performed by our expert barbers with attention to detail.",
  },
  {
    category: "General",
    question: "How long does a typical appointment take?",
    answer:
      "Most haircuts take between 30-45 minutes, while services like hot towel shaves and deluxe packages may take up to 60-75 minutes. We recommend scheduling accordingly to ensure we can provide the best service possible.",
  },
  {
    category: "General",
    question: "Do I need to make an appointment?",
    answer:
      "While we do accept walk‑ins based on availability, we strongly recommend booking an appointment to ensure you get your preferred time slot and barber. You can book through our website, by phone, or in person.",
  },
  {
    category: "Support",
    question: "What if I need to cancel my appointment?",
    answer:
      "We understand that plans change. We appreciate at least 24 hours notice for cancellations. For cancellations with less than 24 hours notice, a small fee may apply to cover the reserved time slot.",
  },
  {
    category: "Pricing",
    question: "Do you offer any membership or loyalty programs?",
    answer:
      "Yes! We have a loyalty program where every 6th haircut is 50% off. We also offer first‑time client discounts and special package deals for regular customers. Ask our staff about these offers during your visit.",
  },
  {
    category: "Services",
    question: "What products do you use and sell?",
    answer:
      "We use premium hair and beard care products from brands like Baxter of California, Reuzel, and Layrite. Most products used during your service are also available for purchase to maintain your look at home.",
  },
  {
    category: "Services",
    question: "Do you offer services for children?",
    answer:
      "Absolutely! We offer kid's haircuts for children of all ages. Our barbers are experienced in working with children and creating a comfortable environment for them.",
  },
  {
    category: "Support",
    question: "What COVID‑19 precautions are you taking?",
    answer:
      "We follow all local health guidelines and maintain strict sanitation protocols. This includes regular disinfection of tools and stations, hand sanitizer availability, and staff health monitoring. Mask requirements follow current local guidelines.",
  },
];
