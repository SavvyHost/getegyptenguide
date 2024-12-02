"use client";

import React, { useState, useEffect, useCallback } from "react";
import Excursions from "@/components/molecules/Excursions/Excursions";
import fetchData from "@/helper/FetchData";
import { TourPackage } from "@/types/tour";
import SearchExcursions from "@/components/atoms/SearchExcursions/SearchExcursios";
import Explore from "@/components/molecules/ExploreExcursios";
import Drops from "@/components/atoms/drops";
import { useScroll } from "@/hooks/useScroll";

interface HomeProps {
  toursData: TourPackage[];
}

const ITEMS_PER_PAGE = 8;

const Home: React.FC<HomeProps> = ({ toursData }) => {
  const { visible, scrolledPastThreshold, isAtTop } = useScroll();
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedTours, setDisplayedTours] = useState<TourPackage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadMoreTours = useCallback(() => {
    if (isLoading || displayedTours.length >= toursData.length) return;

    setIsLoading(true);

    // Simulate loading with a delay
    setTimeout(() => {
      const startIndex = displayedTours.length;
      const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, toursData.length);
      const newTours = toursData.slice(startIndex, endIndex);

      setDisplayedTours((prev) => [...prev, ...newTours]);
      setIsLoading(false);
    }, 50); // -0.50 second delay
  }, [toursData, displayedTours, isLoading]);

  useEffect(() => {
    setDisplayedTours(toursData.slice(0, ITEMS_PER_PAGE));
  }, [toursData]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 100 >=
        document.documentElement.offsetHeight
      ) {
        loadMoreTours();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadMoreTours]);

  return (
    <div className="lg:px-16 p-2 ">
      <div className="h-[140px] lg:hidden block" />{" "}
      {/* Increased space for header + search */}
      <div
        className={`lg:hidden block fixed left-0 right-0 z-30 transition-all duration-300 ease-in-out
          ${visible ? "top-[70px]" : "top-0"}
          ${scrolledPastThreshold ? "bg-white shadow-md" : "bg-white"}
          ${isAtTop ? "" : "backdrop-blur-lg bg-white/90"}`}
      >
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <SearchExcursions />
        </div>
      </div>
      <div className="mt-28 lg:block hidden">
        <SearchExcursions />
      </div>
      <div className="mt-2">
        <Explore />
      </div>
      <div className="lg:my-6 my-0">
        <Drops />
      </div>
      <div>
        <h2 className="md:text-3xl text-xl font-segoe mb-4 text-start">
          Tours and Tickets
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-2 lg:p-0">
          {displayedTours.map((tour) => (
            <Excursions
              key={tour.id}
              id={tour.id}
              title={tour.title}
              location={tour.location}
              price={tour.min_price}
              image={tour.main_image.url}
              rating={2}
              destination={tour.destination}
              duration={tour.duration}
              ageRange={tour.age_range}
            />
          ))}
        </div>
        {isLoading && (
          <div className="flex justify-center mt-6">
            <div className="w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const data = await fetchData("tours?type=excursion");
  return {
    props: {
      toursData: data.data as TourPackage[],
    },
  };
}
