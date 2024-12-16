import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import DefaultImage from "../../../../public/assets/pyr.jpeg";

const Card = ({ imageSrc, title, content, created_at, id }) => {
  const [formattedDate, setFormattedDate] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const startPos = useRef(null);

  // Format date on mount
  useEffect(() => {
    setFormattedDate(
      new Date(created_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );
  }, [created_at]);

  // Image source fallback
  const imageToUse = imageSrc && imageSrc !== "" ? imageSrc : DefaultImage;

  // Handle mouse or touch interactions
  const handleMouseDown = (e) => {
    startPos.current = { x: e.clientX || e.touches?.[0]?.clientX };
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (startPos.current) {
      const currentX = e.clientX || e.touches?.[0]?.clientX;
      if (Math.abs(currentX - startPos.current.x) > 5) {
        setIsDragging(true);
      }
    }
  };

  const handleMouseUp = (e) => {
    if (!isDragging) {
      // Execute link navigation if no drag was detected
      const targetUrl = `/blogs/${id}`;
      window.location.href = targetUrl;
    }
    startPos.current = null;
    setIsDragging(false);
  };

  return (
    <div
      className="group relative overflow-hidden rounded-none bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchMove={handleMouseMove}
      onTouchEnd={handleMouseUp}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageToUse}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="p-6">
        <div className="mb-3 text-sm font-medium text-accent-yellow">
          {formattedDate}
        </div>

        <div>
          <h3 className="mb-4 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-accent-yellow">
            {title}
          </h3>
        </div>

        <div className="mt-4 flex items-center text-sm font-medium text-accent-yellow">
          Read More
          <ArrowRight className="m-2" />
        </div>
      </div>
    </div>
  );
};

export default Card;
