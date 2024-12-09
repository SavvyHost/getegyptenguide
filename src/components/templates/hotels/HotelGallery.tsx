"use client";

import { useEffect, useState } from "react";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Image from "next/image";
import { ImageIcon } from "lucide-react";

interface HotelImage {
  id: number;
  url: string;
  alt: string;
}

interface HotelGalleryProps {
  images: HotelImage[];
}

export default function HotelGallery({ images }: HotelGalleryProps) {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!isInitialized) {
      NativeFancybox.bind("[data-fancybox='gallery']", {
        compact: false,
        idle: false,
        animated: true,
        showClass: false,
        hideClass: false,
        dragToClose: false,
        contentClick: "iterateZoom",
        Images: {
          zoom: true,
          Panzoom: {
            maxScale: 2,
          },
        },
        Toolbar: {
          display: {
            left: ["infobar"],
            middle: [
              "zoomIn",
              "zoomOut",
              "toggle1to1",
              "rotateCCW",
              "rotateCW",
              "flipX",
              "flipY",
            ],
            right: ["slideshow", "thumbs", "close"],
          },
        },
      });
      setIsInitialized(true);
    }

    return () => {
      if (isInitialized) {
        NativeFancybox.destroy();
      }
    };
  }, [isInitialized]);

  // Check if there are fewer than 5 images, if so, don't render the gallery
  if (images.length < 5) {
    return null; // Don't render the gallery if there are less than 5 images
  }

  const displayedImages = images.slice(0, 5);
  const remainingCount = Math.max(0, images.length - 5);

  return (
    <div className="mb-8">
      {/* Mobile Layout */}
      <div className="sm:hidden grid grid-cols-1 gap-2">
        {/* Main large image at the top */}
        <div className="relative hidden">
          <GalleryImage image={displayedImages[0]} index={0} priority={true} />
        </div>

        {/* Remaining 4 images in a single row */}
        <div className="grid grid-cols-4 gap-2">
          {displayedImages.slice(1, 5).map((image, idx) => (
            <div key={image.id} className="relative">
              <GalleryImage image={image} index={idx + 1} priority={false} />
            </div>
          ))}
        </div>

        {/* "See More" Image */}
        <div className="relative">
          <a
            href="#"
            data-fancybox="gallery"
            className="relative block w-full h-full overflow-hidden rounded-lg group"
          >
            <Image
              src={displayedImages[4].url}
              alt={displayedImages[4].alt}
              width={1000}
              height={1000}
              priority={true}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />

            {/* Overlay for more photos on the "See More" image */}
            {remainingCount > 0 && (
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white transition-opacity group-hover:opacity-90">
                <ImageIcon className="w-8 h-8 mb-2" />
                <span className="text-xl font-semibold">+{remainingCount}</span>
                <span className="text-sm">More Photos</span>
              </div>
            )}
          </a>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden sm:grid grid-cols-4 gap-2">
        {/* Main large image on the left */}
        <div className="col-span-2 row-span-2 relative">
          <GalleryImage image={displayedImages[0]} index={0} priority={true} />
        </div>

        {/* Right side grid */}
        <div className="col-span-2 grid grid-cols-2 gap-2">
          {displayedImages.slice(1, 4).map((image, idx) => (
            <div key={image.id} className="relative">
              <GalleryImage image={image} index={idx + 1} priority={false} />
            </div>
          ))}

          {/* Fifth image - "More Photos" link */}
          <div className="relative">
            <a
              href="#"
              data-fancybox="gallery"
              data-caption={displayedImages[4].alt}
              className="relative block w-full h-full overflow-hidden rounded-lg group"
            >
              <Image
                src={displayedImages[4].url}
                alt={displayedImages[4].alt}
                width={1000}
                height={1000}
                priority={true}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* Overlay for more photos on the fifth image */}
              {remainingCount > 0 && (
                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white transition-opacity group-hover:opacity-90">
                  <ImageIcon className="w-8 h-8 mb-2" />
                  <span className="text-xl font-semibold">
                    +{remainingCount}
                  </span>
                  <span className="text-sm">More Photos</span>
                </div>
              )}
            </a>
          </div>
        </div>
      </div>

      {/* Hidden images for gallery */}
      <div className="sr-only">
        {images.slice(5).map((image) => (
          <a
            key={image.id}
            data-fancybox="gallery"
            href={image.url}
            data-caption={image.alt}
            aria-hidden="true"
          >
            <Image
              src={image.url}
              alt={image.alt}
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </a>
        ))}
      </div>
    </div>
  );
}

interface GalleryImageProps {
  image: HotelImage;
  index: number;
  priority?: boolean;
}

function GalleryImage({ image, index, priority = false }: GalleryImageProps) {
  return (
    <a
      data-fancybox="gallery"
      href={image.url}
      data-caption={image.alt}
      className="relative block w-full h-full overflow-hidden rounded-lg group"
    >
      <Image
        src={image.url}
        alt={image.alt}
        width={1000}
        height={1000}
        priority={priority}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
    </a>
  );
}
