export interface HotelImage {
  id: number;
  url: string;
  alt: string;
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Hotel {
  id: string;
  name: string;
  rating: number;
  location: string;
  description: string;
  price: number;
  images: HotelImage[];
  reviews: Review[];
}

export const hotels: Hotel[] = [
  {
    id: "1",
    name: "Pyramids GOLDEN TEMPLE HOTEL",
    rating: 4.7,
    location: "Giza Square, Cairo - Near Great Pyramids",
    description: "Experience luxury and history at our 5-star hotel overlooking the majestic Pyramids of Giza. Featuring elegant rooms, world-class dining, and exceptional amenities, we offer an unforgettable stay in one of the world's most iconic locations.",
    price: 250,
    images: [
      {
        id: 1,
        url: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        alt: "Pyramids View",
      },
      {
        id: 2,
        url: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Hotel Room",
      },
      {
        id: 3,
        url: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Restaurant",
      },
      {
        id: 4,
        url: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Pool",
      },
      {
        id: 5,
        url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Spa",
      },
    ],
    reviews: [
      {
        id: 1,
        author: "John D.",
        rating: 4.8,
        comment: "Amazing view of the pyramids! The staff was incredibly helpful and friendly.",
        date: "March 2024",
      },
      {
        id: 2,
        author: "Sarah M.",
        rating: 4.5,
        comment: "Beautiful hotel with excellent amenities. The rooftop restaurant is a must-visit!",
        date: "February 2024",
      },
      {
        id: 3,
        author: "Michael R.",
        rating: 4.7,
        comment: "Perfect location for exploring the pyramids. Rooms are spacious and clean.",
        date: "January 2024",
      },
    ],
  },
];

export function getHotelById(id: string): Hotel | undefined {
  return hotels.find(hotel => hotel.id === id);
}