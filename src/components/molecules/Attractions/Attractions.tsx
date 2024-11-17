import React, { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Attraction } from "@/types/tour";
import defaultImage from "../../../../public/assets/camels.jpeg";
import Link from "next/link";
type AttractionCardProps = {
  name: string;
  imageSrc: string; // Updated to string for dynamic image URLs
  toursCount: number;
  id: number;
};

const AttractionCard: React.FC<AttractionCardProps> = ({
  name,
  imageSrc,
  toursCount,
  id,
}) => {
  return (
    <Link href={`/attractions/${id}`} className="">
      <div className="flex shadow-sm hover:shadow-xl border border-gray-200 mb-3 items-center cursor-pointer rounded-lg overflow-hidden w-full max-w-xs  h-20 sm:h-24 transition-transform duration-300 ease-in-out hover:border hover:border-primary-light hover:bg-accent-white">
        <div className="w-20 h-20 sm:w-24 sm:h-24 relative flex-shrink-0 overflow-hidden">
          <Image
            src={imageSrc}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="transform transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>
        <div className="flex-grow p-2 sm:p-4 flex flex-col justify-center">
          <h2 className="text-xs text-wrap sm:text-sm font-semibold text-gray-800 truncate text-clip font-segoe">
            {name}
          </h2>
          <p className="text-sm text-gray-600 truncate font-segoe">
            {toursCount} Tours and Activities
          </p>
        </div>
      </div>
    </Link>
  );
};

type Props = {
  attractions: Attraction[]; // Accept dynamic data for attractions
};

const Attractions: React.FC<Props> = ({ attractions }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    rows: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="slider-container w-full overflow-hidden p-0">
      {isMobile ? (
        <Slider {...sliderSettings}>
          {attractions.map((attraction) => (
            <div className="flex justify-start pr-3 pb-2" key={attraction.id}>
              <AttractionCard
                name={attraction.name}
                imageSrc={attraction.paner_image?.url || defaultImage}
                id={attraction.id} // Use the dynamic image
                toursCount={attraction.toursCount || 0} // Assuming the API has toursCount or related field
              />
            </div>
          ))}
        </Slider>
      ) : (
        <div className="grid grid-cols-4 gap-4 mb-3">
          {attractions.map((attraction) => (
            <div className="flex justify-start" key={attraction.id}>
              <AttractionCard
                name={attraction.name}
                id={attraction.id}
                imageSrc={attraction.paner_image?.url || defaultImage}
                toursCount={attraction.toursCount || 0}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Attractions;
