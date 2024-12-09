import React from "react";
import { MessageCircle } from "lucide-react";

interface PlaneCardProps {
  image: string;
  name: string;
  capacity: number;
  range: string;
  price: string;
}

export default function PlaneCard({
  image,
  name,
  capacity,
  range,
  price,
}: PlaneCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <div className="space-y-2 mb-4">
          <p className="text-gray-600">Capacity: {capacity} passengers</p>
          <p className="text-gray-600">Range: {range}</p>
          <p className="text-lg font-bold text-blue-600">{price}</p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => window.open("https://wa.me/1234567890", "_blank")}
            className="flex-1 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-200 flex items-center justify-center gap-2"
          >
            <MessageCircle size={20} />
            WhatsApp
          </button>
          <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
