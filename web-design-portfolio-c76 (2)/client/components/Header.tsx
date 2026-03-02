import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Partnerships", href: "#partnerships" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Gloss effect is active whenever scrolled past 50px
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Header Bar - Background changes on scroll */}
      <div className={`transition-all duration-300 py-5 md:py-6 ${
        !isScrolled ? "bg-white border-b border-gray-100" : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex items-center justify-between min-w-0">
          {/* Logo - Fades out on scroll */}
          <div
            className={`flex items-center gap-0 whitespace-nowrap transition-all duration-300 ${
              !isScrolled ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <span className="text-2xl font-bold text-black flex-shrink-0">NasA</span>
            <span className="text-2xl font-bold flex-shrink-0" style={{ color: "#F5A623" }}>rt</span>
            <span className="text-2xl font-bold text-black flex-shrink-0">s</span>
          </div>

          {/* Desktop Navigation with Gloss Effect - Always visible */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 bg-white/30 backdrop-blur-md rounded-full px-8 lg:px-10 py-4 border border-white/50 transition-all duration-300 font-medium flex-shrink">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href.slice(1))}
                className="text-base text-gray-700 hover:text-brand-purple transition-colors whitespace-nowrap font-semibold"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Contact Button - Fades out on scroll */}
          <button
            onClick={() => scrollToSection("contact")}
            className={`btn-primary hidden md:block transition-all duration-300 flex-shrink-0 ${
              !isScrolled ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            Get in Touch
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-3"
          >
            {isMobileMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-6 flex flex-col gap-5">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href.slice(1))}
                className="text-base text-gray-700 hover:text-brand-purple transition-colors text-left font-medium"
              >
                {item.label}
              </button>
            ))}
            <button className="btn-primary w-full">Get in Touch</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
