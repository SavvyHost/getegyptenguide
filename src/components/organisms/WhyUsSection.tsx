import { FC } from "react";
import Slider from "react-slick";
import { Compass, Leaf, Shield, Superscript } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeatureSection: FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const features = [
    {
      icon: Leaf,
      title: "Sustainable Travel",
      description:
        "Adventure sustainably with TourRadar. We are committed to conscious travel.",
      link: "View our pledge",
      href: "#",
    },
    {
      icon: Shield,
      title: "Trust and Confidence",
      description:
        "Book with confidence through verified operators and secure payment systems.",
      link: "Learn more",
      href: "#",
    },
    {
      icon: Compass,
      title: "Discover New Places",
      description:
        "Explore destinations you've never been to with carefully curated tours that highlight local cultures.",
      link: "Start exploring",
      href: "#",
    },
    {
      icon: Superscript,
      title: "Support Local Communities",
      description:
        "Every booking you make contributes to the wellbeing of local communities around the globe.",
      link: "Learn how",
      href: "#",
    },
  ];

  const FeatureItem = ({ icon: Icon, title, description, link, href }) => (
    <div className="flex flex-col lg:mx-0 mx-5 mb-3 lg:mb-0 cursor-pointer items-center text-center p-6 bg-accent-white rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
      <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-primary-light text-accent-white hover:bg-black transition-colors">
        <Icon className="w-10 h-10" /> {/* Lucide icon with size adjustments */}
      </div>
      <h3 className="text-lg font-semibold text-primary-dark">{title}</h3>
      <p className="text-gray-500 max-w-xs mb-4">{description}</p>
      <a
        href={href}
        className="text-primary-light font-semibold hover:text-black transition-colors"
      >
        {link}
      </a>
    </div>
  );

  return (
    <section className="max-w-screen-xl mx-auto py-10  flex flex-col items-center">
      {/* Slick Slider for mobile */}
      <div className="block lg:hidden w-full ">
        <Slider {...settings}>
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </Slider>
      </div>

      {/* Regular View for larger screens */}
      <div className="hidden lg:flex justify-center items-center space-x-12">
        {features.map((feature, index) => (
          <FeatureItem key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
