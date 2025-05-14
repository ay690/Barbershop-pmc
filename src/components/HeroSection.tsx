import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <section id="home" className="pt-20 relative">
      <div
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&h=1080")`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-2xl">
            <h4 className={`text-gold font-medium ${isMobile ? "text-base" : "text-lg"} mb-2`}>
              PREMIUM GROOMING SERVICES
            </h4>
            <h1 className={`font-playfair font-bold text-white mb-6 ${isMobile ? "text-3xl" : "text-6xl"}`}>
              The Art of Precision Haircuts
            </h1>
            <p className={`text-gray-200 ${isMobile ? "text-base" : "text-lg"} mb-8`}>
              Experience premium grooming services in an upscale environment
              with attention to every detail. Our master barbers combine
              traditional craftsmanship with modern techniques.
            </p>
            <div className={`flex ${isMobile ? "flex-col gap-3" : "flex-wrap gap-4"}`}>
              <a
                href="#book"
                className="px-8 py-3 bg-gold text-white font-medium rounded hover:!bg-[#b38600] transition text-center"
              >
                Book Appointment
              </a>
              <a
                href="#services"
                className="px-8 py-3 border border-white text-white font-medium rounded hover:bg-white/10 transition text-center"
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
