import React, { useState } from "react";
import Thanks from "@/components/molecules/Thanks";
import "react-phone-number-input/style.css";
import MainDataBookingForm from "./MainDataBookingForm";
import { useWishlist } from "@/contexts/wishlist-context";
import { Heart } from "lucide-react";

interface BookingFormDesktopProps {
  DetailTour: any;
  openDatePicker: boolean;
  onStateChange?: (state: any) => void;
}

const BookingFormDesktop: React.FC<BookingFormDesktopProps> = ({
  DetailTour,
  openDatePicker,
  onStateChange,
}) => {
  const { toggleWishlist, isInWishlist } = useWishlist();

  const handleWishlistClick = (e: React.MouseEvent, tour: any) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(tour);
  };

  return (
    <div className="lg:p-4 p-2 bg-white rounded-lg border shadow-md space-y-6">
      <div className="flex justify-between items-center">
        <div className="">
          <h2 className="text-md font-medium text-gray-600 mb-1">
            From ${DetailTour?.min_price}
          </h2>
          <h1 className="text-2xl font-bold text-gray-800">
            US ${DetailTour?.min_price} / Per person
          </h1>
        </div>

        <button
          onClick={(e) => handleWishlistClick(e, DetailTour)}
          className={`p-2 rounded-md font-semibold border transition-all duration-200 ${
            isInWishlist(DetailTour.id)
              ? "bg-primary-light text-accent-white hover:bg-primary-dark"
              : "bg-gray-100 text-accent-white border-accent-yellow hover:bg-gray-200"
          }`}
        >
          {isInWishlist(DetailTour.id) ? (
            <Heart />
          ) : (
            <Heart className="text-primary-dark" />
          )}
        </button>
      </div>

      <MainDataBookingForm
        DetailTour={DetailTour}
        isDatePickerOpen={openDatePicker}
        onStateChange={onStateChange}
      />
    </div>
  );
};

export default BookingFormDesktop;
