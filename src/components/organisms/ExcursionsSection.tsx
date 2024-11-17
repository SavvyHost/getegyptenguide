import React from "react";
import Excursions from "../molecules/Excursions/Excursions";
import { TourPackage } from "@/types/tour"; // Import TourPackage type

interface ExcursionsSectionProps {
  toursData: TourPackage[]; // Define the type for toursData
}

const ExcursionsSection: React.FC<ExcursionsSectionProps> = ({ toursData }) => {
  return (
    <div className="bg-[#FAFAFA]">
      <div className="text-left lg:px-16 p-2 mb-4 text-black font-segoe sm:font-semi-bold font-medium text-2xl md:text-special-offer">
        Top excusrions
      </div>
      <div className="ml-40">
        <Excursions toursData={toursData} />{" "}
      </div>
    </div>
  );
};

export default ExcursionsSection;
