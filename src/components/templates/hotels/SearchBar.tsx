// components/templates/hotels/SearchBar.tsx

import React from "react";

export default function SearchBar() {
  return (
    <div className="bg-blue-800 p-4">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between p-4">
        {/* Location Input */}
        <div className="flex items-center border border-gray-300 rounded-md px-4 py-2 flex-1 mb-4 md:mb-0 md:mr-4">
          <span className="material-icons text-gray-500 mr-2">location_on</span>
          <input
            type="text"
            placeholder="Enter a city, hotel, or destination"
            className="w-full outline-none text-gray-700"
          />
        </div>

        {/* Date Picker */}
        <div className="flex items-center border border-gray-300 rounded-md px-4 py-2 flex-1 mb-4 md:mb-0 md:mr-4">
          <span className="material-icons text-gray-500 mr-2">
            calendar_today
          </span>
          <input
            type="text"
            placeholder="Fri 6 Dec - Sun 8 Dec"
            className="w-full outline-none text-gray-700"
          />
        </div>

        {/* Guests and Rooms */}
        <div className="flex items-center border border-gray-300 rounded-md px-4 py-2 flex-1 mb-4 md:mb-0 md:mr-4">
          <span className="material-icons text-gray-500 mr-2">person</span>
          <select className="w-full outline-none text-gray-700 bg-white">
            <option>2 adults · 0 children · 1 room</option>
            <option>1 adult · 0 children · 1 room</option>
            <option>2 adults · 1 child · 1 room</option>
          </select>
        </div>

        {/* Search Button */}
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition">
          Search
        </button>
      </div>
    </div>
  );
}
