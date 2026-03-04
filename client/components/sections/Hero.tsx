import { IMAGES } from "@/config/images";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-white pt-20 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center order-2 md:order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Connect with Your{" "}
              <span className="text-highlight">Creative</span> Mind!
            </h1>

            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Welcome to NArts (Pty) Ltd, were creativity meets customer centricity. We
              craft unique designs tailored to your needs.
            </p>

            <button
              className="btn-primary w-fit"
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Let's bring your ideas to life
            </button>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center items-center order-1 md:order-1 lg:order-2">
            <img
              src={IMAGES.hero.illustration}
              alt="Creative illustration"
              className="w-full h-auto max-w-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
