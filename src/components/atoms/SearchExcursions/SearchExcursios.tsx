import React, { useState, useEffect } from "react";
import LocationDropdown from "./LocationDropdown";
import SearchModal from "./SearchModal";
import Button from "@mui/material/Button";
import { Search } from "lucide-react";
import dayjs from "dayjs";
import DatePickerInput from "./DataPickerInput";

// Custom hook for scroll behavior
const useScrollVisibility = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = prevScrollPos < currentScrollPos;

      // Show header if:
      // 1. Scrolling up
      // 2. At the top of the page (within first 10px)
      // 3. User hasn't scrolled much (less than 50px)
      setVisible(
        !isScrollingDown ||
          currentScrollPos < 10 ||
          Math.abs(currentScrollPos - prevScrollPos) < 50
      );

      setPrevScrollPos(currentScrollPos);
    };

    // Add throttling to prevent too many updates
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, [prevScrollPos]);

  return visible;
};

type DateRange = [Date | null, Date | null];

const SearchExcursions: React.FC = () => {
  const [location, setLocation] = useState<string>("");
  const [dateRange, setDateRange] = useState<DateRange>([null, null]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(null);
  const locations: string[] = ["New York", "London", "Paris", "Tokyo"];
  const isVisible = useScrollVisibility();

  const handleDateChange = (newValue: dayjs.Dayjs | null) => {
    setSelectedDate(newValue);
    if (newValue) {
      setDateRange([newValue.toDate(), newValue.add(1, "day").toDate()]);
    }
  };

  const handleSearchClick = () => {
    setOpenModal(true);
    // If header is hidden, scroll to top before opening modal
    if (!isVisible) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      {/* Mobile Search Button with scroll behavior */}
      <div
        className={`fixed left-0 right-0 z-30 sm:hidden transition-all duration-300 ${
          isVisible ? "top-[63px]" : "top-0"
        }`}
      >
        <Button
          className="w-full bg-white text-gray-400 font-segoe rounded-md py-4 hover:bg-white shadow-md"
          onClick={handleSearchClick}
        >
          <span className="flex items-center justify-center">
            Search For an excursion or activity <Search className="ml-4" />
          </span>
        </Button>
      </div>

      {/* Desktop Search Component */}
      <div className="relative hidden sm:flex flex-col sm:flex-row items-center bg-white rounded-md mt-5 border border-gray-100 p-5 space-y-2 sm:space-y-0 sm:space-x-2 mx-auto max-w-2xl w-full">
        <LocationDropdown
          location={location}
          setLocation={setLocation}
          locations={locations}
        />
        <div className="w-px bg-gray-300 h-8 hidden sm:block" />

        <DatePickerInput
          selectedDate={selectedDate}
          onDateChange={handleDateChange}
          mobileWidth="100%"
          laptopWidth="40%"
          height="40px"
          labelProps={{
            fontSize: "14px",
            color: "rgba(0, 0, 0, 0.6)",
            transform: "translate(14px, 12px) scale(1)",
          }}
        />

        <button className="hidden sm:block text-gray-400 hover:bg-gray-100 bg-white border-2 border-gray-300 font-segoe rounded-md px-4 py-2 flex items-center text-center justify-center">
          Search
        </button>
      </div>

      {/* Search Modal */}
      <SearchModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        location={location}
        setLocation={setLocation}
        locations={locations}
        dateRange={dateRange}
        setDateRange={setDateRange}
      />
    </div>
  );
};

export default SearchExcursions;
