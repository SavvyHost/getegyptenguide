import Banner from "@/components/molecules/planes/BannerPlane";
import PlaneCard from "@/components/molecules/planes/PlaneCard";
import { planes } from "@/data";
import React from "react";

function Planes() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Banner />

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Available Aircraft
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {planes.map((plane) => (
            <PlaneCard
              key={plane.id}
              image={plane.image}
              name={plane.name}
              capacity={plane.capacity}
              range={plane.range}
              price={plane.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Planes;
