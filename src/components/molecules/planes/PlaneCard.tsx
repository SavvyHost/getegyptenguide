import React from "react";
import { MessageCircle, PlaneLanding, PlaneTakeoffIcon } from "lucide-react";
import Image from "next/image";

interface FlightCardProps {
  logo: string;
  airline: string;
  heliport: string;
  price: string;
  takeoff: string;
  landing: string;
}

export default function FlightCard({
  logo,
  airline,
  heliport,
  price,
  takeoff,
  landing,
}: FlightCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      {/* Airline Logo */}
      <div className="flex items-center justify-center bg-gray-50 h-36">
        <Image
          src="https://mytravel.bookingcore.co/uploads/demo/flight/airline/img3.jpg"
          alt={`${airline} logo`}
          className="h-full w-full  "
          width={200}
          height={200}
        />
      </div>

      {/* Card Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{heliport}</h3>
        <p className="text-gray-500 text-sm mb-4">{price}</p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-blue-500">
              <PlaneTakeoffIcon />
            </span>
            <p className="text-gray-600 text-sm">
              <strong>Take off:</strong> {takeoff}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-blue-500">
              <PlaneLanding />
            </span>
            <p className="text-gray-600 text-sm">
              <strong>Landing:</strong> {landing}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-1">
          <button
            onClick={() => window.open("https://wa.me/1234567890", "_blank")}
            className="flex-1 bg-green-500 text-white py-2 px-2 rounded-md hover:bg-green-600 transition duration-200 flex items-center justify-center gap-2"
          >
            <MessageCircle size={20} />
            WhatsApp
          </button>
          <button className="flex-1 bg-blue-600 text-white py-2 px-2 rounded-md hover:bg-blue-700 transition duration-200">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
