// hotels/[id]/index.tsx

import { GetStaticPropsContext } from "next";
import { MapPin, Star } from "lucide-react";
import { getHotelById, hotels, Hotel } from "@/lib/hotels";
import HotelGallery from "@/components/templates/hotels/HotelGallery";
import HotelAmenities from "@/components/templates/hotels/HotelAmenities";
import ReviewSlider from "@/components/templates/hotels/ReviewSlider";
import RoomDetails from "@/components/templates/hotels/RoomDetails";
import PriceDetails from "@/components/templates/hotels/PriceDetails";

interface HotelPageProps {
  hotel: Hotel;
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { id } = context.params!;
  const hotel = getHotelById(id as string);

  if (!hotel) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      hotel,
    },
  };
}

export async function getStaticPaths() {
  const paths = hotels.map((hotel) => ({ params: { id: hotel.id } }));
  return {
    paths,
    fallback: false, // Change to 'blocking' or 'true' if fallback behavior is needed
  };
}

export default function HotelPage({ hotel }: HotelPageProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:py-8 py-3 mt-24">
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">{hotel.name}</h1>
          <div className="flex items-center space-x-2">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="text-lg font-semibold">{hotel.rating}</span>
          </div>
        </div>
        <div className="flex items-center text-gray-600 mt-2">
          <MapPin className="w-5 h-5 mr-2" />
          <span>{hotel.location}</span>
        </div>
      </div>

      <HotelGallery images={hotel.images} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">About the Property</h2>
          <p className="text-gray-600 mb-6">{hotel.description}</p>

          <h2 className="text-2xl font-semibold mb-4">Property Amenities</h2>
          <HotelAmenities />

          <h2 className="text-2xl font-semibold mb-4">Guest Reviews</h2>
          <ReviewSlider reviews={hotel.reviews} />
        </div>

        <PriceDetails hotel={hotel} />
      </div>
      <RoomDetails />
    </div>
  );
}
