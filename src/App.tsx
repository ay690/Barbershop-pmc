import { useEffect } from "react";
import { useTheme } from "./context/ThemeContext";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/Services";
import GallerySection from "./components/Gallery";
import AboutSection from "./components/AboutSection";
import TestimonialsSection from "./components/Testimonials";
import BookingSection from "./components/BookingSection";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";
import FAQSection from "./components/FAQ";
import PricingSection from "./components/PricingSection";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Smooth scrolling for navigation links
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        e.preventDefault();

        const targetId = target.getAttribute("href");
        if (targetId === "#") return;

        const targetElement = document.querySelector(targetId as string);
        if (targetElement) {
          window.scrollTo({
            top: (targetElement as HTMLElement).offsetTop - 80, // Offset for header
            behavior: "smooth",
          });
        }
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <AboutSection />
      <PricingSection />
      <BookingSection />
      <FAQSection />
      <ScrollToTop />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
