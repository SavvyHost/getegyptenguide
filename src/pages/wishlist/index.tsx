<<<<<<< HEAD
import React, { useState } from "react";
import Image from "next/image";
import EMPTY from "../../../public/assets/payment-error.png";
import AttractionCard from "@/components/templates/AttractionCard";
import Link from "next/link";
import { useWishlist } from "@/contexts/wishlist-context";
import { FaTrash } from "react-icons/fa";

const WishlistPage = () => {
  const { wishlist, toggleWishlist, wishlistCount } = useWishlist();
  const [isEditMode, setIsEditMode] = useState(false);

  // No need for separate loading state as context handles initialization
  if (wishlist.length === 0) {
=======
// WishlistPage.tsx
import AttractionCard from "@/components/templates/AttractionCard";
import React, { useEffect, useState, useCallback } from "react";
import Image, { StaticImageData } from "next/image";
import EMPTY from "../../../public/assets/payment-error.png";
import Link from "next/link";
interface WishlistItem {
  id: number;
  title: string;
  location?: string;
  price: number;
  image: StaticImageData;
  rating: number;
  duration: string;
  ageRange: string;
}

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadWishlistItems();
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const loadWishlistItems = useCallback(() => {
    setIsLoading(true);
    setError(null);
    try {
      const savedWishlist = localStorage.getItem("wishlist");
      if (savedWishlist) {
        const parsed = JSON.parse(savedWishlist);
        if (
          Array.isArray(parsed) &&
          parsed.every((item) => typeof item.id === "number")
        ) {
          setWishlistItems(parsed as WishlistItem[]);
        } else {
          throw new Error("Invalid wishlist data format");
        }
      } else {
        setWishlistItems([]);
      }
    } catch (error) {
      console.error("Error loading wishlist:", error);
      setError("Unable to load wishlist. Please try refreshing the page.");
      localStorage.removeItem("wishlist");
      setWishlistItems([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleRemoveFromWishlist = useCallback((id: number) => {
    setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }, []);

  if (isLoading) {
    return (
      <div className="container mx-auto px-9 mt-16 py-8">
        <h1 className="text-2xl font-bold text-left text-red font-segoe sm:font-semi-bold md:text-special-offer my-8">
          My Wishlist
        </h1>
        <p>Loading wishlist...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-9 mt-16 py-8">
        <h1 className="text-2xl font-bold text-left text-red font-segoe sm:font-semi-bold md:text-special-offer my-8">
          My Wishlist
        </h1>
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (wishlistItems.length === 0) {
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94
    return (
      <div className="container mx-auto px-9 mt-16 py-8">
        <h1 className="text-2xl font-bold text-left text-red font-segoe sm:font-semi-bold md:text-special-offer my-8">
          My Wishlist
        </h1>

        <div className="container mx-auto px-9 mt-3 py-2 flex flex-col items-center text-center">
          <Image
            src={EMPTY}
            width={300}
            height={300}
<<<<<<< HEAD
            className="w-60 h-60 mb-6"
            alt="Empty wishlist"
            priority
=======
            className="w-60 h-60 mb-6" // Add margin-bottom to increase space below the image
            alt=""
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94
          />

          <p className="text-gray-600 max-w-md">
            Your wishlist is empty. Browse our attractions to add some!{" "}
            <Link href="/" className="text-blue-500 underline">
              Discover More
            </Link>
          </p>
        </div>
      </div>
    );
  }

  return (
<<<<<<< HEAD
    <div className="container mx-auto lg:px-9 px-3 lg:mt-24 mt-14 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-left text-red font-segoe sm:font-semi-bold md:text-special-offer">
          My Wishlist ({wishlistCount} items)
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {wishlist.map((attraction) => (
          <div key={attraction.id} className="relative">
            <AttractionCard {...attraction} isEditMode={isEditMode} />
          </div>
=======
    <div className="container mx-auto px-9 mt-16 py-8">
      <h1 className="text-2xl font-bold text-left text-red font-segoe sm:font-semi-bold md:text-special-offer my-8">
        My Wishlist
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {wishlistItems.map((attraction) => (
          <AttractionCard
            key={attraction.id}
            {...attraction}
            onRemove={() => handleRemoveFromWishlist(attraction.id)}
          />
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
