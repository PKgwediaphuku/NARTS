import { IMAGES } from "@/config/images";

interface ServiceCard {
  id: number;
  name: string;
  description: string;
  icon: string;
  features: string[];
}

const services: ServiceCard[] = [
  {
    id: 1,
    name: "Brand Design",
    description: "",
    icon: IMAGES.services.corelDraw,
    features: ["Logo Design", "Brand Dtyle Guide", "Business Cards", "Packaging Design", "Labels & Stickers", "Letterhead"],
  },
  {
    id: 2,
    name: "Print Design",
    description: "",
    icon: IMAGES.services.print,
    features: ["Flyers & Posters", "Billboards & Banners", "Brochures & Catalogs", "Menus", "Invoices & Forms", "Certificates", "Calendars & Book covers",  "Infographics"],
  },
  {
    id: 3,
    name: "Art & Illustration",
    description: "",
    icon: IMAGES.services.aiIllustration,
    features: ["Digital Portraits", "Traditional Sketches", "Digital Illustrations"],
  },
  {
    id: 4,
    name: "Motion Graphics",
    description: "",
    icon: IMAGES.services.afterEffects,
    features: ["Logo Animation", "2D Animation", "Explainer Videos"],
  },
  {
    id: 5,
    name: "Web Design",
    description: "",
    icon: IMAGES.services.webDesign,
    features: ["E-commerce", "Business sites", "Blog", "Portfolio", "News & Magazine", "Educational", "Forum", "Landing Page"],
  },
  {
    id: 6,
    name: "Photography",
    description: "",
    icon: IMAGES.services.photography,
    features: ["Aerial", "Events", "Graduation", "Sports", "InStudio", "Weddings", "Photomanipulation", "Colour Correction", "Colour Grading"],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-white section-spacing border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Our Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            What Our Agency <span className="text-highlight">Provides</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg border border-gray-100 p-8 hover:shadow-lg transition-shadow"
            >
              {/* Service Icon */}
              <div className="mb-6 h-32 flex items-center justify-center rounded-lg">
                <img
                  src={service.icon}
                  alt={service.name}
                  className="h-28 w-28 object-contain"
                />
              </div>

              {/* Service Info */}
              <h3 className="text-2xl font-bold mb-1">{service.name}</h3>
              {service.description && (
                <p className="text-gray-500 text-sm mb-4">{service.description}</p>
              )}

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="text-gray-600 text-sm flex items-start">
                    <span className="text-brand-yellow mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
