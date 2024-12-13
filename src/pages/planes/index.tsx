import Banner from "@/components/molecules/planes/BannerPlane";
import PlaneCard from "@/components/molecules/planes/PlaneCard";
import { flights } from "@/data";
import React from "react";

function Planes() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Banner />

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Available Aircraft
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {flights.map((plane) => (
            <PlaneCard
              key={plane.id}
              logo={plane.logo}
              airline={plane.airline}
              heliport={plane.heliport}
              price={plane.price}
              landing={plane.landing}
              takeoff={plane.takeoff}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Planes;
