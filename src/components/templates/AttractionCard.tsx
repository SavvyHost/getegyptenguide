import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
<<<<<<< HEAD
import { FaHeart, FaRegHeart } from "react-icons/fa";
=======
import { FaStar, FaRegStar, FaHeart, FaRegHeart } from "react-icons/fa";
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94
import { useWishlist } from "@/contexts/wishlist-context";
import { AttractionCardProps } from "@/types/attraction";

const AttractionCard: React.FC<
<<<<<<< HEAD
  AttractionCardProps & {
    isEditMode?: boolean;
  }
=======
  AttractionCardProps & { onRemove?: () => void }
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94
> = ({
  id,
  type,
  title,
  location,
  price,
  image,
  rating,
  duration,
  ageRange,
  isFeatured = false,
  isOnSale = true,
  age_range,
  run,
  min_price,
  main_image,
  destination,
<<<<<<< HEAD
  isEditMode = false,
=======
  onRemove,
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94
}) => {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const router = useRouter();
  const cardRef = useRef<HTMLDivElement>(null);
  const startPos = useRef<{ x: number; y: number } | null>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    startPos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = (e: React.MouseEvent) => {
<<<<<<< HEAD
    if (startPos.current && !isEditMode) {
=======
    if (startPos.current) {
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94
      const dx = Math.abs(e.clientX - startPos.current.x);
      const dy = Math.abs(e.clientY - startPos.current.y);

      if (dx < 5 && dy < 5) {
        const target = e.target as HTMLElement;
        if (!target.closest("button")) {
          handleNavigate();
        }
      }
    }
    startPos.current = null;
  };

  const handleNavigate = () => {
    router.push(
      `${type === "tour_package" ? "/top-packages" : "/top-excursions"}/${id}`
    );
  };

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const attraction = {
      id,
      title,
      location,
      price,
      image,
      rating,
      duration,
      ageRange,
      isFeatured,
      isOnSale,
      age_range,
      run,
      min_price,
      main_image,
      destination,
      type,
    };

    toggleWishlist(attraction);
<<<<<<< HEAD
=======

    // Check if the onRemove callback is provided
    if (onRemove && isInWishlist(id)) {
      onRemove();
    }
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94
  };

  return (
    <div
      ref={cardRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
<<<<<<< HEAD
      className={`group h-full flex flex-col mb-3 border border-gray-300 rounded-none bg-accent-white transition-shadow duration-300 overflow-hidden ${
        !isEditMode ? "cursor-pointer" : ""
      }`}
=======
      className="group h-full flex flex-col mb-3 bg-accent-white rounded-none shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer"
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94
    >
      <div className="relative">
        {(isFeatured || isOnSale) && (
          <div
            className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-none text-accent-white text-xs font-semibold ${
              isFeatured ? "bg-primary-light" : "bg-primary-light"
            }`}
          >
            {isFeatured ? "Featured" : "On Sale"}
          </div>
        )}

<<<<<<< HEAD
        {!isEditMode && (
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={handleWishlistClick}
              className="p-2 rounded-full bg-white/80 hover:bg-white transition-colors duration-200"
              aria-label={
                isInWishlist(id) ? "Remove from wishlist" : "Add to wishlist"
              }
            >
              {isInWishlist(id) ? (
                <FaHeart className="text-red-500 w-6 h-6" />
              ) : (
                <FaRegHeart className="text-gray-600 w-6 h-6" />
              )}
            </button>
          </div>
        )}
=======
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={handleWishlistClick}
            className="p-2 rounded-full bg-white/80 hover:bg-white transition-colors duration-200"
            aria-label={
              isInWishlist(id) ? "Remove from wishlist" : "Add to wishlist"
            }
          >
            {isInWishlist(id) ? (
              <FaHeart className="text-red-500 w-6 h-6" />
            ) : (
              <FaRegHeart className="text-gray-600 w-6 h-6" />
            )}
          </button>
        </div>
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94

        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image || main_image?.url}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            priority={false}
          />
        </div>
      </div>

      <div className="flex-1 flex flex-col p-4">
        <h3 className="text-xl font-semibold text-primary-dark mb-2 truncate">
          {title}
        </h3>
        {location && (
          <p className="text-gray-600 mb-2 truncate text-sm">{location}</p>
        )}

<<<<<<< HEAD
=======
        {/* Add ratings if required */}
        {/* <div className="flex items-center mb-2">
          {Array.from({ length: 5 }, (_, index) =>
            index < 2 ? (
              <FaStar key={index} className="text-accent-yellow" />
            ) : (
              <FaRegStar key={index} className="text-gray-300" />
            )
          )}
        </div> */}

>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94
        <div className="text-sm text-gray-600 mb-1">
          <p>
            Duration: {duration} {type === "tour_package" ? "days" : "hours"}
          </p>
<<<<<<< HEAD
=======
          {/* <p>Age Range: {ageRange || age_range}</p> */}
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94
        </div>

        <div className="text-sm text-gray-600 mb-1">
          {destination && (
            <p className="text-sm text-gray-600 mb-1">
              Location: {destination}
            </p>
          )}
<<<<<<< HEAD
=======
          {/* {run && <p className="text-sm text-gray-600 mb-1">Run: {run}</p>} */}
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94
        </div>

        <p className="text-lg font-bold text-primary-light mt-auto">
          From ${price || min_price}
        </p>
      </div>
    </div>
  );
};

export default AttractionCard;
