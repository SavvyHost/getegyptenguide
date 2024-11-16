import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  // State to track which accordion is open
  const [openIndex, setOpenIndex] = useState(null);

  // FAQ data
  const faqData = [
    {
      question: "Are there any special discounts available during the event.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas vestibulum a turpis in lacinia. Proin aliquam turpis at erat venenatis malesuada. Sed semper, justo vitae consequat fermentum, felis diam posuere ante, sed fermentum quam justo in dui. Nulla facilisi. Nulla aliquam auctor purus, vitae dictum dolor sollicitudin vitae. Sed bibendum purus in efficitur consequat. Fusce et tincidunt arcu. Curabitur ac lacus lectus. Morbi congue facilisis sapien, a semper orci facilisis in.",
    },
    {
      question:
        "What are the dates and locations for the product launch events?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas ongue facilisis sapien, a semper orci facilisis in.",
    },
    {
      question: "Can I bring a guest with me to the product launch event?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas ongue facilisis sapien, a semper orci facilisis in.",
    },
    {
      question: "Are there any special promotions available during the event.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas ongue facilisis sapien, a semper orci facilisis in.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const AccordionItem = ({ question, answer, index, isOpen }) => (
    <div className="accordion bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-lg">
      <button
        type="button"
        onClick={() => toggleAccordion(index)}
        className="toggle-button p-6 w-full text-base font-semibold text-left text-gray-800 flex items-center"
      >
        <span className="mr-4">{question}</span>
        <div className="ml-auto">
          {isOpen ? (
            <Minus className="w-5 h-5 transition-transform duration-500 ease-in-out" />
          ) : (
            <Plus className="w-5 h-5 transition-transform duration-500 ease-in-out" />
          )}
        </div>
      </button>
      <div
        className={`content overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen
            ? "max-h-[1000px] opacity-100 visible px-6 pb-6"
            : "max-h-0 opacity-0 invisible px-6"
        }`}
      >
        <div
          className={`transform transition-transform duration-500 ease-in-out ${
            isOpen ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          <p className="text-sm text-gray-500">{answer}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto sm:px-8 px-4 mt-24 font-sans">
      <div className="mb-12 max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-800">
          Frequently asked questions
        </h2>
        <p className="text-sm text-gray-500 mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
          auctor arcu, at fermentum dui. Maecenas. Sed bibendum purus in
          efficitur consequat. Fusce et tincidunt arcu. Curabitur ac lacus
          lectus. Morbi congue facilisis sapien, a semper orci facilisis in.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          {faqData.slice(0, 2).map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
              index={index}
              isOpen={openIndex === index}
            />
          ))}
        </div>
        <div className="space-y-6">
          {faqData.slice(2).map((item, index) => (
            <AccordionItem
              key={index + 2}
              question={item.question}
              answer={item.answer}
              index={index + 2}
              isOpen={openIndex === index + 2}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
