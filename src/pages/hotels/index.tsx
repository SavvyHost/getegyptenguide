"use client";

import React from "react";
import { Box, Container } from "@mui/material";

import SearchBar from "@/components/templates/hotels/SearchBar";
import HotelSidebar from "@/components/templates/hotels/HotelSidebar";
import HotelCard from "@/components/templates/hotels/HotelCard";

export default function HotelsPage() {
  // Sample hotel data
  const hotelData = [
    {
      id: 1,
      name: "Luxury Beach Resort",
      location: "Hurghada, Egypt",
      rating: 4.5,
      reviews: 1245,
      distance: "2.5 km",
      price: 1800,
      originalPrice: 2200,
      taxes: 250,
      nights: 3,
      guests: 2,
      imageUrl:
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      dealType: "Best Deal",
      roomType: "Deluxe Sea View Room",
      bedInfo: "1 King Bed, City View",
    },
    {
      id: 2,
      name: "Urban Stay Hotel",
      location: "Cairo, Egypt",
      rating: 4.2,
      reviews: 876,
      distance: "1.2 km",
      price: 1200,
      originalPrice: 1500,
      taxes: 150,
      nights: 2,
      guests: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop",
      dealType: "Limited Offer",
      roomType: "Standard Room",
      bedInfo: "1 Queen Bed",
    },
    {
      id: 3,
      name: "Mountain Escape Lodge",
      location: "Aswan, Egypt",
      rating: 4.8,
      reviews: 645,
      distance: "10 km",
      price: 2000,
      originalPrice: 2500,
      taxes: 300,
      nights: 4,
      guests: 2,
      imageUrl:
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      dealType: "Hot Deal",
      roomType: "Superior Mountain View Room",
      bedInfo: "2 Twin Beds",
    },
    {
      id: 4,
      name: "City Center Inn",
      location: "Alexandria, Egypt",
      rating: 3.9,
      reviews: 542,
      distance: "0.8 km",
      price: 800,
      originalPrice: 1000,
      taxes: 100,
      nights: 1,
      guests: 2,
      imageUrl:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop",
      dealType: "Weekend Special",
      roomType: "Economy Room",
      bedInfo: "1 Full Bed",
    },
    {
      id: 5,
      name: "Desert Oasis Resort",
      location: "Sharm El Sheikh, Egypt",
      rating: 4.7,
      reviews: 989,
      distance: "5.3 km",
      price: 2500,
      originalPrice: 3000,
      taxes: 350,
      nights: 5,
      guests: 3,
      imageUrl:
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      dealType: "Family Package",
      roomType: "Family Suite",
      bedInfo: "2 King Beds, Sea View",
    },
    {
      id: 6,
      name: "Historic Palace Hotel",
      location: "Luxor, Egypt",
      rating: 4.6,
      reviews: 764,
      distance: "3.0 km",
      price: 2200,
      originalPrice: 2700,
      taxes: 300,
      nights: 3,
      guests: 2,
      imageUrl:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      dealType: "Romantic Getaway",
      roomType: "Luxury Suite",
      bedInfo: "1 King Bed, Nile View",
    },
  ];

  return (
    <Container maxWidth="xl" className="mt-32">
      <SearchBar />
      <Box display="flex" gap={3} mt={4} alignItems="flex-start">
        {/* Sidebar with `h-fit` */}
        <Box className="h-fit">
          <HotelSidebar />
        </Box>

        {/* Main Content */}
        <Box flex={1}>
          {hotelData.map((hotel, index) => (
            <HotelCard key={index} {...hotel} />
          ))}
        </Box>
      </Box>
    </Container>
  );
}
