import React from "react";
import { Check, MessageCircle } from "lucide-react";
import Image from "next/image";
import { WhatsApp } from "@mui/icons-material";

interface Room {
  name: string;
  features: string[];
  amenities: string[];
  price: string;
  taxes: string;
  discount: string;
  options: string[];
  images: string[];
}

const rooms: Room[] = [
  {
    name: "King Room with Mountain View",
    images: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
    ],
    features: [
      "1 extra-large double bed",
      "35 m²",
      "Garden view",
      "Mountain view",
      "City view",
      "Air conditioning",
      "Flat-screen TV",
      "Soundproofing",
      "Terrace",
      "Coffee machine",
      "Free WiFi",
    ],
    amenities: [
      "Hot tub",
      "Free toiletries",
      "Bidet",
      "Toilet",
      "Fireplace",
      "TV",
      "Slippers",
      "Refrigerator",
      "Private entrance",
      "Wake-up service",
    ],
    price: "EGP 1,870",
    taxes: "+ EGP 280 taxes and charges",
    discount: "72% off",
    options: [
      "No credit card needed",
      "Flexible to reschedule",
      "Non-refundable",
    ],
  },
  {
    name: "Deluxe Room with City View",
    images: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80",
    ],
    features: [
      "1 queen-size bed",
      "40 m²",
      "City view",
      "Air conditioning",
      "Private balcony",
      "Flat-screen TV",
      "Free WiFi",
      "Coffee machine",
    ],
    amenities: [
      "Free toiletries",
      "Hairdryer",
      "Electric kettle",
      "Desk",
      "Iron",
      "Wardrobe",
      "Wake-up service",
    ],
    price: "EGP 2,077",
    taxes: "+ EGP 312 taxes and charges",
    discount: "72% off",
    options: [
      "Free cancellation before 5 December 2024",
      "No prepayment needed",
      "Pay at the property",
    ],
  },
];

const RoomFeatures: React.FC<{ features: string[] }> = ({ features }) => (
  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
    {features.map((feature, index) => (
      <li key={index} className="flex items-center text-gray-700">
        <Check className="w-4 h-4 text-green-500 mr-2" />
        <span>{feature}</span>
      </li>
    ))}
  </ul>
);

const RoomAmenities: React.FC<{ amenities: string[] }> = ({ amenities }) => (
  <div>
    <h3 className="text-xl font-semibold text-gray-800 mb-3">Room Amenities</h3>
    <ul className="grid grid-cols-2 gap-2">
      {amenities.map((amenity, index) => (
        <li key={index} className="flex items-center text-gray-600">
          <Check className="w-4 h-4 text-green-500 mr-2" />
          <span>{amenity}</span>
        </li>
      ))}
    </ul>
  </div>
);

const RoomOptions: React.FC<{ options: string[] }> = ({ options }) => (
  <div>
    <h3 className="text-xl font-semibold text-gray-800 mb-3">Your Options</h3>
    <ul className="space-y-2">
      {options.map((option, index) => (
        <li
          key={index}
          className="flex items-center bg-gray-50 p-2 rounded-md text-gray-700"
        >
          <Check className="w-4 h-4 text-green-500 mr-2" />
          <span className="text-sm">{option}</span>
        </li>
      ))}
    </ul>
  </div>
);

const RoomPricing: React.FC<{ room: Room }> = ({ room }) => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `I'm interested in booking the room: ${room.name}`
    );
    window.open(`https://wa.me/?text=${message}`, "_blank");
  };

  return (
    <div className="w-full md:w-auto">
      <div className="bg-blue-50 p-4 rounded-lg text-center">
        <p className="text-lg font-bold text-red-500 line-through mb-1">
          {room.price}
        </p>
        <p className="text-2xl font-bold text-green-600 mb-1">
          {room.discount}
        </p>
        <p className="text-sm text-gray-600">{room.taxes}</p>
      </div>

      <button className="w-full mt-4 py-3 bg-primary-dark text-white rounded-lg font-semibold hover:bg-primary-light transition-colors">
        Book Now
      </button>

      <button
        onClick={handleWhatsAppClick}
        className="w-full mt-2 py-2 px-4 flex items-center justify-center text-green-600 border border-green-600 rounded-lg font-semibold hover:bg-green-50 transition-colors"
      >
        <WhatsApp className="w-6 h-6 mr-2" />
        WhatsApp
      </button>
    </div>
  );
};

const RoomCard: React.FC<{ room: Room }> = ({ room }) => (
  <div className="border rounded-lg p-6 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
    <div className="flex flex-col md:flex-row gap-6">
      <div className="md:w-1/3">
        <div className="relative h-full rounded-lg overflow-hidden">
          <Image
            width={200}
            height={200}
            src={room.images[0]}
            alt={room.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2">
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {room.discount}
            </span>
          </div>
        </div>
      </div>

      <div className="md:w-2/3">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              {room.name}
            </h2>
            <RoomFeatures features={room.features} />
          </div>
          <RoomPricing room={room} />
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2">
            <RoomAmenities amenities={room.amenities} />
          </div>
          <div>
            <RoomOptions options={room.options} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen mt-4 lg:mt-0">
      <div className="max-w-5xl px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Available Rooms
        </h1>
        <div className="space-y-6">
          {rooms.map((room, index) => (
            <RoomCard key={index} room={room} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
