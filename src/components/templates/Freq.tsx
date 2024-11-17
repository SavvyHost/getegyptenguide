import React, { FC, useState } from "react";
import { Plus, Minus } from "lucide-react"; // Import icons from Lucide

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <div
        className="flex items-center cursor-pointer "
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="mr-2 text-lg text-gray-600 border border-gray-300 my-2 rounded-none py-2 px-4">
          {isOpen ? (
            <Minus className="text-green-500" />
          ) : (
            <Plus className="text-green-500" />
          )}
        </div>
        <h4 className="text-lg font-semibold">{question}</h4>
      </div>
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <p className="mt-2 p-4 text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

interface FAQProps {
  DetailTour: {
    tour_frequently_questions: {
      question: string;
      answer: string;
    }[];
  };
}

const FAQ: FC<FAQProps> = ({ DetailTour }) => {
  const { tour_frequently_questions } = DetailTour;

  return (
    <div className="w-full">
      <h3 className="lg:text-2xl text-xl font-semibold my-4 underline">
        Frequently Asked Questions
      </h3>
      {tour_frequently_questions.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default FAQ;
