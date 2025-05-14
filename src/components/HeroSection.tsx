const HeroSection = () => {
  return (
    <section id="home" className="pt-20 relative overflow-hidden">
      <div
        className="h-screen max-w-full bg-cover bg-center relative"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&h=1080")`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-10">
          <div className="max-w-2xl text-center sm:text-left">
            <h4 className="text-gold font-medium text-xs sm:text-sm lg:text-base mb-2">
              PREMIUM GROOMING SERVICES
            </h4>
            <h1 className="font-playfair font-bold text-white mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              The Art of Precision Haircuts
            </h1>
            <p className="text-gray-200 mb-8 text-sm sm:text-base lg:text-lg">
              Experience premium grooming services in an upscale environment
              with attention to every detail. Our master barbers combine
              traditional craftsmanship with modern techniques.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center justify-center sm:justify-start gap-3 sm:gap-4">
              <a
                href="#book"
                className="px-6 sm:px-8 py-3 bg-gold text-white font-medium rounded text-center text-sm sm:text-base hover:bg-[#b38600] transition"
              >
                Book Appointment
              </a>
              <a
                href="#services"
                className="px-6 sm:px-8 py-3 border border-white text-white font-medium rounded text-center text-sm sm:text-base hover:bg-white/10 transition"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;