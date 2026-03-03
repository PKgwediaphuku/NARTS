import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { IMAGES } from "@/config/images";

const projects = [
  { id: 1, image: IMAGES.projects.project1, title: "Project 1" },
  { id: 2, image: IMAGES.projects.project2, title: "Project 2" },
  { id: 3, image: IMAGES.projects.project3, title: "Project 3" },
  { id: 4, image: IMAGES.projects.project4, title: "Project 4" },
];

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [dragStart, setDragStart] = useState(0);
  const [dragEnd, setDragEnd] = useState(0);

  // Duplicate projects for seamless infinite scroll
  const duplicatedProjects = [...projects, ...projects];

  const handleProjectClick = (index: number) => {
    setSelectedProjectIndex(index % projects.length);
    setIsModalOpen(true);
  };

  const handlePrevProject = () => {
    setSelectedProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNextProject = () => {
    setSelectedProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    const clientX = "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    setDragStart(clientX);
  };

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    const clientX = "changedTouches" in e ? e.changedTouches[0].clientX : (e as React.MouseEvent).clientX;
    setDragEnd(clientX);

    const dragDistance = dragStart - clientX;
    const threshold = 50; // Minimum drag distance to register as swipe

    if (dragDistance > threshold) {
      // Dragged left - show next project
      handleNextProject();
    } else if (dragDistance < -threshold) {
      // Dragged right - show previous project
      handlePrevProject();
    }
  };

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

      {/* Desktop Carousel Container - Auto-scrolling */}
      <div className="relative overflow-hidden bg-white py-8 hidden md:block">
        <div className="flex gap-6 animate-scroll-left">
          {duplicatedProjects.map((project, index) => (
            <div
              key={`${project.id}-${index}`}
              className="flex-shrink-0 w-96 h-[480px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="relative w-full h-full group cursor-pointer" onClick={() => handleProjectClick(index)}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors rounded-xl">
                  <span className="text-white opacity-0 group-hover:opacity-100 text-sm font-semibold transition-opacity">
                    Click to expand
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Carousel Container - Manual controls with drag/swipe */}
      <div
        className="relative overflow-hidden bg-white py-8 md:hidden select-none cursor-grab active:cursor-grabbing"
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
      >
        <div className="flex gap-6 justify-center pointer-events-none">
          {projects.map((project, index) => (
            <div
              key={`${project.id}-mobile`}
              className={`flex-shrink-0 w-72 h-80 rounded-xl overflow-hidden shadow-lg transition-all cursor-pointer group pointer-events-auto ${
                index === selectedProjectIndex ? "ring-2 ring-brand-purple" : "opacity-50"
              }`}
              onClick={() => {
                setSelectedProjectIndex(index);
                setTimeout(() => setIsModalOpen(true), 100);
              }}
            >
              <div className="relative w-full h-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform group-active:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-active:bg-black/20 transition-colors rounded-xl">
                  <span className="text-white opacity-0 group-active:opacity-100 text-sm font-semibold transition-opacity">
                    Click to expand
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Navigation Controls */}
        <div className="flex items-center justify-between mt-6 px-4">
          <button
            onClick={handlePrevProject}
            className="bg-brand-purple hover:bg-purple-900 text-white rounded-full p-2 transition-colors"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <span className="text-sm text-gray-500">
            {selectedProjectIndex + 1} / {projects.length}
          </span>

          <button
            onClick={handleNextProject}
            className="bg-brand-purple hover:bg-purple-900 text-white rounded-full p-2 transition-colors"
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 z-51 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors shadow-lg"
            >
              <X className="w-6 h-6 text-black" />
            </button>

            {/* Image Container */}
            <div className="flex items-center justify-center w-full h-full px-4 py-12">
              <img
                src={projects[selectedProjectIndex].image}
                alt={projects[selectedProjectIndex].title}
                className="max-w-full max-h-[calc(100vh-120px)] object-contain rounded-lg shadow-2xl"
              />
            </div>

            {/* Navigation Arrows in Modal */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6 bg-black/50 backdrop-blur px-6 py-3 rounded-full">
              <button
                onClick={handlePrevProject}
                className="bg-white hover:bg-gray-100 text-black rounded-full p-2 transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <span className="text-white text-sm font-semibold">
                {selectedProjectIndex + 1} / {projects.length}
              </span>
              <button
                onClick={handleNextProject}
                className="bg-white hover:bg-gray-100 text-black rounded-full p-2 transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-384px * 4 - 1.5rem * 4));
          }
        }

        .animate-scroll-left {
          animation: scroll-left 50s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Projects;
