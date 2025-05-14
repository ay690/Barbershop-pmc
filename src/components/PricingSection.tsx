import { useState, useEffect } from "react";
import { pricingData } from "@/data/pricing";

const CheckIcon = () => (
  <span className="inline-block rounded-full bg-gold p-1 mr-3">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black" viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  </span>
);

const PricingSection = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById("pricing");
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setFadeIn(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="pricing" className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-gray-900 dark:text-white">
            Our Pricing
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose from our range of professional barbering services.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingData.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-lg overflow-hidden transform transition-all duration-500
                ${fadeIn ? "fade-in opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{ transitionDelay: `${idx * 0.2}s` }}
            >
              {plan.popular && (
                <div className="absolute right-0 top-0">
                  <div className="bg-gold text-black px-4 py-1 text-sm font-bold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className={`flex flex-col h-full
                  ${plan.popular ? "border-2 border-gold" : ""} bg-white dark:bg-gray-800`}>
                {/* Title & Price */}
                <div className="p-6 pb-0">
                  <h3 className="text-xl font-playfair font-bold text-gray-900 dark:text-white mb-4">
                    {plan.category}
                  </h3>
                  <div className="flex items-baseline mb-6">
                    <span className="text-2xl text-gray-900 dark:text-white">$</span>
                    <span className="text-5xl font-bold text-gold">
                      {plan.price.replace("$", "")}
                    </span>
                    <span className="text-gray-400 ml-1">/mo</span>
                  </div>
                </div>

                {/* Features */}
                <div className="p-6 flex-grow">
                  <ul className="space-y-4">
                    {plan.services.map((svc, i) => (
                      <li key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                        <CheckIcon />
                        {svc}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="p-6 pt-0 mt-auto">
                  <a
                    href="#book"
                    className={`block w-full py-3 text-center font-medium rounded transition
                      ${plan.popular
                        ? "bg-gold text-black hover:bg-yellow-500"
                        : "bg-gray-700 text-white hover:bg-gray-600"}`}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            All services include a free consultation. Special discounts available for first-time clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
