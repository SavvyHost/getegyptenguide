import React from "react";
import { Tag, DollarSign, Clock, DoorOpen, User } from "lucide-react";

type Props = {};

const DefaultDetails = (props: Props) => {
  return (
    <div className="w-full mx-auto my-3">
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg cursor-pointer">
        <li className="flex items-start border rounded-sm p-4 shadow hover:shadow-lg transition-shadow duration-30">
          <div>
            <Tag className="w-6 h-6 mr-3 text-green-600" />
          </div>
          <div>
            <p className="font-semibold">Free cancellation</p>
            <p className="text-gray-600">
              Cancel up to 24 hours in advance for a full refund
            </p>
          </div>
        </li>
        <li className="flex items-start border rounded-sm p-4 shadow hover:shadow-lg transition-shadow duration-30">
          <div>
            {" "}
            <DollarSign className="w-6 h-6 mr-3 text-green-600" />
          </div>
          <div>
            <p className="font-semibold">Reserve now & pay later</p>
            <p className="text-gray-600">
              Keep your travel plans flexible — book your spot and pay nothing
              today.
            </p>
          </div>
        </li>
        <li className="flex items-start border rounded-sm p-4 shadow hover:shadow-lg transition-shadow duration-30">
          <div>
            <Clock className="w-6 h-6 mr-3 text-blue-600" />
          </div>
          <div>
            <p className="font-semibold">
              Check availability to see starting times.
            </p>
          </div>
        </li>
        <li className="flex items-start border rounded-sm p-4 shadow hover:shadow-lg transition-shadow duration-30">
          <div>
            <DoorOpen className="w-6 h-6 mr-3 text-purple-600" />
          </div>
          <div>
            <p className="font-semibold">
              Skip the line through a separate entrance
            </p>
          </div>
        </li>
        <li className="flex items-start border rounded-sm p-4 shadow hover:shadow-lg transition-shadow duration-300 ">
          <div>
            <User className="w-6 h-6 mr-3 text-orange-600" />
          </div>
          <div>
            <p className="font-semibold">Live tour guide</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default DefaultDetails;
