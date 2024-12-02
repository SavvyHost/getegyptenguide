import React, { useEffect, useState } from "react";
import MyPage from "@/components/templates/MyPage";
<<<<<<< HEAD
import { GetServerSidePropsContext } from "next";
import { TourDetail } from "@/types/tour";
import BookingFormDesktop from "@/components/templates/ExcursionsForm/BookingFormDesktop";
import ImageGallery from "@/components/organisms/ImageGallery";
import { Heart } from "lucide-react";
import { useWishlist } from "@/contexts/wishlist-context";
import Thanks from "@/components/molecules/Thanks";
import fetchData from "@/helper/FetchData";
=======
import fetchData from "@/helper/FetchData";
import { GetServerSidePropsContext } from "next";
import { TourDetail } from "@/types/tour";
import GallaryExcursions from "@/components/templates/Gallaryexcursions";
import BookingFormDesktop from "@/components/templates/ExcursionsForm/BookingFormDesktop";
import DefaultDetails from "@/components/organisms/DefaultDetails";
import ImageGallery from "@/components/organisms/ImageGallery";
import { Heart } from "lucide-react";
import { useWishlist } from "@/contexts/wishlist-context";
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94

interface ImageGalleryProps {
  DetailTour: TourDetail;
}

const ExcursionDetails: React.FC<ImageGalleryProps> = ({ DetailTour }) => {
  const [showButton, setShowButton] = useState(false);
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
<<<<<<< HEAD
  const [isThanksVisible, setIsThanksVisible] = useState(false);
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [bookingState, setBookingState] = useState<any>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
=======
  const { toggleWishlist, isInWishlist } = useWishlist();

  useEffect(() => {
    // Determine if the device is mobile based on window width
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Run on component mount and when window resizes
    handleResize();
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
<<<<<<< HEAD
      setShowButton(window.scrollY > 1000);
=======
      if (window.scrollY > 600) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

<<<<<<< HEAD
  const handleBookNowClick = () => {
    if (bookingState?.handleBookNowClick) {
      if (!bookingState.selectedDate || !bookingState.hasSetPassengers) {
        scrollToTop();
      } else {
        bookingState.handleBookNowClick();
      }
    } else {
      scrollToTop();
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: isMobile ? 300 : 80,
      behavior: "smooth",
    });
    setOpenDatePicker(true);
  };

  return (
    <div className="relative mt-2">
      {/* Main content container */}
      <div className="flex flex-col md:flex-row md:pt-5 md:px-16">
        {/* Main content column that takes full width on mobile */}
        <div className="w-full md:w-2/3 mt-20 md:mt-24 p-0">
          <div className="mb-6">
            <ImageGallery DetailTour={DetailTour} />
          </div>

          {/* Booking form for mobile - shown between gallery and content */}
          <div className="md:hidden w-full px-4 ">
            <BookingFormDesktop
              DetailTour={DetailTour}
              // openDatePicker={openDatePicker}
              onStateChange={setBookingState}
            />
          </div>

          <div className=" overflow-hidden">
            <MyPage DetailTour={DetailTour} />
          </div>
        </div>

        {/* Desktop booking form - hidden on mobile */}
        <div className="hidden md:block w-full md:w-1/3 p-4 lg:px-0 pt-4 md:pt-[180px]">
          <BookingFormDesktop
            DetailTour={DetailTour}
            // openDatePicker={openDatePicker}
            onStateChange={setBookingState}
          />
        </div>
      </div>

      {/* Floating bottom bar */}
      <div
        className={`fixed z-40 bottom-0 left-0 right-0 bg-white shadow-md transition-all duration-700 ease-in-out ${
          showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
=======
  const scrollToTop = () => {
    window.scrollTo({
      top: isMobile ? 300 : 80, // Scroll to 300px if mobile, 0px if desktop
      behavior: "smooth",
    });

    // Optionally, you can add a timeout to wait for the scroll effect to finish before opening the date picker
    setTimeout(() => {
      setOpenDatePicker(!openDatePicker);
    }, 0);
  };

  const handleWishlistClick = (e, tour) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(tour);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row md:pt-5 md:px-16">
        <div className="w-full md:w-1/3 p-4 lg:px-0 pt-4 md:pt-[180px] order-2">
          <BookingFormDesktop
            DetailTour={DetailTour}
            openDatePicker={openDatePicker}
          />
        </div>
        <div className="w-full md:w-2/3 mt-8 md:mt-24 p-0 order-1">
          <ImageGallery DetailTour={DetailTour} />
        </div>
      </div>
      <div className="lg:w-2/3 w-full p-4 lg:px-16 overflow-hidden">
        <MyPage DetailTour={DetailTour} />
      </div>

      {/* Fixed Bottom Bar */}
      <div
        className={`fixed  z-50 bottom-0 left-0 right-0 bg-white shadow-md transition-all duration-700 ease-in-out ${
          showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        } fixed`} // Added relative for positioning the pseudo-element
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94
      >
        <div className="absolute top-0 left-0 right-0 h-6 -translate-y-full bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-center gap-4">
            <div className="text-xl font-normal lg:block hidden">
              Price Start From
<<<<<<< HEAD
              <span className="text-2xl ml-3 underline font-semibold text-primary-dark min-w-[80px] text-center">
=======
              <span className="text-2xl ml-3 underline font-semibold text-green-600 min-w-[80px] text-center">
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94
                {DetailTour.min_price} $
              </span>{" "}
              Per Person
            </div>

            <button
<<<<<<< HEAD
              onClick={handleBookNowClick}
              className="w-full max-w-md bg-primary-light text-white py-3 px-6 rounded-md shadow hover:bg-primary-dark transition duration-200 text-center"
=======
              onClick={scrollToTop}
              className="w-full max-w-md bg-green-600 text-white py-3 px-6 rounded-md shadow hover:bg-green-700 transition duration-200 text-center"
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94
            >
              Book Now
            </button>

            <button
<<<<<<< HEAD
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleWishlist(DetailTour);
              }}
              className={`p-3 rounded-md shadow-md border transition-all duration-200 ${
                isInWishlist(DetailTour.id)
                  ? "bg-primary-light text-white hover:bg-primary-dark"
                  : "bg-gray-100 text-primary-dark border-prbg-primary-dark hover:bg-gray-200"
=======
              onClick={(e) => handleWishlistClick(e, DetailTour)}
              className={`p-3 rounded-md shadow-md border transition-all duration-200 ${
                isInWishlist(DetailTour.id)
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-gray-100 text-green-700 border-green-700 hover:bg-gray-200"
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94
              }`}
            >
              <Heart
                className={
<<<<<<< HEAD
                  isInWishlist(DetailTour.id)
                    ? "text-white"
                    : "text-prbg-primary-dark"
=======
                  isInWishlist(DetailTour.id) ? "text-white" : "text-green-700"
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94
                }
              />
            </button>
          </div>
        </div>
      </div>
<<<<<<< HEAD

      {isThanksVisible && (
        <Thanks
          onClose={() => setIsThanksVisible(false)}
          message="Thank you for your submission!"
        />
      )}
    </div>
  );
};
=======
    </>
  );
}; 
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94

export default ExcursionDetails;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.params as { id: string };
  const DetailTour = await fetchData(`tours/${id}`);
  return {
    props: {
      DetailTour: DetailTour.data,
    },
  };
}
