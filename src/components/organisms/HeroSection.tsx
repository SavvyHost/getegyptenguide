import React from "react";
import "tailwindcss/tailwind.css";
// import BluerForm from "../atoms/Form/Form";
import TwoMainButtons from "../atoms/Form/TwoMainButtons";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[95vh] overflow-hidden">
      {/* Video Background */}
      <div className="relative w-full h-0" style={{ paddingBottom: "56.25%" }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/dz8qoMeNlBs?autoplay=1&controls=0&showinfo=0&rel=0&mute=1&loop=1&playlist=dz8qoMeNlBs"
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Content Above Video */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
        {/* <BluerForm /> */}
        <TwoMainButtons />
      </div>
    </section>
  );
};

export default HeroSection;
