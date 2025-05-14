export interface PricingCategory {
  category: string;
  price: string;
  popular: boolean;
  services: string[];
}


export const pricingData: PricingCategory[] = [
  {
    category: "Classic Services",
    price: "$25",
    popular: true,
    services: [
      "Men's Haircut",
      "Kids Haircut (12 & under)",
      "Senior Haircut (65+)",
      "Military/First Responder Cut",
      "Basic Beard Trim",
      "Neck & Line Cleanup (between cuts)"
    ]
  },
  {
    category: "Premium Services",
    price: "$35",
    popular: false,
    services: [
      "Haircut & Beard Combo",
      "Hot Towel Shave",
      "Full Beard Shaping & Design",
      "Color Camo (Gray Blending)",
      "Hair & Scalp Treatment",
      "Head Shave with Hot Towel"
    ]
  },
  {
    category: "Packages",
    price: "$50",
    popular: false,
    services: [
      "The Works (Cut, Shave, Treatment)",
      "Father & Son Combo",
      "Groom's Package",
      "Monthly Membership (2 cuts/mo)",
      "First-Time Client Special",
      "Loyalty Program"
    ]
  }
];
