import { IMAGES } from "@/config/images";

const Community = () => {
  return (
    <section
      id="partnerships"
      className="bg-white section-spacing border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Illustration */}
          <div className="flex justify-center items-center order-1 md:order-1 lg:order-1">
            <img
              src={IMAGES.community.illustration}
              alt="Community partnership illustration"
              className="w-full h-auto max-w-[500px]"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center order-2 md:order-2 lg:order-2">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
              Our Contribution
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Community Partnership <span className="text-highlight">Programme</span>
            </h2>

            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              At NasArts, we believe in giving back. That's why each month we partner with local NPOs, schools, and social initiatives that are making a difference. Through our pro bono creative services, we help amplify their cause.
            </p>

            <button
              className="btn-primary w-fit"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeWQkvRu0OKG01l9mfA3J7UGEtx80Wzdg3AfwowNA9pptB5mA/viewform?usp=header', '_blank')}
            >
              Apply now & let's make an impact!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
