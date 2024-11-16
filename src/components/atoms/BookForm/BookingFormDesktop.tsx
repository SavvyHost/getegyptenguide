import React, { useState } from "react";
import Thanks from "@/components/molecules/Thanks";
import "react-phone-number-input/style.css";
import MainDataBookingForm from "./MainDataBookingForm";
import { useWishlist } from "@/contexts/wishlist-context";
import { FaHeart, FaRegHeart } from "react-icons/fa";

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
        <button
          onClick={(e) => handleWishlistClick(e, DetailTour)}
          className={`p-2 rounded-none border transition-colors duration-200 flex items-center gap-2 ${
            isInWishlist(DetailTour.id)
              ? "bg-primary-light text-accent-white hover:bg-primary-dark"
              : "bg-white text-primary-light hover:bg-gray-100 border-primary-dark"
          }`}
        >
          {isInWishlist(DetailTour.id) ? (
            <>
              Added to Wishlist
              <FaHeart className="w-4 h-4" />
            </>
          ) : (
            <>
              Add to Wishlist
              <FaRegHeart className="w-4 h-4" />
            </>
          )}
        </button>
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
