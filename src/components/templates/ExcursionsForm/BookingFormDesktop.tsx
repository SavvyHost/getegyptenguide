<<<<<<< HEAD
import React, { useState } from "react";
import Thanks from "@/components/molecules/Thanks";
import "react-phone-number-input/style.css";
import MainDataBookingForm from "./MainDataBookingForm";
import { useWishlist } from "@/contexts/wishlist-context";
import { Heart } from "lucide-react";
import ShareButton from "../ShareButton";

interface BookingFormDesktopProps {
  DetailTour: any;
  openDatePicker: boolean;
  onStateChange?: (state: any) => void;
=======
import Thanks from "@/components/molecules/Thanks";
import { useState } from "react";
import "react-phone-number-input/style.css";
import MainDataBookingForm from "./MainDataBookingForm";
import DefaultDetails from "@/components/organisms/DefaultDetails";
import { useWishlist } from "@/contexts/wishlist-context";
import { Heart } from "lucide-react";

interface BookingFormDesktopProps {
  DetailTour: any;
  openDatePicker: boolean; // Define the openDatePicker prop
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94
}

const BookingFormDesktop: React.FC<BookingFormDesktopProps> = ({
  DetailTour,
  openDatePicker,
<<<<<<< HEAD
  onStateChange,
}) => {
  const { toggleWishlist, isInWishlist } = useWishlist();

  const handleWishlistClick = (e: React.MouseEvent, tour: any) => {
=======
}) => {
  const [isThanksVisible, setIsThanksVisible] = useState(false);

  const { toggleWishlist, isInWishlist } = useWishlist();

  const handleCloseThanks = () => {
    setIsThanksVisible(false);
  };

  const handleWishlistClick = (e, tour) => {
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94
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

<<<<<<< HEAD
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

      <MainDataBookingForm
        DetailTour={DetailTour}
        isDatePickerOpen={openDatePicker}
        onStateChange={onStateChange}
      />
=======
        <button
          onClick={(e) => handleWishlistClick(e, DetailTour)}
          className={`p-2 rounded-md font-semibold border transition-all duration-200 ${
            isInWishlist(DetailTour.id)
              ? "bg-primary-light text-accent-white hover:bg-primary-dark"
              : "bg-gray-100 text-green-700 border-green-700 hover:bg-gray-200"
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
        isDatePickerOpen={openDatePicker} // Pass openDatePicker prop here
        DetailTour={DetailTour}
        setIsThanksVisible={setIsThanksVisible}
      />

      {isThanksVisible && (
        <Thanks
          onClose={handleCloseThanks}
          message="Thank you for your submission!"
        />
      )}
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94
    </div>
  );
};

export default BookingFormDesktop;
