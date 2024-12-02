import React, { useState } from "react";
import Thanks from "@/components/molecules/Thanks";
import "react-phone-number-input/style.css";
import MainDataBookingForm from "./MainDataBookingForm";
import { useWishlist } from "@/contexts/wishlist-context";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Heart } from "lucide-react";
import ShareButton from "@/components/templates/ShareButton";

type BookingFormDesktopProps = {
  DetailTour: {
    id: number;
    min_price: number;
    // Add other necessary properties here
  };
};

export default function BookingFormDesktop({
  DetailTour,
}: BookingFormDesktopProps) {
  const [isThanksVisible, setIsThanksVisible] = useState<boolean>(false);
  const { toggleWishlist, isInWishlist } = useWishlist();

  const handleCloseThanks = () => {
    setIsThanksVisible(false);
  };

  const handleWishlistClick = (
    e: React.MouseEvent,
    tour: typeof DetailTour
  ) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(tour);
  };

  return (
    <div className="hidden md:block p-2">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-sm text-gray-500">From ${DetailTour?.min_price}</h2>
        <div className="flex gap-2">
          <ShareButton
            url={typeof window !== "undefined" ? window.location.href : ""}
          />

          <button
            onClick={(e) => handleWishlistClick(e, DetailTour)}
            className="p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-200 shadow-lg"
            aria-label={
              isInWishlist(DetailTour.id)
                ? "Remove from wishlist"
                : "Add to wishlist"
            }
          >
            <Heart
              className={`w-5 h-5 ${
                isInWishlist(DetailTour.id)
                  ? "fill-red-500 text-red-500"
                  : "text-gray-700"
              }`}
            />
          </button>
        </div>
      </div>

      <h1 className="text-2xl font-bold mb-4 text-gray-800">
        US ${DetailTour?.min_price} / Per person
      </h1>

      <div>
        <MainDataBookingForm
          DetailTour={DetailTour}
          setIsThanksVisible={setIsThanksVisible}
        />

        {isThanksVisible && (
          <Thanks
            onClose={handleCloseThanks}
            message="Thank you for your submission!"
          />
        )}
      </div>
    </div>
  );
}
