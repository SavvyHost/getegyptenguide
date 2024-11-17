import Image from "next/image";
import React from "react";
import ImageContact from "../../../public/assets/camels.jpeg";
import { Button } from "@mui/material";
type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="font-segoe mt-16 lg:mt-20">
      <div className="bg-gradient-to-r from-yellow-700 to-yellow-300 w-full h-60">
        <Image
          src={ImageContact}
          alt="Banner Image"
          className="w-full h-full object-cover"
          width={100}
          height={100}
        />
      </div>
      <div className="-mt-28 mb-6 px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center relative overflow-hidden p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl max-w-7xl mx-auto bg-white mt-4 font-[sans-serif] before:absolute before:right-0 before:w-[300px] before:bg-blue-400 before:h-full max-md:before:hidden">
          <div>
            <h2 className="text-gray-800 text-3xl font-extrabold">
              Get In Touch
            </h2>
            <p className="text-sm text-gray-500 mt-4 leading-relaxed">
              Have a specific inquiry or looking to explore new opportunities?
              Our experienced team is ready to engage with you.
            </p>
            <form>
              <div className="space-y-4 mt-8">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
                />
                <input
                  type="text"
                  placeholder="Street"
                  className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
                />
                <div className="grid grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="City"
                    className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Postcode"
                    className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
                  />
                </div>
                <input
                  type="number"
                  placeholder="Phone No."
                  className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
                />
                <textarea
                  placeholder="Write Message"
                  className="px-2 pt-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
                  defaultValue={""}
                />
              </div>
              <button
                type="button"
                className="mt-8 flex items-center justify-center text-sm w-full rounded-md px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  fill="#fff"
                  className="mr-2"
                  viewBox="0 0 548.244 548.244"
                >
                  <path
                    fillRule="evenodd"
                    d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                    clipRule="evenodd"
                    data-original="#000000"
                  />
                </svg>
                Send Message
              </button>
            </form>
          </div>
          <div className="z-10 relative h-full max-md:min-h-[350px]">
            <iframe
              src="https://maps.google.com/maps?q=cairo&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
              frameBorder={0}
              allowFullScreen=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
