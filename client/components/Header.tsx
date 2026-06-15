import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Partnerships", href: "#partnerships" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);

    // When not on the home page, navigate there with the target section as a
    // hash; the effect below scrolls to it once the home page has rendered.
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll to the hash target after arriving on the home page from another route.
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: "smooth" }), 0);
      }
    }
  }, [location]);

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
      <div className={`transition-colors duration-500 ease-in-out py-5 md:py-6 border-b ${
        !isScrolled
          ? "bg-white border-gray-100"
          : "bg-transparent border-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex items-center justify-between min-w-0">
          {/* Logo - Fades out on scroll */}
          <div
            className={`flex items-center gap-0 whitespace-nowrap transition-opacity duration-500 ease-in-out ${
              !isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <span className="text-2xl font-bold text-black flex-shrink-0">NasA</span>
            <span className="text-2xl font-bold flex-shrink-0" style={{ color: "#F5A623" }}>rt</span>
            <span className="text-2xl font-bold text-black flex-shrink-0">s</span>
          </div>

          {/* Desktop Navigation with Gloss Effect - Always visible */}
          <div className="hidden md:flex items-center gap-1.5 lg:gap-2 xl:gap-3 bg-white/30 backdrop-blur-md rounded-full px-3 lg:px-4 xl:px-5 py-3 border border-white/50 transition-all duration-300 font-medium flex-shrink">
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

          {/* Contact Button - Visible on normal desktop screens */}
          <button
            onClick={() => window.open('https://api.whatsapp.com/send/?phone=27742448556&text&type=phone_number&app_absent=0', '_blank')}
            className={`btn-primary hidden md:inline-flex transition-opacity duration-500 ease-in-out flex-shrink-0 ${
              !isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
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
            <button
              onClick={() => window.open('https://api.whatsapp.com/send/?phone=27742448556&text&type=phone_number&app_absent=0', '_blank')}
              className="btn-primary w-full"
            >
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
