import React from "react";

export default function BookingForm() {
  return (
    <form className="bg-white rounded-lg p-6 shadow-xl">
      <div className="space-y-4">
        <div>
          <label
            htmlFor="departure"
            className="block text-sm font-medium text-gray-700"
          >
            Departure
          </label>
          <input
            type="text"
            id="departure"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
        </div>

        <div>
          <label
            htmlFor="destination"
            className="block text-sm font-medium text-gray-700"
          >
            Destination
          </label>
          <input
            type="text"
            id="destination"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
        </div>

        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
        </div>

        <div>
          <label
            htmlFor="passengers"
            className="block text-sm font-medium text-gray-700"
          >
            Passengers
          </label>
          <input
            type="number"
            id="passengers"
            min="1"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Search Flights
        </button>
      </div>
    </form>
  );
}
