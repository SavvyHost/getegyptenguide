import React, { useState } from "react";
import Select from "react-select";
import Datepicker from "react-tailwindcss-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function BookingForm() {
  const [departure, setDeparture] = useState(null);
  const [destination, setDestination] = useState(null);
  const [dateRange, setDateRange] = useState([null, null]);
  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  });

  const destinationsOptions = [
    { value: "new-york", label: "New York" },
    { value: "paris", label: "Paris" },
    { value: "tokyo", label: "Tokyo" },
    { value: "london", label: "London" },
  ];

  const handlePassengerChange = (type, operation) => {
    setPassengers((prev) => ({
      ...prev,
      [type]: operation === "+" ? prev[type] + 1 : Math.max(prev[type] - 1, 0),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingDetails = {
      departure,
      destination,
      dateRange,
      passengers,
    };
    console.log("Booking Details: ", bookingDetails);
    alert("Flight Search Submitted!");
  };

  return (
    <form
      className="bg-white rounded-lg p-6 shadow-lg space-y-8 max-w-lg mx-auto"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl font-semibold text-gray-800 text-center">
        Book Your Flight
      </h2>

      <div className="flex justify-between   gap-x-3 ">
        {/* Departure Dropdown */}
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Departure
          </label>
          <Select
            options={destinationsOptions}
            value={departure}
            onChange={setDeparture}
            placeholder="Select departure city"
            className="w-full"
          />
        </div>

        {/* Destination Dropdown */}
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Destination
          </label>
          <Select
            options={destinationsOptions}
            value={destination}
            onChange={setDestination}
            placeholder="Select destination city"
            className="w-full"
          />
        </div>
      </div>

      {/* Travel Dates */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Travel Dates
        </label>
        <div className="border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
          <Datepicker
            value={dateRange}
            onChange={(update) => setDateRange(update)}
            startDate={dateRange[0]}
            endDate={dateRange[1]}
            selectsRange
            minDate={new Date()}
            placeholderText="Select departure and return dates"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Passenger Controls */}
      <div>
        <div className="grid grid-cols-3 gap-4">
          {["adults", "children", "infants"].map((type) => (
            <div key={type} className="flex flex-col items-center">
              <span className="text-sm capitalize">{type}</span>
              <div className="flex items-center space-x-2 mt-2">
                <button
                  type="button"
                  onClick={() => handlePassengerChange(type, "-")}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  -
                </button>
                <span className="px-4">{passengers[type]}</span>
                <button
                  type="button"
                  onClick={() => handlePassengerChange(type, "+")}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200"
      >
        Search Flights
      </button>
    </form>
  );
}
