import { useState, useEffect } from "react";

const LocationSection = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const locationSection = document.getElementById("location");
      if (locationSection) {
        const rect = locationSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setFadeIn(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="location"
      className="py-12 sm:py-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-gold text-xs sm:text-sm uppercase tracking-wider">
            Visit Our Shop
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold mb-3 sm:mb-4">
            Our Location
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-4"></div>
          <p className="text-gray-700 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-10 sm:mb-12">
            Conveniently located in Denton, TX.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Embedded Google Map */}
          <div
            className={`rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 ease-out
              ${fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ animationDelay: "0.1s" }}
          >
            <iframe
              title="PMC Barber Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.1234567890123!2d-97.123456!3d33.215147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c58b6b1234567%3A0xabcdef1234567890!2s518%20Acme%20St%20Unit%20101%2C%20Denton%2C%20TX%2076205!5e0!3m2!1sen!2sus!4v1234567890123"
              width="100%"
              height="100%"
              className="h-64 sm:h-80 md:h-96 w-full border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact information */}
          <div
            className={`bg-white dark:bg-gray-800 rounded-lg p-6 sm:p-8 shadow-lg transform transition-all duration-500 ease-out
              ${fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ animationDelay: "0.3s" }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Contact Information
            </h3>
            <div className="w-12 h-1 bg-gold mb-6"></div>

            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start">
                <div className="bg-gold rounded-full p-3 mr-4">
                  {/* Location Pin Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium mb-1 text-sm sm:text-base text-gray-900 dark:text-white">
                    Address
                  </h4>
                  <p className="text-gray-700 dark:text-gray-400 text-xs sm:text-sm">
                    518 Acme St unit 101, Denton, TX 76205, United States
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gold rounded-full p-3 mr-4">
                  {/* Phone Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium mb-1 text-sm sm:text-base text-gray-900 dark:text-white">
                    Phone
                  </h4>
                  <p className="text-gray-700 dark:text-gray-400 text-xs sm:text-sm">
                    +1 940 891 5569
                  </p>
                </div>
              </div>

              <div className="flex space-x-4 mt-6 sm:mt-8">
                <a
                  href="#directions"
                  className="bg-gold text-black py-2 sm:py-3 px-4 sm:px-6 rounded-md font-medium hover:!bg-[#b38600] transition text-xs sm:text-sm"
                >
                  Get Directions
                </a>
                <a
                  href="tel:+19408915569"
                  className="bg-gray-700 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-md font-medium hover:bg-gray-600 transition text-xs sm:text-sm"
                >
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {[
            { label: "Monday - Friday", hours: "9:00 AM - 7:00 PM" },
            { label: "Saturday", hours: "9:00 AM - 6:00 PM" },
            { label: "Sunday", hours: "Closed" },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md transform transition-all duration-500 ease-out
                ${fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ animationDelay: `${0.4 + idx * 0.1}s` }}
            >
              <h3 className="text-lg sm:text-xl font-medium mb-1 text-gray-900 dark:text-white">
                {item.label}
              </h3>
              <p className="text-gold text-sm sm:text-base">{item.hours}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
