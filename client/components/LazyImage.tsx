import { useState } from "react";
import { cn } from "@/lib/utils";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  /** Aspect ratio used to reserve space for the skeleton before the image loads. */
  aspectRatio?: string;
  /**
   * Fill the parent element instead of releasing to the image's natural size on
   * load. Use inside fixed-size containers (cards, icon slots) where the parent
   * already constrains the dimensions.
   */
  fill?: boolean;
  /** Extra classes for the wrapper element (sizing, max-width, rounding). */
  wrapperClassName?: string;
}

/**
 * Image with a shimmering skeleton placeholder that reserves layout space and
 * blur-fades the photo in once it has decoded.
 */
const LazyImage = ({
  src,
  alt,
  aspectRatio = "3 / 4",
  fill = false,
  wrapperClassName,
  className,
  style,
  ...props
}: LazyImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={cn(
        "relative w-full",
        fill && "h-full",
        !loaded && "img-skeleton",
        wrapperClassName,
      )}
      // In `fill` mode the parent constrains the height, so no reserved ratio is
      // needed. Otherwise reserve space while loading to avoid layout shift.
      style={!loaded && !fill ? { aspectRatio } : undefined}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={cn(
          "w-full object-cover transition-[opacity,filter,transform] duration-700 ease-out",
          // Cover the wrapper while loading (and always, in fill mode) so the
          // skeleton stays hidden behind the image.
          (fill || !loaded) && "absolute inset-0 h-full",
          loaded
            ? "opacity-100 blur-0 scale-100"
            : "opacity-0 blur-md scale-[1.02]",
          className,
        )}
        style={style}
        {...props}
      />
    </div>
  );
};

export default LazyImage;
