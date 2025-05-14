import { useState, useEffect, useRef } from "react";
import { testimonials } from "@/data/testimonials";

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [width, setWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const firstChild = containerRef.current.firstElementChild as HTMLElement | null;
        if (firstChild) {
          setWidth(firstChild.offsetWidth);
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold mb-4 text-gray-900 dark:text-white">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Hear from our satisfied customers about their PMC Barber experience.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div
            ref={containerRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * width}px)` }}
          >
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="min-w-full sm:min-w-1/2 md:min-w-1/3 lg:min-w-1/4 px-2"
              >
                <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-md h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover mr-3"
                    />
                    <div>
                      <h4 className="font-bold text-md sm:text-lg text-gray-900 dark:text-white">
                        {t.name}
                      </h4>
                      <div className="flex text-gold">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 sm:h-5 sm:w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 italic text-sm sm:text-base flex-grow">
                    "{t.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                  currentSlide === idx
                    ? "bg-gold"
                    : "bg-gray-300 dark:bg-gray-600"
                } transition-colors duration-300`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
