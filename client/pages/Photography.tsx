import { useState, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { netlifyImage } from "@/lib/image";
import Header from "@/components/Header";
import LazyImage from "@/components/LazyImage";
import "./Photography.css";

type Category = "Graduation" | "Sports" | "Colour Correction & Grading";

interface Photo {
  src: string;
  alt: string;
}

interface ColourEdit {
  before: string;
  after: string;
  alt: string;
}

const gradPhotos: Photo[] = [
  { src: "/images/photography/20260417165428_IMG_1765.jpg.jpeg", alt: "Graduation" },
  { src: "/images/photography/20260417171229_IMG_1394.jpg.jpeg", alt: "Graduation" },
  { src: "/images/photography/20260417173126_IMG_1822.jpg.jpeg", alt: "Graduation" },
  { src: "/images/photography/20260417173949_IMG_1835-BW.jpg.jpeg", alt: "Graduation" },
  { src: "/images/photography/20260417173952_IMG_1413.jpg.jpeg", alt: "Graduation" },
];

const sportsPhotos: Photo[] = [
  { src: "/images/photography/IMG_9038.JPG.jpg", alt: "Sports photography — photo 1" },
  { src: "/images/photography/IMG_9040.JPG.jpg", alt: "Sports photography — photo 2" },
  { src: "/images/photography/IMG_9041.JPG.jpg", alt: "Sports photography — photo 3" },
  { src: "/images/photography/IMG_9045.JPG.jpg", alt: "Sports photography — photo 4" },
];

const colourEdits: ColourEdit[] = [
  // Add before/after pairs here as { before: "/path/to/before.jpg", after: "/path/to/after.jpg", alt: "..." }
];

const CATEGORIES: Category[] = ["Graduation", "Sports", "Colour Correction & Grading"];

const BeforeAfterSlider = ({ before, after, alt }: ColourEdit) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updateSlider = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pos = Math.max(2, Math.min(98, ((clientX - rect.left) / rect.width) * 100));
    setSliderPos(pos);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative select-none overflow-hidden rounded-xl"
      style={{ cursor: "col-resize" }}
      onMouseDown={() => {
        isDragging.current = true;
      }}
      onMouseMove={(e) => {
        if (isDragging.current) updateSlider(e.clientX);
      }}
      onMouseUp={() => {
        isDragging.current = false;
      }}
      onMouseLeave={() => {
        isDragging.current = false;
      }}
      onTouchMove={(e) => {
        updateSlider(e.touches[0].clientX);
      }}
    >
      {/* After image — base layer */}
      <img
        src={netlifyImage(after, { w: 1200 })}
        alt={`${alt} — After`}
        className="w-full block"
        loading="lazy"
        draggable={false}
      />

      {/* Before image — clipped to the left of the slider */}
      <img
        src={netlifyImage(before, { w: 1200 })}
        alt={`${alt} — Before`}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        loading="lazy"
        draggable={false}
      />

      {/* Divider handle */}
      <div
        className="absolute top-0 bottom-0 pointer-events-none"
        style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
      >
        <div className="h-full w-0.5 bg-white/90 shadow-[0_0_6px_rgba(0,0,0,0.35)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
          <ChevronLeft className="w-3.5 h-3.5 text-gray-600 -mr-0.5" />
          <ChevronRight className="w-3.5 h-3.5 text-gray-600 -ml-0.5" />
        </div>
      </div>

      {/* Labels */}
      <span className="absolute top-3 left-3 text-xs text-white font-semibold bg-black/50 px-2.5 py-1 rounded pointer-events-none">
        Before
      </span>
      <span className="absolute top-3 right-3 text-xs text-white font-semibold bg-black/50 px-2.5 py-1 rounded pointer-events-none">
        After
      </span>
    </div>
  );
};

const Photography = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("Graduation");

  const currentPhotos =
    activeCategory === "Graduation"
      ? gradPhotos
      : activeCategory === "Sports"
        ? sportsPhotos
        : [];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-7xl mx-auto container-padding pt-36 pb-20">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-highlight">Portfolio</span>
          </h1>
        </div>

        <nav className="flex flex-wrap justify-center gap-3 mb-12" aria-label="Photography collections">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-purple ${
                activeCategory === cat
                  ? "bg-brand-yellow text-white shadow-sm"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>

        <section aria-label={activeCategory} key={activeCategory}>
          {activeCategory !== "Colour Correction & Grading" ? (
            <div className={`journal-gallery${activeCategory === "Sports" ? " journal-gallery-sports" : ""}`}>
              {currentPhotos.map((photo, index) => (
                <figure key={photo.src} className="journal-frame" style={{ animationDelay: `${index * 90}ms` }}>
                  <div className="journal-image">
                    <LazyImage
                      src={netlifyImage(photo.src, { w: 1200 })}
                      alt={photo.alt}
                      aspectRatio={activeCategory === "Sports" ? "2 / 3" : undefined}
                    />
                  </div>
                </figure>
              ))}
            </div>
          ) : (
            <div className="max-w-3xl mx-auto grid gap-10">
              {colourEdits.map((edit, i) => <BeforeAfterSlider key={i} {...edit} />)}
            </div>
          )}
        </section>

        <footer className="text-center mt-16">
          <p className="text-gray-400 text-sm font-medium uppercase tracking-wide">
            More work coming soon
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Photography;
