import React from "react";
import "tailwindcss/tailwind.css";
// import BluerForm from "../atoms/Form/Form";
import TwoMainButtons from "../atoms/Form/TwoMainButtons";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <div className="relative w-full h-0" style={{ paddingBottom: "56.25%" }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/mfxQy5A_tHs?autoplay=1&controls=0&showinfo=0&rel=0&mute=1"
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Form Above Video */}
      {/* <BluerForm /> */}
      <TwoMainButtons />
    </section>
  );
};

export default HeroSection;
