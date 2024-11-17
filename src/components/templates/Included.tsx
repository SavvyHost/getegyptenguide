import { Check, X } from "lucide-react";
import { FC } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

interface TourInclude {
  id: number;
  description: string;
  status: string;
}

interface OriginalExperienceProps {
  DetailTour: {
    tour_includes?: TourInclude[];
  };
}

const OriginalExperience: FC<OriginalExperienceProps> = ({ DetailTour }) => {
  if (!DetailTour || !DetailTour.tour_includes) {
    return null;
  }

  const includes = DetailTour.tour_includes.filter(
    (item) => item.status === "yes"
  );
  const excludes = DetailTour.tour_includes.filter(
    (item) => item.status === "no"
  );

  return (
    <div className="w-full flex flex-col lg:flex-row gap-6 mb-3 mt-2">
      {/* Includes Section */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-2xl font-semibold mb-4 text-black underline">
          Includes
        </h2>
        <section className="mb-6">
          {includes.length > 0 ? (
            <ul className="flex flex-col gap-2">
              {includes.map((item) => (
                <li key={item.id} className="flex items-center text-gray-600">
                  <div>
                    <Check className="text-green-600 mr-2" />
                  </div>
                  <span>{item.description}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No items included.</p>
          )}
        </section>
      </div>

      {/* Excludes Section */}
      <div className="w-full lg:w-1/2 ">
        <h2 className="text-2xl font-semibold mb-4 text-black underline">
          Excludes
        </h2>
        <section>
          {excludes.length > 0 ? (
            <ul className="flex flex-col gap-2">
              {excludes.map((item) => (
                <li key={item.id} className="flex items-center text-gray-600">
                  <X className="text-red-600 mr-2" />
                  <span>{item.description}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No items excluded.</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default OriginalExperience;
