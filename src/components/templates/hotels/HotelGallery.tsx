"use client";

import { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Image from "next/image";

interface HotelImage {
  id: number;
  url: string;
  alt: string;
}

interface HotelGalleryProps {
  images: HotelImage[];
}

export default function HotelGallery({ images }: HotelGalleryProps) {
  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {
      // Custom options
    });

    return () => {
      Fancybox.destroy();
    };
  }, []);

  return (
    <div className="grid grid-cols-4 gap-2 mb-8">
      {images.slice(0, 5).map((image, index) => (
        <a
          key={image.id}
          data-fancybox="gallery"
          href={image.url}
          className={`relative overflow-hidden rounded-lg ${
            index === 0 ? "col-span-2 row-span-2" : ""
          }`}
        >
          <Image
            src={image.url}
            width={200}
            height={200}
            alt={image.alt}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </a>
      ))}
    </div>
  );
}
