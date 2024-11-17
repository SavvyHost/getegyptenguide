import React from "react";
import {
  Bed,
  Hotel,
  Heart,
  Brush,
  Key,
  Users,
  Crown,
  House,
} from "lucide-react"; // Importing specific icons from Lucide
import { BsSuitcase, BsSuitcaseFill, BsSuitcaseLgFill } from "react-icons/bs";

type TourPrice = {
  id: number;
  title: string;
  price: number;
};

type TourPricesGroup = {
  id: number;
  title: string;
  from_month: string | null;
  to_month: string | null;
  prices: TourPrice[];
};

type Props = {
  DetailTour: {
    tour_prices: TourPricesGroup[];
  };
};

// Mapping room types to Lucide icons
const roomIcons: Record<string, React.ReactNode> = {
  "Single Room": <Bed className="text-purple-500" />,
  "Double-bedded Room": <Hotel className="text-blue-500" />,
  "Triple Room": <Users className="text-green-500" />,
  "Suite Room": <Crown className="text-green-500" />,
  "Deluxe Room": <Brush className="text-orange-500" />,
  "Presidential Suite": <Key className="text-yellow-500" />,
  "Family Room": <Users className="text-teal-500" />,
};

// Function to get the icon for the room type
const getRoomIcon = (title: string) => {
  return roomIcons[title] || <House className="text-green-500" />;
};

const PriceTour: React.FC<Props> = ({ DetailTour }) => {
  const getIcon = (title: string) => {
    switch (title) {
      case "Standard":
        return <Heart className="text-blue-400" />;
      case "VIP":
        return <Crown className="text-yellow-500" />;
      default:
        return <BsSuitcaseFill className="text-yellow-800" />;
    }
  };

  return (
    <div className="">
      <h1 className="text-2xl font-bold text-left my-6 underline">
        Tour Prices
      </h1>
      {DetailTour.tour_prices.map((group) => (
        <div key={group.id} className="mb-4">
          <div className="flex items-center mb-2">
            {getIcon(group.title)}
            <h2 className="text-xl font-semibold ml-2">{group.title}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {group.prices.map((price) => (
              <div
                key={price.id}
                className="flex justify-between items-center py-2 border-b border-gray-200"
              >
                <div className="flex items-center">
                  {getRoomIcon(price.title)}{" "}
                  {/* Use the helper function here */}
                  <p className="text-lg ml-2">{price.title}</p>
                </div>
                <p className="text-lg font-semibold text-black">
                  ${price.price}
                </p>
              </div>
            ))}
          </div>
          {group.from_month && group.to_month && (
            <p className="mt-2 text-sm text-gray-600">
              Available from {group.from_month} to {group.to_month}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default PriceTour;
