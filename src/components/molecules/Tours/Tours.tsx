import React from "react";
import Slider from "react-slick";
import AttractionCard from "@/components/templates/AttractionCard";
import { ToursData } from "@/types/tour";

interface ToursProps {
  toursData: ToursData;
}

const Tours: React.FC<ToursProps> = ({ toursData }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    className: "gap-4", // Add gap between slides
    dotsClass: "slick-dots mb-4", // Add margin below dots
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="w-full ">
      <div className="relative">
        <Slider {...settings}>
          {toursData.data.map(
            (attraction) =>
              attraction.is_best_deal === 1 && (
                <div key={attraction.id} className="px-2">
                  <div className="h-full">
                    <AttractionCard
                      id={attraction.id}
                      title={attraction.title}
                      location={attraction.location}
                      price={attraction.min_price}
                      image={attraction.main_image.url}
                      rating={2}
                      duration={attraction.duration}
                      ageRange={attraction.age_range}
                    />
                  </div>
                </div>
              )
          )}
        </Slider>
      </div>
    </div>
  );
};

export default Tours;
