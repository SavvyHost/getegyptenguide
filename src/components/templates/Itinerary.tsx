import React, { useState } from "react";
import { Heart, Sun, Mountain, Star, MapPin } from "lucide-react"; // Import different icons
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// Mapping of itinerary indexes to icons
const iconMap = {
  0: <Heart className="text-green-500 w-6 h-6" />,
  1: <Sun className="text-yellow-500 w-6 h-6" />,
  2: <Mountain className="text-green-500 w-6 h-6" />,
  3: <Star className="text-blue-500 w-6 h-6" />,
  4: <MapPin className="text-purple-500 w-6 h-6" />,
  // Add more icons as needed
};

const TourCard = ({ itinerary, index, isLast }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full my-1 relative flex items-start">
      {/* Icon on the left side */}
      <div className="flex-shrink-0 mr-3 mt-1">
        {iconMap[index] || iconMap[0]}{" "}
        {/* Use the mapped icon or a default icon */}
      </div>

      {/* Content moved to the right */}
      <div className="lg:ml-2 ml-1 w-full">
        <div className="lg:px-6 px-4 py-2 border-l-2 border-green-500">
          <div
            className="flex justify-between items-center font-semibold text-base lg:text-xl mb-2 cursor-pointer"
            onClick={toggleCollapse}
          >
            <span>
              Day {index + 1}: {itinerary.title}
            </span>
            {isOpen ? (
              <div>
                <FaChevronUp />
              </div>
            ) : (
              <div>
                <FaChevronDown />
              </div>
            )}
          </div>

          <div
            className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
              isOpen ? "max-h-96" : "max-h-0"
            }`}
          >
            <div
              className={`px-2 ${
                isOpen ? "opacity-100" : "opacity-0"
              } transition-opacity duration-300`}
            >
              <div className="text-gray-700 text-base mb-2">
                <p>{itinerary.description}</p>
                <p className="text-gray-600 text-sm">
                  {itinerary.city.name} - {itinerary.place.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TourItinerary = ({ DetailTour }) => {
  return (
    <div className="flex flex-wrap ">
      <h1 className="text-2xl font-bold my-4 w-full underline">
        Tour Itineraries
      </h1>
      {DetailTour.tour_itineraries.map((itinerary, index) => (
        <TourCard
          key={itinerary.id}
          itinerary={itinerary}
          index={index}
          isLast={index === DetailTour.tour_itineraries.length - 1}
        />
      ))}
    </div>
  );
};

export default TourItinerary;
