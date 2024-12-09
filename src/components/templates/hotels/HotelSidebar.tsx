"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  Slider,
  Divider,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import { Search, Clear, X } from "@mui/icons-material";

interface FilterOption {
  label: string;
  count: number;
}

const propertyTypes: FilterOption[] = [
  { label: "Guest houses", count: 6 },
  { label: "Chalets", count: 4 },
  { label: "Bed and breakfasts", count: 4 },
  { label: "Holiday homes", count: 3 },
  { label: "Apartments", count: 301 },
  { label: "Villas", count: 21 },
  { label: "Campsites", count: 2 },
];

const popularFilters: FilterOption[] = [
  { label: "Beach", count: 259 },
  { label: "4 stars", count: 135 },
  { label: "Free cancellation", count: 101 },
  { label: "No prepayment", count: 113 },
  { label: "Book without credit card", count: 120 },
  { label: "All inclusive", count: 97 },
  { label: "Very good: 8+", count: 53 },
  { label: "Sea view", count: 101 },
];

const amenities: FilterOption[] = [
  { label: "WiFi", count: 150 },
  { label: "Parking", count: 80 },
  { label: "Swimming Pool", count: 60 },
  { label: "Spa", count: 30 },
  { label: "Gym", count: 40 },
  { label: "Pet-friendly", count: 25 },
];

interface HotelSidebarProps {
  isMobile?: boolean;
  onClose?: () => void;
}

export default function HotelSidebar({
  isMobile = false,
  onClose,
}: HotelSidebarProps) {
  const [priceRange, setPriceRange] = useState<number[]>([0, 20000]);
  const [searchText, setSearchText] = useState("");

  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
  };

  const renderFilterSection = (title: string, options: FilterOption[]) => (
    <Box mt={3}>
      <Typography variant="subtitle1" fontWeight="medium">
        {title}
      </Typography>
      <Box>
        {options.map((option) => (
          <FormControlLabel
            key={option.label}
            control={<Checkbox />}
            label={`${option.label} (${option.count})`}
          />
        ))}
      </Box>
    </Box>
  );

  return (
    <Box
      sx={{
        width: isMobile ? "100%" : 320,
        p: 3,
        height: isMobile ? "100%" : "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {isMobile && (
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography variant="h6" fontWeight="bold">
            Filter by:
          </Typography>
          <IconButton onClick={onClose}>
            <X />
          </IconButton>
        </Box>
      )}

      {/* Search Bar */}
      <Box display="flex" alignItems="center" mb={3}>
        <TextField
          fullWidth
          placeholder="Search filters"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <IconButton size="small">
                <Search />
              </IconButton>
            ),
            endAdornment: searchText && (
              <IconButton size="small" onClick={() => setSearchText("")}>
                <Clear />
              </IconButton>
            ),
          }}
        />
      </Box>

      <Box sx={{ overflowY: "auto", flex: 1 }}>
        {renderFilterSection("Property types", propertyTypes)}

        <Divider sx={{ my: 2 }} />

        {/* Price Range Slider */}
        <Box>
          <Typography variant="subtitle1" fontWeight="medium">
            Your budget (per night)
          </Typography>
          <Slider
            value={priceRange}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            min={0}
            max={20000}
            step={100}
            color="primary"
          />
          <Box display="flex" justifyContent="space-between">
            <Typography variant="body2">
              EGP {priceRange[0].toLocaleString()}
            </Typography>
            <Typography variant="body2">
              EGP {priceRange[1].toLocaleString()}
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />

        {renderFilterSection("Popular filters", popularFilters)}

        <Divider sx={{ my: 2 }} />

        {renderFilterSection("Amenities", amenities)}
      </Box>

      {/* Apply Filters Button */}
      <Box
        display="flex"
        justifyContent="normal"
        mt={3}
        sx={{
          position: isMobile ? "sticky" : "static",
          bottom: 0,
          background: "white",
          pt: 2,
          boxShadow: isMobile ? "0 -10px 15px -3px rgba(0,0,0,0.1)" : "none",
        }}
      >
        <Button
          className="bg-primary-dark hover:bg-primary-light text-white w-full"
          size="large"
          sx={{
            textTransform: "none",
            fontWeight: "bold",
            py: 1.5,
          }}
          onClick={onClose}
        >
          Apply Filters
        </Button>
      </Box>
    </Box>
  );
}
