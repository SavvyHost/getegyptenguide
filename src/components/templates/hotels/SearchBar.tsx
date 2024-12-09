"use client";

import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Slide,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {
  Search,
  MapPin,
  Calendar as CalendarIcon,
  Users,
  Minus,
  Plus,
  X,
} from "lucide-react";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface SearchBarProps {
  onSearch?: (searchParams: {
    location: string;
    dateRange: [Date, Date];
    guests: {
      adults: number;
      children: number;
      rooms: number;
    };
  }) => void;
  initialLocation?: string;
  initialDateRange?: [Date, Date];
  initialGuests?: {
    adults: number;
    children: number;
    rooms: number;
  };
}

export default function SearchBar({
  onSearch,
  initialLocation = "",
  initialDateRange = [new Date(), new Date()],
  initialGuests = {
    adults: 2,
    children: 0,
    rooms: 1,
  },
}: SearchBarProps) {
  const [location, setLocation] = useState(initialLocation);
  const [dateRange, setDateRange] = useState<[Date, Date]>(initialDateRange);
  const [guests, setGuests] = useState(initialGuests);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [startDate, endDate] = dateRange;

  const handleGuestChange = (
    type: "adults" | "children" | "rooms",
    increment: boolean
  ) => {
    setGuests((prev) => ({
      ...prev,
      [type]: increment
        ? Math.min(prev[type] + 1, 10)
        : Math.max(prev[type] - 1, 0),
    }));
  };

  const renderGuestCounter = (
    type: "adults" | "children" | "rooms",
    label: string
  ) => (
    <div className="flex justify-between items-center py-3 border-b">
      <span>{label}</span>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => handleGuestChange(type, false)}
          disabled={guests[type] === 0}
          className="p-1 rounded-full bg-gray-100 disabled:opacity-50 hover:bg-gray-200 transition-colors"
        >
          <Minus className="w-4 h-4" />
        </button>
        <span className="w-8 text-center">{guests[type]}</span>
        <button
          type="button"
          onClick={() => handleGuestChange(type, true)}
          disabled={guests[type] === 10}
          className="p-1 rounded-full bg-gray-100 disabled:opacity-50 hover:bg-gray-200 transition-colors"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  const handleSearchSubmit = () => {
    onSearch?.({
      location,
      dateRange,
      guests,
    });
    setIsSearchModalOpen(false);
  };

  const guestSummary = `${guests.adults} adults · ${guests.children} children · ${guests.rooms} room`;

  return (
    <>
      {/* Mobile & Desktop Search Trigger */}
      <div className="w-full">
        <div className="max-w-7xl lg:hidden block mx-auto bg-white rounded-lg border border-accent-yellow shadow-lg">
          <div
            onClick={() => setIsSearchModalOpen(true)}
            className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-gray-500" />
              <span className="text-gray-600">
                {location || "Where are you going?"}
              </span>
            </div>
            <Search className="w-5 h-5 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Full-Screen Mobile Search Modal */}
      <Dialog
        fullScreen
        open={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        TransitionComponent={Transition}
        className="sm:hidden"
      >
        <DialogTitle className="flex justify-between items-center p-4">
          <h2 className="text-xl font-bold">Search Hotels</h2>
          <button
            onClick={() => setIsSearchModalOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </DialogTitle>

        <DialogContent className="space-y-6 p-4">
          {/* Location Input */}
          <TextField
            fullWidth
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            variant="outlined"
            placeholder="Enter a city, hotel, or destination"
            InputProps={{
              startAdornment: <MapPin className="mr-2 text-gray-500" />,
            }}
            className="bg-white"
          />

          {/* Date Picker */}
          <div className="relative w-full">
            <DatePicker
              selectsRange={true}
              startDate={startDate}
              endDate={endDate}
              onChange={(update) => setDateRange(update as [Date, Date])}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholderText="Select date range"
            />
            <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>

          {/* Guest Selection */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Guests</h3>
            {renderGuestCounter("adults", "Adults")}
            {renderGuestCounter("children", "Children")}
            {renderGuestCounter("rooms", "Rooms")}
          </div>
        </DialogContent>

        <DialogActions className="p-4">
          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            className="bg-primary-dark text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-light transition"
            onClick={handleSearchSubmit}
          >
            Search
          </Button>
        </DialogActions>
      </Dialog>

      {/* Desktop Search */}
      <div className="hidden sm:block">
        <div className="max-w-7xl mx-auto bg-white rounded-lg border border-accent-yellow shadow-lg flex flex-col md:flex-row items-center justify-between p-6">
          {/* Location Input */}
          <Box className="flex-1 w-full mb-4 md:mb-0 md:mr-4">
            <TextField
              fullWidth
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              variant="outlined"
              placeholder="Enter a city, hotel, or destination"
              InputProps={{
                startAdornment: <MapPin className="mr-2 text-gray-500" />,
              }}
              className="bg-white"
            />
          </Box>

          <div className="relative ">
            <div className="relative">
              <DatePicker
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => setDateRange(update as [Date, Date])}
                className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholderText="Select date range"
              />
              <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          {/* Guests and Rooms */}
          <Box className="flex-1 w-full mb-4 md:mb-0 md:mr-4 ml-3">
            <TextField
              fullWidth
              value={guestSummary}
              variant="outlined"
              className="bg-white"
              InputProps={{
                startAdornment: <Users className="mr-2 text-gray-500" />,
              }}
              onClick={() => setIsSearchModalOpen(true)}
              readOnly
            />
          </Box>

          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSearchSubmit}
            className="bg-primary-dark text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-light transition"
          >
            Search
          </Button>
        </div>
      </div>
    </>
  );
}
