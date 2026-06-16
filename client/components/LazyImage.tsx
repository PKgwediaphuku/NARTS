import { useState } from "react";
import { cn } from "@/lib/utils";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  /** Aspect ratio used to reserve space for the skeleton before the image loads. */
  aspectRatio?: string;
}

/**
 * Image with a shimmering skeleton placeholder that reserves layout space and
 * blur-fades the photo in once it has decoded.
 */
const LazyImage = ({
  src,
  alt,
  aspectRatio = "3 / 4",
  className,
  style,
  ...props
}: LazyImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={cn("relative w-full", !loaded && "img-skeleton")}
      style={!loaded ? { aspectRatio } : undefined}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={cn(
          "w-full object-cover transition-[opacity,filter,transform] duration-700 ease-out",
          loaded
            ? "opacity-100 blur-0 scale-100"
            : "absolute inset-0 h-full opacity-0 blur-md scale-[1.02]",
          className,
        )}
        style={style}
        {...props}
      />
    </div>
  );
};

export default LazyImage;
