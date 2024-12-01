import {
  Wifi,
  Utensils,
  Car,
  GlassWater,
  Dumbbell,
  Coffee,
} from "lucide-react";

const amenities = [
  { icon: Wifi, label: "Free WiFi" },
  { icon: Utensils, label: "Restaurant" },
  { icon: Car, label: "Free Parking" },
  { icon: GlassWater, label: "Swimming Pool" },
  { icon: Dumbbell, label: "Fitness Center" },
  { icon: Coffee, label: "Breakfast Available" },
];

export default function HotelAmenities() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-6">
      {amenities.map((amenity, index) => (
        <div key={index} className="flex items-center space-x-2 text-gray-700">
          <amenity.icon className="w-5 h-5" />
          <span>{amenity.label}</span>
        </div>
      ))}
    </div>
  );
}
