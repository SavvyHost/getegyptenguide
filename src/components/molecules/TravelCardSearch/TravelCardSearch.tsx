import React, { useState, useRef } from "react";
import { Calendar, Globe, Heart, MapPin, Users } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "@mui/material";
import { FaHeart, FaRegHeart, FaWhatsapp } from "react-icons/fa";
import Pagination from "../Pagination";
import { useWishlist } from "@/contexts/wishlist-context";
import Link from "next/link";

interface Tour {
  id: number;
  title: string;
  destination: string;
  duration: number;
  age_range: string;
  run: string;
  min_price: number;
  main_image: {
    url: string;
  } | null;
}

interface ToursData {
  data: Tour[];
}

interface TravelPackagePageProps {
  toursData: ToursData;
}

const TravelPackagePage: React.FC<TravelPackagePageProps> = ({ toursData }) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const router = useRouter();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const toursPerPage = 6;

  const handlePageChange = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);

    const scrollPosition = window.innerWidth <= 768 ? 0 : 200; // Mobile screens (<=768px) scroll to 0, others to 200

    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  };

  const indexOfLastTour = (currentPage + 1) * toursPerPage;
  const indexOfFirstTour = indexOfLastTour - toursPerPage;
  const currentTours = toursData.data.slice(indexOfFirstTour, indexOfLastTour);
  const pageCount = Math.ceil(toursData.data.length / toursPerPage);

  const TourCard = ({ pkg }: { pkg: Tour }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const startPos = useRef<{ x: number; y: number } | null>(null);

    const handleMouseDown = (e: React.MouseEvent) => {
      startPos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = (e: React.MouseEvent) => {
      if (startPos.current) {
        const dx = Math.abs(e.clientX - startPos.current.x);
        const dy = Math.abs(e.clientY - startPos.current.y);

        if (dx < 5 && dy < 5) {
          const target = e.target as HTMLElement;
          if (!target.closest("button")) {
            handleNavigate(pkg.id);
          }
        }
      }
      startPos.current = null;
    };

    const handleNavigate = (id: number) => {
      router.push(`/top-packages/${id}`);
    };

    const handleWishlistClick = (e: React.MouseEvent, tour: Tour) => {
      e.preventDefault();
      e.stopPropagation();
      toggleWishlist(tour);
    };

    // Add this utility function at the top of your file
    const formatWhatsAppMessage = (tour: Tour) => {
      const message = `
Hello! I'm interested in your tour package:
🎯 Tour: ${tour.title}
📍 Destination: ${tour.destination}
⏱ Duration: ${tour.duration} Days
👥 Age Range: ${tour.age_range}
🌟 Run: ${tour.run}
💰 Price: $${tour.min_price} per person

Please provide more information about this tour.`;

      return encodeURIComponent(message);
    };

    const handleWhatsAppChat = (tour: Tour) => {
      const phoneNumber = "201098767523"; // Your phone number without the + symbol
      const message = formatWhatsAppMessage(tour);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
      window.open(whatsappUrl, "_blank");
    };

    return (
      <div
        ref={cardRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        className="w-full hover:border-accent-yellow bg-accent-white rounded-none border-gray-300 border overflow-hidden transition-shadow duration-300 hover:shadow-xl cursor-pointer"
      >
        {/* Mobile Layout */}
        <div className="flex flex-row md:hidden">
          <div className="w-1/3 h-52 sm:h-40 relative">
            <Image
              src={pkg?.main_image?.url}
              alt={pkg.title}
              layout="fill"
              objectFit="cover"
              className="rounded-none"
            />
            <div className="absolute top-2 left-2 bg-primary-light text-white px-2 py-1 text-xs font-segoe rounded-sm shadow-md">
              20% Off
            </div>
            <button
              onClick={(e) => handleWishlistClick(e, pkg)}
              className={`absolute top-1 right-1 p-1 rounded-full shadow-md bg-white/80 hover:bg-white transition-colors duration-200`}
              aria-label={
                isInWishlist(pkg.id)
                  ? "Remove from wishlist"
                  : "Add to wishlist"
              }
            >
              {isInWishlist(pkg.id) ? (
                <FaHeart className="text-red-500 w-4 h-4" />
              ) : (
                <FaRegHeart className="text-gray-600 w-4 h-4" />
              )}
            </button>
          </div>

          <div className="w-2/3 p-3 flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-semibold mb-1 text-gray-800 line-clamp-2">
                {pkg.title}
              </h2>
              <div className="grid grid-cols-2 gap-1 text-xs mb-2">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-3 h-3 text-primary-light" />
                  <span className="text-gray-600 truncate">
                    {pkg.destination}
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-3 h-3 text-primary-light" />
                  <span className="text-gray-600">{pkg.duration} Days</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-1 text-xs mb-2">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-primary-light" />
                  <div>
                    <p className="text-sm text-gray-600">Age range: </p>
                    <p className="font-segoe text-gray-800">{pkg.age_range}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-primary-light" />
                  <div>
                    <p className="text-sm text-gray-600">Run: </p>
                    <p className="font-segoe text-gray-800">{pkg.run}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-left">
                <p className="text-black font-semibold text-lg">
                  ${pkg.min_price}
                </p>
                <p className="text-xs text-gray-600">Per Person</p>
              </div>
              <div className="flex space-x-2">
                <Button className="bg-primary-dark text-accent-white text-xs py-1 px-3 rounded-sm hover:bg-gray-800">
                  View
                </Button>
                <Button
                  onClick={() => handleWhatsAppChat(pkg)}
                  className="bg-primary-light text-black text-xs py-1 px-3 rounded-sm hover:bg-green-400 flex items-center"
                >
                  <FaWhatsapp className="mr-1" size={12} />
                  Chat
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex md:flex-row">
          <div className="w-2/5 h-auto relative">
            <Image
              src={pkg?.main_image?.url || "/path/to/default/image.jpg"}
              alt={pkg.title}
              layout="fill"
              objectFit="cover"
              className="rounded-none"
            />
            <div className="absolute top-3 left-3 bg-primary-light text-white px-3 py-1 text-sm font-segoe rounded-sm shadow-md">
              Special Offer 20%
            </div>
            <button
              onClick={(e) => handleWishlistClick(e, pkg)}
              className={`absolute top-3 right-3 p-2 rounded-full shadow-md bg-white/80 hover:bg-white transition-colors duration-200`}
              aria-label={
                isInWishlist(pkg.id)
                  ? "Remove from wishlist"
                  : "Add to wishlist"
              }
            >
              {isInWishlist(pkg.id) ? (
                <FaHeart className="text-red-500 w-4 h-4" />
              ) : (
                <FaRegHeart className="text-gray-600 w-4 h-4" />
              )}
            </button>
          </div>

          <div className="w-3/5 p-5 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                {pkg.title}
              </h2>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-primary-light" />
                  <div>
                    <p className="text-sm text-gray-600">Destination: </p>
                    <p className="font-segoe text-gray-800">
                      {pkg.destination}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-primary-light" />
                  <div>
                    <p className="text-sm text-gray-600">Duration: </p>
                    <p className="font-segoe text-gray-800">
                      {pkg.duration} Days
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-primary-light" />
                  <div>
                    <p className="text-sm text-gray-600">Age range: </p>
                    <p className="font-segoe text-gray-800">{pkg.age_range}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-primary-light" />
                  <div>
                    <p className="text-sm text-gray-600">Run: </p>
                    <p className="font-segoe text-gray-800">{pkg.run}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-left">
                <p className="text-black font-bold text-3xl">
                  ${pkg.min_price}
                </p>
                <p className="text-sm text-gray-600">Per Person</p>
              </div>
              <div className="flex space-x-3">
                <Link
                  href={`top-packages/${pkg.id}`}
                  className="bg-black font-bold text-accent-white hover:text-black text-sm py-2 px-5 rounded-sm hover:bg-primary-light"
                >
                  View Tour
                </Link>
                <Button
                  onClick={() => handleWhatsAppChat(pkg)}
                  className="bg-primary-light font-bold text-white hover:text-accent-white text-sm py-2 px-5 rounded-sm hover:bg-primary-dark flex items-center"
                >
                  <FaWhatsapp className="mr-2" size={21} />
                  Chat Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 mt-3">
        {currentTours.map((pkg) => (
          <TourCard key={pkg.id} pkg={pkg} />
        ))}
      </div>
      <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
    </div>
  );
};

export default TravelPackagePage;
