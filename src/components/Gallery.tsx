import { useState, useEffect } from "react";
import { galleryItems } from "@/data/gallery";

const GallerySection = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const gallerySection = document.getElementById("gallery");
      if (gallerySection) {
        const rect = gallerySection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setFadeIn(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="gallery"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-gray-900 dark:text-white">
            Our Gallery
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Showcasing our finest work and the craft of precision haircuts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-lg shadow-md hover:shadow-xl transform transition-all duration-500 ease-out ${
                fadeIn
                  ? "fade-in opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
