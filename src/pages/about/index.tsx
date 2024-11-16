// import fetchData from "@/helper/FetchData";
// import Image from "next/image";
// import React from "react";

// const About = ({ data }) => {
//   return (
//     <div className="2xl:container lg:mt-20 mt-14 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
//       <div className="flex flex-col lg:flex-row justify-between gap-8">
//         <div className="w-full lg:w-5/12 flex flex-col justify-center">
//           <h1 className="text-3xl lg:text-4xl font-segoe leading-9 text-yellow-800 pb-4">
//             About Us
//           </h1>
//           <p
//             className="font-segoe text-base leading-6 text-gray-600 "
//             dangerouslySetInnerHTML={{ __html: data?.data[0]?.value?.AboutUs }}
//           />
//         </div>
//         <div className="w-full lg:w-8/12 ">
//           <Image
//             width={100}
//             height={100}
//             className="w-full h-full"
//             src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
//             alt="A group of People"
//           />
//         </div>
//       </div>

//       <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
//         <div className="w-full lg:w-5/12 flex flex-col justify-center">
//           <h1 className="text-3xl lg:text-4xl font-segoe leading-9 text-yellow-800 pb-4">
//             Our Story
//           </h1>
//           <p
//             className="font-segoe text-base leading-6 text-gray-600 "
//             dangerouslySetInnerHTML={{ __html: data?.data[0]?.value?.OurStory }}
//           />
//         </div>
//         <div className="w-full lg:w-8/12 lg:pt-8">
//           <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 lg:gap-4 shadow-lg rounded-md">
//             <div className="p-4 pb-6 flex justify-center flex-col items-center">
//               <Image
//                 width={100}
//                 height={100}
//                 className="block"
//                 src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png"
//                 alt="Alexa featured Image"
//               />

//               <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
//                 Alexa
//               </p>
//             </div>
//             <div className="p-4 pb-6 flex justify-center flex-col items-center">
//               <Image
//                 width={100}
//                 height={100}
//                 className="block"
//                 src="https://i.ibb.co/fGmxhVy/Rectangle-119.png"
//                 alt="Olivia featured Image"
//               />

//               <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
//                 Olivia
//               </p>
//             </div>
//             <div className="p-4 pb-6 flex justify-center flex-col items-center">
//               <Image
//                 width={100}
//                 height={100}
//                 className="block"
//                 src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png"
//                 alt="Liam featued Image"
//               />

//               <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
//                 Liam
//               </p>
//             </div>
//             <div className="p-4 pb-6 flex justify-center flex-col items-center">
//               <Image
//                 width={100}
//                 height={100}
//                 className="block "
//                 src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png"
//                 alt="Elijah featured Image"
//               />

//               <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
//                 Elijah
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
// export async function getServerSideProps() {
//   const data = await fetchData("settings?collection=about");

//   return {
//     props: {
//       data: data,
//     },
//   };
// }

import React from "react";
import { Globe, Award, Cpu, Heart, ArrowRight } from "lucide-react";
import Image from "next/image";

import AboutImg from "../../../public/assets/download.jpeg";
import BgAbout from "../../../public/assets/bgabout.png";

const AboutUs = () => {
  const stats = [
    { number: "10+", label: "Countries Visited" },
    { number: "1000+", label: "Happy Travelers" },
    { number: "50+", label: "Destinations" },
    { number: "200+", label: "Tours Conducted" },
  ];

  const expertise = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Travel Expertise",
      description:
        "Experience in organizing tours across various continents with deep knowledge of local cultures.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Award-Winning Service",
      description:
        "Recognized for excellence in customer service and crafting unforgettable travel experiences.",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Tech-Driven Tours",
      description:
        "Leveraging technology to streamline bookings and enhance your travel experience.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion for Travel",
      description:
        "Our team is passionate about travel and committed to offering personalized tours.",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden bg-gradient-to-r from-green-600 to-green-500">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <Image
            src={BgAbout}
            alt="Travel destination"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 h-full flex items-center justify-center text-white px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Explore the World with Us
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Let us guide you through the most breathtaking destinations.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors duration-300">
                View Tours
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2 transform transition-transform duration-300 group-hover:scale-110">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-green-500 rounded-lg -z-10"></div>
              <Image
                src={AboutImg}
                alt="Travel Journey"
                className="rounded-lg shadow-xl w-9/12 transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Our Journey Around the World
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                From the first tour to global expansion, we've been dedicated to
                curating the finest travel experiences. Our journey has been
                filled with learning, adventure, and bringing people closer to
                their dream destinations.
              </p>
              <div className="space-y-4">
                {[2010, 2015, 2020, 2024].map((year) => (
                  <div key={year} className="flex items-center gap-4">
                    <div className="w-16 text-lg font-bold text-green-600">
                      {year}
                    </div>
                    <div className="flex-1 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                      Major milestone or achievement
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Why Travel with Us?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4 text-green-600">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Let's Plan Your Next Adventure
          </h2>
          <p className="text-xl mb-12 text-green-100">
            Ready for the trip of a lifetime? Contact us today and let’s start
            planning!
          </p>
          <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-colors duration-300 flex items-center gap-2 mx-auto">
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
