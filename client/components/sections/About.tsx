import { IMAGES } from "@/config/images";

const About = () => {
  return (
    <section
      id="about"
      className="bg-white section-spacing"
    >
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Illustration */}
          <div className="flex justify-center items-center order-1 md:order-1 lg:order-1">
            <img
              src={IMAGES.about.illustration}
              alt="Team illustration"
              className="w-full h-auto max-w-[500px]"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center order-2 md:order-2 lg:order-2">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
              About Us
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Who is NArts <span className="text-highlight">Pty Ltd</span>
            </h2>

            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              We are a creative house founded by designer Malebo Kgwediaphuku. We exist to transform ideas into visually stunning realities, be it from individuals, businesses or organizations. Rooted in creativity, innovation, customer focus, and teamwork, we craft tailored solutions across art and illustrations, print and logo design, and motion graphics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
