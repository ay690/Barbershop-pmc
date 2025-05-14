import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen((open) => !open);
  const closeMenu = () => setIsOpen(false);

  const navLinks = ["home", "services", "gallery", "pricing", "about", "contact"];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white dark:bg-card shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-playfair font-bold text-gray-900 dark:text-white"
        >
          PMC<span className="text-gold">Barber</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              className="nav-link text-gray-800 dark:text-gray-200 hover:text-gold transition"
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </a>
          ))}
          <a
            href="#book"
            className="px-3 py-1 bg-gold text-white rounded hover:!bg-[#b38600] transition"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile Menu Toggle & Theme */}
        <div className="flex items-center space-x-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>

          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && isMobile && (
          <nav className="absolute top-full left-0 w-full bg-white dark:bg-card shadow-lg md:hidden">
            <ul className="flex flex-col space-y-2 p-4">
              {navLinks.map((sec) => (
                <li key={sec} onClick={closeMenu}>
                  <a
                    href={`#${sec}`}
                    className="block text-gray-800 dark:text-gray-200 py-2 hover:text-gold transition"
                  >
                    {sec.charAt(0).toUpperCase() + sec.slice(1)}
                  </a>
                </li>
              ))}
              <li onClick={closeMenu}>
                <a
                  href="#book"
                  className="block mt-2 px-4 py-2 bg-gold text-white rounded hover:!bg-[#b38600] transition"
                >
                  Book Now
                </a>
              </li>
            </ul>
          </nav>
        )}
        
      </div>
    </header>
  );
};

export default Header;
