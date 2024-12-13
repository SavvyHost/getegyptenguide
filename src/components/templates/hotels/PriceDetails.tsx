import React, { useState, useMemo } from "react";
import { Calendar, Users, Bed } from "lucide-react";
import Datepicker from "react-tailwindcss-datepicker";

export default function PriceDetails({ hotel }) {
  // State for date selection
  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
  });

  // State for occupancy details
  const [occupancy, setOccupancy] = useState({
    adults: 1,
    children: 0,
    rooms: 1,
  });

  // Calculate total nights and validate date range
  const bookingDetails = useMemo(() => {
    if (!dateRange.startDate || !dateRange.endDate) {
      return {
        nights: 0,
        isValidBooking: false,
      };
    }

    const start = new Date(dateRange.startDate);
    const end = new Date(dateRange.endDate);
    const nights = Math.ceil((end - start) / (1000 * 60 * 60 * 24));

    return {
      nights,
      isValidBooking: nights > 0 && nights <= 30, // Example max stay limit
    };
  }, [dateRange]);

  // Calculate total price
  const totalPrice = useMemo(() => {
    const { nights, isValidBooking } = bookingDetails;

    if (!isValidBooking) return 0;

    // Base price calculation with considerations for rooms and occupancy
    const basePrice = hotel.price * nights * occupancy.rooms;

    // Optional: Additional pricing logic
    const additionalGuestFee =
      occupancy.adults > 2 ? (occupancy.adults - 2) * 20 : 0;

    const childrenDiscount = occupancy.children * 10;

    return Math.max(0, basePrice + additionalGuestFee - childrenDiscount);
  }, [hotel.price, bookingDetails, occupancy]);

  // Handle date picker changes
  const handleDateChange = (newValue) => {
    setDateRange(newValue);
  };

  // Increment/decrement occupancy handlers
  const updateOccupancy = (field, change) => {
    setOccupancy((prev) => {
      const newValue = Math.max(0, prev[field] + change);

      // Validation rules
      if (field === "rooms") {
        return { ...prev, rooms: Math.min(newValue, 5) }; // Max 5 rooms
      }

      if (field === "adults") {
        return {
          ...prev,
          adults: Math.max(1, newValue),
          rooms: Math.max(1, Math.ceil(newValue / 2)),
        };
      }

      return { ...prev, [field]: newValue };
    });
  };

  return (
    <div className="bg-white  shadow-lg rounded-lg p-6 sticky top-20 w-full max-w-md border border-gray-200">
      <div className="flex items-center mb-4 border-b pb-3">
        <Calendar className="mr-2 text-blue-600" />
        <h3 className="text-xl font-semibold text-gray-800">Price Details</h3>
      </div>

      {/* Date Picker */}
      <div className="mb-4">
        <label className="block text-gray-600 font-medium mb-2">
          Select Dates
        </label>
        <Datepicker
          value={dateRange}
          onChange={handleDateChange}
          options={{
            minDate: new Date(),
            maxDate: new Date(new Date().getFullYear() + 1, 11, 31),
          }}
        />
      </div>

      {/* Occupancy Controls */}
      <div className="space-y-4">
        {/* Adults */}
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Users className="mr-2 text-blue-600" />
            <span className="text-gray-700">Adults</span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => updateOccupancy("adults", -1)}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-300 transition-colors"
            >
              -
            </button>
            <span className="text-gray-800 font-medium">
              {occupancy.adults}
            </span>
            <button
              onClick={() => updateOccupancy("adults", 1)}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-300 transition-colors"
            >
              +
            </button>
          </div>
        </div>

        {/* Children */}
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Users className="mr-2 text-blue-600" />
            <span className="text-gray-700">Children</span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => updateOccupancy("children", -1)}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-300 transition-colors"
            >
              -
            </button>
            <span className="text-gray-800 font-medium">
              {occupancy.children}
            </span>
            <button
              onClick={() => updateOccupancy("children", 1)}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-300 transition-colors"
            >
              +
            </button>
          </div>
        </div>

        {/* Rooms */}
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Bed className="mr-2 text-blue-600" />
            <span className="text-gray-700">Rooms</span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => updateOccupancy("rooms", -1)}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-300 transition-colors"
            >
              -
            </button>
            <span className="text-gray-800 font-medium">{occupancy.rooms}</span>
            <button
              onClick={() => updateOccupancy("rooms", 1)}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-300 transition-colors"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Price Summary */}
      <div className="mt-6 space-y-2 border-t pt-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Base Rate</span>
          <span className="text-gray-800">${hotel.price} / night</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Total Nights</span>
          <span className="text-gray-800">{bookingDetails.nights}</span>
        </div>
        <div className="flex justify-between font-bold text-blue-600">
          <span>Total Price</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
      </div>

      {/* Book Now Button */}
      <button
        className={`
          w-full mt-4 py-3 rounded-md text-white font-semibold transition-colors
          ${
            bookingDetails.isValidBooking
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-400 cursor-not-allowed"
          }
        `}
        disabled={!bookingDetails.isValidBooking}
      >
        Book Now
      </button>
    </div>
  );
}
