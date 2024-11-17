import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

type ExcursionCardProps = {
  recommendation: string;
};

const TournCard: React.FC<ExcursionCardProps> = ({ recommendation }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelectChange = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div
      className={` ml-3 cursor-pointer overflow-hidden   transition-border duration-300 ease-in-out ${
        isSelected ? "" : "border border-primary-dark rounded-md"
      }`}
      style={{ width: "90%" }} // Reduce card width
      onClick={handleSelectChange} // Toggle selection on click
    >
      <div className="flex items-center p-2">
        <p className="text-xs md:text-sm font-medium text-center">
          {recommendation}
        </p>
      </div>

      {/* Progress Bar */}
      <div
        className={`h-2 rounded-xl bg-primary-light mx-auto transition-all duration-500 ease-in-out ${
          isSelected ? "w-[97%]" : "w-0"
        }`}
      />
    </div>
  );
};

export default TournCard;
