import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile(); // <--- Add the hook here

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen((open) => !open);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white dark:bg-card shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-playfair font-bold text-gray-900 dark:text-white"
        >
          PMC<span className="text-gold">Barber</span>
        </a>

        {/* Desktop Nav */}
        {!isMobile && (
          <nav className="hidden md:flex space-x-8">
            {["home", "services", "gallery", "about", "contact"].map((sec) => (
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
        )}

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition mx-4"
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

        {/* Mobile Hamburger */}
        {isMobile && (
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="md:hidden text-gray-800 dark:text-gray-200 focus:outline-none"
          >
            {isOpen ? (
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {/* {isMobile && (
        <div
          className={`
            md:hidden
            absolute top-full left-0 w-full
            bg-white dark:bg-card
            transform transition-transform duration-300 ease-in-out
            ${isOpen ? "translate-y-0" : "-translate-y-full"}
          `}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {["home", "services", "gallery", "about", "contact"].map((sec) => (
              <a
                key={sec}
                href={`#${sec}`}
                className="py-2 text-gray-800 dark:text-gray-200 hover:text-gold transition"
                onClick={closeMenu}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </a>
            ))}
            <a
              href="#book"
              className="py-2 px-4 bg-gold text-white text-center rounded hover:!bg-[#b38600] transition"
              onClick={closeMenu}
            >
              Book Now
            </a>
          </div>
        </div>
      )} */}
    </header>
  );
};

export default Header;
