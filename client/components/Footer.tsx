const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto container-padding py-12 md:py-16">
        {/* Logo Section */}
        <div className="flex justify-center mb-8 md:mb-12">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F624c136585d54b15b0e5a99ac392cf54%2F3d49f0913b1849fe8abff420d0ca3b18?format=webp&width=800&height=1200"
            alt="NArts Logo"
            className="h-24 md:h-32 w-auto"
          />
        </div>

        {/* Copyright and Links - Horizontal */}
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 text-xs md:text-sm">
          <p className="text-gray-600">
            © NArts (Pty) Ltd. {currentYear} All Rights Reserved
          </p>
          <span className="text-gray-400">|</span>
          <a
            href="#"
            className="text-gray-600 hover:text-brand-purple transition-colors"
          >
            Terms and Conditions
          </a>
          <span className="text-gray-400">|</span>
          <a
            href="#"
            className="text-gray-600 hover:text-brand-purple transition-colors"
          >
            CSI Policy
          </a>
          <span className="text-gray-400">|</span>
          <a
            href="#"
            className="text-gray-600 hover:text-brand-purple transition-colors"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
