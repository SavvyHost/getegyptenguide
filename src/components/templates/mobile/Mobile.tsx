// Mobile.tsx
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import MobileSearchModal from "@/components/atoms/Search/MobileSearchModal";
import TravelPackagePage from "@/components/molecules/TravelCardSearch/TravelCardSearch";
import { ToursData } from "@/types/tour";
import MobileSidebar from "@/components/atoms/Filters/MobileSidebar";
import Explore from "@/components/molecules/ExploreTours";
import { SlidersHorizontal } from "lucide-react";

interface MobileProps {
  toursData: ToursData;
}

const useScrollHeader = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = prevScrollPos < currentScrollPos;
      const isTopPackagesPage = router.pathname === "/top-packages";

      if (isTopPackagesPage) {
        setVisible(!isScrollingDown || currentScrollPos < 5);
      } else {
        setVisible(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, router.pathname]);

  return { visible };
};

const Mobile: React.FC<MobileProps> = ({ toursData }) => {
  const { visible } = useScrollHeader();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // State management for filters
  const [price, setPrice] = useState<[number, number]>([0, 1000]);
  const [selectedDestination, setSelectedDestination] =
    useState<string>("Spain");
  const [selectedStarRating, setSelectedStarRating] = useState<string[]>([
    "5 stars",
  ]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([
    "Restaurant",
  ]);
  const [selectedAccommodationType, setSelectedAccommodationType] = useState<
    string[]
  >(["Hotel"]);

  // Handle price change
  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setPrice(newValue as [number, number]);
    }
  };

  // Clear all filters
  const handleClearFilters = () => {
    setPrice([0, 1000]);
    setSelectedDestination("");
    setSelectedStarRating([]);
    setSelectedAmenities([]);
    setSelectedAccommodationType([]);
  };

  // Apply filters function
  const handleApplyFilters = () => {
    console.log("Filters applied:", {
      price,
      selectedDestination,
      selectedStarRating,
      selectedAmenities,
      selectedAccommodationType,
    });
  };

  return (
    <div className="bg-[#FAFAFA] flex flex-col">
      <div
        className={`fixed left-0 right-0 bg-[#FAFAFA] p-3 z-30 transition-all duration-300 ${
          visible ? "top-[70px]" : "top-0"
        }`}
      >
        <div className="flex justify-center items-center gap-3 w-full">
          <div className="w-full">
            <MobileSearchModal />
          </div>
          <div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#4CAF50] text-nowrap py-3 px-5 text-white rounded-md"
            >
              <SlidersHorizontal />
            </button>
            <MobileSidebar
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              price={price}
              selectedDestination={selectedDestination}
              selectedStarRating={selectedStarRating}
              selectedAmenities={selectedAmenities}
              selectedAccommodationType={selectedAccommodationType}
              handlePriceChange={handlePriceChange}
              handleClearFilters={handleClearFilters}
              handleApplyFilters={handleApplyFilters}
              setSelectedDestination={setSelectedDestination}
              setSelectedStarRating={setSelectedStarRating}
              setSelectedAmenities={setSelectedAmenities}
              setSelectedAccommodationType={setSelectedAccommodationType}
            />
          </div>
        </div>
      </div>
      <div
        className={`transition-all duration-300 ${visible ? "mt-36" : "mt-24"}`}
      >
        <Explore />
      </div>
      <div className="flex-1">
        <div className="px-3">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-3/4">
              <TravelPackagePage toursData={toursData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
