import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { netlifyImage } from "@/lib/image";

interface Photo {
  src: string;
  alt: string;
}

const photos: Photo[] = [
  { src: "/images/photography/20260417165428_IMG_1765.jpg.jpeg", alt: "Photography" },
  { src: "/images/photography/20260417171229_IMG_1394.jpg.jpeg", alt: "Photography" },
  { src: "/images/photography/20260417173126_IMG_1822.jpg.jpeg", alt: "Photography" },
  { src: "/images/photography/20260417173949_IMG_1835-BW.jpg.jpeg", alt: "Photography" },
  { src: "/images/photography/20260417173952_IMG_1413.jpg.jpeg", alt: "Photography" },
];

const Photography = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto container-padding flex items-center justify-between py-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-gray-700 hover:text-brand-purple transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
          <div className="flex items-center gap-0">
            <span className="text-xl font-bold text-black">NasA</span>
            <span className="text-xl font-bold" style={{ color: "#F5A623" }}>
              rt
            </span>
            <span className="text-xl font-bold text-black">s</span>
          </div>
          <div className="w-16" />
        </div>
      </div>

      {/* Page Content */}
      <div className="pt-32 pb-24">
        <div className="max-w-5xl mx-auto container-padding">
          {/* Title */}
          <div className="mb-16">
            <h1 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900">
              Photography
            </h1>
          </div>

          {/* Minimalist gallery */}
          <div className="columns-1 md:columns-2 gap-6 space-y-6">
            {photos.map((photo, index) => (
              <div key={index} className="break-inside-avoid overflow-hidden">
                <img
                  src={netlifyImage(photo.src, { w: 1000 })}
                  alt={photo.alt}
                  className="w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photography;
