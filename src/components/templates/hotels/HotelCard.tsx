"use client";

import { useRouter } from "next/navigation";
import { Heart, MapPin, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface HotelCardProps {
  id: number;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  distance: string;
  price: number;
  originalPrice: number;
  taxes: number;
  nights: number;
  guests: number;
  imageUrl: string;
  dealType?: string;
  roomType: string;
  bedInfo: string;
}

export default function HotelCard({
  id,
  name,
  location,
  rating,
  reviews,
  distance,
  price,
  originalPrice,
  taxes,
  nights,
  guests,
  imageUrl,
  dealType,
  roomType,
  bedInfo,
}: HotelCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/hotels/${id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="flex flex-col sm:flex-row max-w-4xl my-2 cursor-pointer rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden"
    >
      {/* Image Section */}
      <div className="relative w-full sm:w-1/3 h-48 sm:h-64">
        <Image src={imageUrl} alt={name} fill className="object-cover" />
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
          className="absolute right-3 top-3 rounded-full bg-white p-2 shadow-md transition-colors hover:bg-gray-100"
        >
          <Heart
            className={`h-5 w-5 ${
              isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"
            }`}
          />
        </button>
      </div>

      {/* Content Section */}
      <div className="w-full sm:w-2/3 p-3 flex flex-col justify-between">
        <div>
          <div className="mb-2 flex flex-col sm:flex-row items-start justify-between">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-semibold text-primary-dark">
                  {name}
                </h2>
                <div className="flex items-center">
                  {[...Array(Math.floor(rating))].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
              <div className="mt-1 flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="h-4 w-4" />
                <span>{location}</span>
                <span className="hidden sm:inline text-gray-400">•</span>
                <span className="hidden sm:inline">{distance} from centre</span>
              </div>
            </div>
            <div className="mt-2 sm:mt-0 text-right">
              <div className="flex items-center gap-1">
                <span className="rounded-md bg-primary-light px-2 py-1 text-sm font-medium text-white">
                  {rating}
                </span>
                <div className="flex flex-col text-sm">
                  <span className="font-medium">Good</span>
                  <span className="text-gray-500">{reviews} reviews</span>
                </div>
              </div>
            </div>
          </div>

          {dealType && (
            <span className="mb-2 inline-block rounded-md bg-primary-dark px-2 py-1 text-xs font-medium text-white">
              {dealType}
            </span>
          )}

          <div>
            <h3 className="font-medium text-primary-dark text-sm">
              {roomType}
            </h3>
            <p className="text-sm text-gray-600">{bedInfo}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-end justify-between border-t pt-3">
          <div className="text-sm mb-2 sm:mb-0">
            <p>
              {nights} nights, {guests} adults
            </p>
          </div>
          <div className="text-right">
            <div className="flex items-center justify-end gap-2">
              <span className="text-sm line-through text-gray-400">
                EGP {originalPrice.toLocaleString()}
              </span>
              <span className="text-lg font-bold text-gray-900">
                EGP {price.toLocaleString()}
              </span>
            </div>
            <p className="text-xs text-gray-500">
              +EGP {taxes.toLocaleString()} taxes and charges
            </p>
            <button
              onClick={(e) => e.stopPropagation()}
              className="mt-2 rounded-md bg-primary-light px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-blue-700"
            >
              See availability
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}