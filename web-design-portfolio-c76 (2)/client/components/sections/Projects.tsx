import { IMAGES } from "@/config/images";

const projects = [
  { id: 1, image: IMAGES.projects.project1, title: "Project 1" },
  { id: 2, image: IMAGES.projects.project2, title: "Project 2" },
  { id: 3, image: IMAGES.projects.project3, title: "Project 3" },
  { id: 4, image: IMAGES.projects.project4, title: "Project 4" },
];

const Projects = () => {
  // Duplicate projects for seamless infinite scroll
  const duplicatedProjects = [...projects, ...projects];

  return (
    <section
      id="projects"
      className="bg-white section-spacing overflow-hidden"
    >
      <div className="max-w-7xl mx-auto container-padding mb-12">
        {/* Section Header */}
        <div className="text-center">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Our Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            See Our Recent <span className="text-highlight">Projects</span>
          </h2>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative overflow-hidden bg-white py-8">
        <div className="flex gap-6 animate-scroll-left">
          {duplicatedProjects.map((project, index) => (
            <div
              key={`${project.id}-${index}`}
              className="flex-shrink-0 w-72 h-96 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-305px * 4 - 1.5rem * 4));
          }
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Projects;
