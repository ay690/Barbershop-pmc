const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Image */}
          <div>
            <img
              src="https://pmcbarber.devfrend.com/images/pmcbarber/hero.webp"
              alt="Master Barber at PMC"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h4 className="text-gold text-xs sm:text-sm uppercase font-medium mb-2 tracking-widest">
              About Us
            </h4>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold mb-4 text-gray-900 dark:text-white">
              Precision & Craftsmanship Since 2005
            </h2>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-400 mb-4">
              PMC Barber was founded with a commitment to reviving the art of
              traditional barbering while incorporating modern techniques and
              styles. Our master barbers have years of experience and a passion
              for their craft.
            </p>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-400 mb-6">
              We believe that a great haircut is more than just a service—it's
              an experience. That’s why we've created an environment that
              combines luxury, comfort, and professionalism to ensure every
              client leaves feeling refreshed and confident.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <div className="text-gold mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-playfair font-bold mb-1 text-gray-900 dark:text-white">
                  Premium Quality
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-400">
                  We use only the finest products and tools for every service.
                </p>
              </div>

              <div>
                <div className="text-gold mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-playfair font-bold mb-1 text-gray-900 dark:text-white">
                  Certified Barbers
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-400">
                  Our team consists of professionally trained and certified
                  barbers.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-gold text-white font-medium rounded hover:!bg-[#b38600] transition text-sm sm:text-base"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;