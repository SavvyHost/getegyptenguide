import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import DefaultImage from "../../../../public/assets/pyr.jpeg";

interface CardProps {
  imageSrc: string | StaticImageData;
  title: string;
  content: string;
  created_at: string;
  id: string;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  content,
  created_at,
  id,
}) => {
  // Fallback to default image if imageSrc is undefined, null, or an empty string
  const imageToUse = imageSrc && imageSrc !== "" ? imageSrc : DefaultImage;

  return (
    <Link href={`/blogs/${id}`} aria-label={`View blog post "${title}"`}>
      <div className="flex-shrink-0 mb-6 max-w-md mx-2 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl bg-[#FAFAFA] h-80">
        <div className="flex flex-col h-full">
          {/* Image Section - 1/2 of the card height */}
          <div className="relative h-1/2">
            <Image
              src={imageToUse}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Handle image loading errors
                console.error("Error loading img:", e);
              }}
            />
          </div>

          {/* Content Section - 1/2 of the card height */}
          <div className="flex flex-col justify-between h-1/2 p-4 bg-white">
            <h2 className="text-base md:text-xl font-segoe">{title}</h2>
            <p
              className="text-gray-700 font-light line-clamp-3 overflow-hidden"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
