import { FC } from "react";
import {
  AiOutlineCalendar,
  AiOutlineUser,
  AiOutlineEnvironment,
  AiOutlineTags,
  AiOutlineInfoCircle,
  AiOutlineCloseCircle,
} from "react-icons/ai";

interface TourDetailsProps {
  DetailTour: {
    title: string;
    description: string;
    duration: string;
    freeCancellation: boolean;
    payLater: boolean;
    liveGuideLanguage: string;
    age_range: string;
    run: string;
    category: { name: string };
  };
}

const TourDetails: FC<TourDetailsProps> = ({ DetailTour }) => {
  return (
    <div className=" mx-auto  mt-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-3 underline">Title</h1>
      <p className="text-gray-700 mb-3">{DetailTour.title}</p>
      <h1 className="text-2xl font-bold text-gray-800 mb-3 underline">
        Details
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-3">
        <div className="flex items-center ">
          <AiOutlineCalendar className="text-green-500 text-2xl mr-3" />
          <span className="text-gray-700">
            Duration: {DetailTour.duration} Days
          </span>
        </div>

        <div className="flex items-center ">
          <AiOutlineUser className="text-blue-500 text-2xl mr-3" />
          <span className="text-gray-700">
            Age Range: {DetailTour.age_range}
          </span>
        </div>

        <div className="flex items-center ">
          <AiOutlineEnvironment className="text-yellow-500 text-2xl mr-3" />
          <span className="text-gray-700">Run: {DetailTour.run}</span>
        </div>

        <div className="flex items-center ">
          <AiOutlineTags className="text-purple-500 text-2xl mr-3" />
          <span className="text-gray-700">
            Category: {DetailTour.category.name}
          </span>
        </div>

        <div className="flex items-center ">
          <AiOutlineInfoCircle className="text-green-500 text-2xl mr-3" />
          <span className="text-gray-700">
            Guide Language: {DetailTour.liveGuideLanguage}
          </span>
        </div>

        <div className="flex items-center">
          <AiOutlineCloseCircle className="text-pink-500 text-2xl mr-3" />
          <span className="text-gray-700">
            Free Cancellation: {DetailTour.freeCancellation ? "Yes" : "No"}
          </span>
        </div>
      </div>
      <h1 className="text-2xl font-bold text-gray-800 mb-3 underline">
        Description
      </h1>

      <div
        className="text-gray-600 leading-relaxed mb-2"
        dangerouslySetInnerHTML={{ __html: DetailTour.description }}
      />
    </div>
  );
};

export default TourDetails;
