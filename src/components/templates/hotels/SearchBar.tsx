import React from "react";
import { TextField, MenuItem, Button, Box } from "@mui/material";
import { LocalizationProvider, DateRangePicker } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

export default function SearchBar() {
  const [dateRange, setDateRange] = React.useState([
    dayjs(),
    dayjs().add(2, "day"),
  ]);
  const [guests, setGuests] = React.useState("2 adults · 0 children · 1 room");

  const guestOptions = [
    "2 adults · 0 children · 1 room",
    "1 adult · 0 children · 1 room",
    "2 adults · 1 child · 1 room",
  ];

  return (
    <div className="">
      <div className="max-w-7xl mx-auto bg-white rounded-lg border border-accent-yellow shadow-lg flex flex-col md:flex-row items-center justify-between p-6">
        {/* Location Input */}
        <Box className="flex-1 w-full mb-4 md:mb-0 md:mr-4">
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Enter a city, hotel, or destination"
            InputProps={{
              startAdornment: (
                <span className="material-icons text-gray-500 mr-2">
                  location_on
                </span>
              ),
            }}
            className="bg-white"
          />
        </Box>

        {/* Date Picker */}
        <Box className="flex-1 w-full mb-4 md:mb-0 md:mr-4">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateRangePicker
              value={dateRange}
              onChange={(newValue) => setDateRange(newValue)}
              renderInput={(startProps, endProps) => (
                <>
                  <TextField
                    {...startProps}
                    fullWidth
                    variant="outlined"
                    className="bg-white"
                  />
                  <span className="mx-2 text-gray-500">to</span>
                  <TextField
                    {...endProps}
                    fullWidth
                    variant="outlined"
                    className="bg-white"
                  />
                </>
              )}
            />
          </LocalizationProvider>
        </Box>

        {/* Guests and Rooms */}
        <Box className="flex-1 w-full mb-4 md:mb-0 md:mr-4">
          <TextField
            select
            fullWidth
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            variant="outlined"
            className="bg-white"
            SelectProps={{
              MenuProps: {
                disableScrollLock: true, // Prevent scroll-lock interference
              },
            }}
          >
            {guestOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        {/* Search Button */}
        <Button
          variant="contained"
          color="primary"
          size="large"
          className="bg-primary-dark text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-light transition"
        >
          Search
        </Button>
      </div>
    </div>
  );
}
