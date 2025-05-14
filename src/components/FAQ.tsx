import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { faqItems } from "@/data/faq";

const categories = ["General", "Services", "Pricing", "Support"];

export const FAQSection = () => {
  const [activeTab, setActiveTab] = useState<string>(categories[0]);
  const [fadeIn, setFadeIn] = useState(false);

  // Fade-in on scroll
  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById("faq");
      if (el) {
        const { top, bottom } = el.getBoundingClientRect();
        if (top < window.innerHeight && bottom > 0) {
          setFadeIn(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filtered items for the active tab
  const filtered = faqItems.filter((q) => q.category === activeTab);

  return (
    <section
      id="faq"
      className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold mb-4 text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about our services, appointments,
            and policies.
          </p>
        </div>

        {/* Responsive Tabs */}
        <div className="overflow-x-auto scrollbar-hide mb-6 flex justify-center">
          <div className="inline-flex space-x-3 px-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`whitespace-nowrap px-4 py-2 font-medium rounded-md transition flex-shrink-0
                  ${
                    activeTab === cat
                      ? "bg-gold text-black"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion for filtered FAQs */}
        <Accordion type="single" collapsible className="w-full">
          {filtered.map((item, idx) => (
            <AccordionItem
              key={idx}
              value={`faq-${idx}`}
              className={`mb-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm transition-all duration-500
                ${fadeIn ? "fade-in opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <AccordionTrigger className="px-4 py-3 sm:px-6 sm:py-4 hover:no-underline">
                <span className="text-left font-medium text-gray-800 dark:text-gray-200 text-base sm:text-lg">
                  {item.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 pt-0 sm:px-6 sm:pb-5 sm:pt-0 text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA */}
        <div
          className={`mt-10 sm:mt-12 text-center transition-all duration-500
            ${fadeIn ? "fade-in opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          style={{ transitionDelay: "0.8s" }}
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-playfair font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white">
            Still have questions?
          </h3>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-5 sm:mb-6">
            Can't find the answer you're looking for? Please contact us
            directly for more information.
          </p>
          <a
            href="#contact"
            className="px-6 sm:px-8 py-2 sm:py-3 bg-gold text-white font-medium rounded hover:!bg-[#b38600] transition inline-block text-sm sm:text-base"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;


