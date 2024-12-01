"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

interface ReviewSliderProps {
  reviews: Review[];
}

export default function ReviewSlider({ reviews }: ReviewSliderProps) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <ChevronLeft className="text-primary" />,
    nextArrow: <ChevronRight className="text-primary" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="my-8">
      <Slider {...settings}>
        {reviews.map((review) => (
          <div key={review.id} className="px-4 mb-1 cursor-pointer">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">{review.author}</h3>
                <div className="flex items-center">
                  <span className="text-yellow-400">★</span>
                  <span className="ml-1">{review.rating}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-2">{review.comment}</p>
              <p className="text-sm text-gray-400">{review.date}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
