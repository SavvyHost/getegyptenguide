// import React, { useEffect, useRef, useState } from "react";
// import ProfileCard from "@/components/templates/ProfileCard";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { VscArrowSmallLeft, VscArrowSmallRight } from "react-icons/vsc";

// // Reviews data (same as before)
// const reviews = [
//   {
//     name: "Sarah Nichols",
//     username: "sarah_n",
//     date: "2024-08-01",
//     rating: 4,
//     content:
//       "Great experience! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//   },
//   {
//     name: "John Doe",
//     username: "john_d",
//     date: "2024-08-02",
//     rating: 5,
//     content:
//       "Amazing service! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//   },
//   {
//     name: "Jane Smith",
//     username: "jane_s",
//     date: "2024-08-03",
//     rating: 3,
//     content:
//       "It was okay. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//   },
//   {
//     name: "Michael Clark",
//     username: "michael_c",
//     date: "2024-08-05",
//     rating: 5,
//     content:
//       "Absolutely wonderful! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//   },
//   {
//     name: "Lisa Brown",
//     username: "lisa_b",
//     date: "2024-08-06",
//     rating: 4,
//     content:
//       "Great product and service. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//   },
// ];

// const ProfileCardsContainer: React.FC = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   const sliderRef = useRef<any>(null); // Reference to the slider

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const settings = {
//     infinite: false,
//     speed: 500,
//     slidesToShow: 1.5,
//     slidesToScroll: 1,
//     centerMode: false,
//     centerPadding: "0",
//     arrows: false, // Disable default arrows
//     draggable: true,
//     // autoplay: true,
//     // autoplaySpeed: 2000,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 1.5,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   // Custom next/prev handlers
//   const handleNext = () => {
//     if (sliderRef.current) {
//       sliderRef.current.slickNext();
//     }
//   };

//   const handlePrev = () => {
//     if (sliderRef.current) {
//       sliderRef.current.slickPrev();
//     }
//   };

//   return (
//     <div className="relative w-full overflow-hidden cursor-pointer">
//       {/* Custom Previous Arrow */}
//       <div
//         className="custom-prev-arrow  hidden bg-green-800 p-3 rounded-full absolute left-32 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-green-700"
//         onClick={handlePrev}
//       >
//         <VscArrowSmallLeft className="text-white text-xl" />
//       </div>

//       {/* Custom Next Arrow */}
//       <div
//         className="custom-next-arrow  hidden bg-green-800 p-3 rounded-full absolute right-32 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-green-700"
//         onClick={handleNext}
//       >
//         <VscArrowSmallRight className="text-white text-lg" />
//       </div>

//       {/* Slick Slider */}
//       <Slider ref={sliderRef} {...settings}>
//         {reviews.map((review, index) => (
//           <div key={index} className="w-full">
//             <ProfileCard
//               name={review.name}
//               username={review.username}
//               date={review.date}
//               rating={review.rating}
//               content={review.content}
//             />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default ProfileCardsContainer;

import React from "react";
import Slider from "react-slick";
import { Star } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import TripLogo from "../../../../public/assets/trip-advisor-logo-png-1024x483.png";

interface Review {
  rating: number;
  title: string;
  content: string;
  timeAgo: string;
}

const reviews: Review[] = [
  {
    rating: 5,
    title: "They are nice knows their work readily...",
    content:
      "They are nice knows their work readily answers your questions with additional infos. Very accommodating...",
    timeAgo: "23 minutes ago",
  },
  {
    rating: 5,
    title: "Hop-on Hop-off in Montreal",
    content:
      "Frequency of the buses and the guides. We were told on day #1, there would be less frequent service...",
    timeAgo: "26 minutes ago",
  },
  {
    rating: 5,
    title: "This was a great tour",
    content:
      "This was a great tour, especially if you don't want to drive to Northern Ireland as there was a lot of traffic...",
    timeAgo: "27 minutes ago",
  },
  {
    rating: 5,
    title: "They are nice knows their work readily...",
    content:
      "They are nice knows their work readily answers your questions with additional infos. Very accommodating...",
    timeAgo: "23 minutes ago",
  },
  {
    rating: 5,
    title: "Hop-on Hop-off in Montreal",
    content:
      "Frequency of the buses and the guides. We were told on day #1, there would be less frequent service...",
    timeAgo: "26 minutes ago",
  },
  {
    rating: 5,
    title: "This was a great tour",
    content:
      "This was a great tour, especially if you don't want to drive to Northern Ireland as there was a lot of traffic...",
    timeAgo: "27 minutes ago",
  },
];

const TrustpilotReviewComponent: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 4,

    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
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
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="flex flex-col md:flex-row ">
      {/* Trustpilot rating */}
      <div className="w-full md:w-1/4 mb-6 md:mb-0 md:pr-4">
        <div className="">
          <h2 className="text-xl font-bold mb-2">Excellent</h2>
          <div className="flex mb-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="text-green-700 fill-current" size={24} />
            ))}
          </div>
          <p className="text-sm text-gray-600 mb-4">Based on 223,512 reviews</p>
          <div className="flex items-center justify-between">
            <Image
              src={TripLogo}
              alt="Trustpilot logo"
              width={120}
              height={30}
            />
            <p className="text-xs text-gray-500 ml-2">
              Viator does not perform checks on Trustpilot reviews.
            </p>
          </div>
        </div>
      </div>

      {/* Review slider */}
      <div className="w-full md:w-3/4">
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="px-2 cursor-pointer">
              <div className=" h-full">
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`${
                        i < review.rating
                          ? "text-green-700 fill-current"
                          : "text-gray-300"
                      }`}
                      size={16}
                    />
                  ))}
                </div>
                <h3 className="font-semibold mb-2 text-lg">{review.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{review.content}</p>
                <p className="text-xs text-gray-500">{review.timeAgo}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TrustpilotReviewComponent;
