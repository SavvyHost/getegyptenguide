import React from "react";
import BookingForm from "./BookingFormPlane";

export default function Banner() {
  return (
    <div className="relative h-[600px] mt-16 lg:mt-24">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative h-full container mx-auto px-4 flex items-center">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-bold text-white mb-6">
            Book Your Private Flight
          </h1>
          <BookingForm />
        </div>
      </div>
    </div>
  );
}
