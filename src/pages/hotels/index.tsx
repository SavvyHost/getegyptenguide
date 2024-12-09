"use client";

import React, { useState } from "react";
import { Box, Container, Drawer } from "@mui/material";
import SearchBar from "@/components/templates/hotels/SearchBar";
import HotelSidebar from "@/components/templates/hotels/HotelSidebar";
import HotelCard from "@/components/templates/hotels/HotelCard";
import { hotelData } from "../../../src/data";
import { Filter } from "lucide-react";

export default function HotelsPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <Container maxWidth="xl" className="relative mt-20 sm:mt-32">
      <div className="sm:hidden mb-4 px-4">
        <button
          onClick={() => setIsFilterOpen(true)}
          className="flex items-center justify-center gap-2 w-full bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-lg shadow-md text-gray-700 font-medium"
        >
          <Filter className="w-5 h-5" />
          <span>Filters</span>
        </button>
      </div>

      <SearchBar
        isMobile={false}
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      <Box
        display={{ xs: "block", sm: "flex" }}
        gap={3}
        mt={4}
        alignItems="flex-start"
      >
        <Box className="hidden sm:block h-fit" sx={{ width: 320 }}>
          <HotelSidebar />
        </Box>

        <Box flex={1}>
          {hotelData.map((hotel, index) => (
            <HotelCard key={index} {...hotel} />
          ))}
        </Box>
      </Box>

      <Drawer
        anchor="right"
        open={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        className="sm:hidden"
        PaperProps={{
          sx: {
            width: "100%",
            height: "100%",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
        }}
      >
        <HotelSidebar isMobile={true} onClose={() => setIsFilterOpen(false)} />
      </Drawer>
    </Container>
  );
}
