// components/AccordionItem.tsx
"use client";

import React, { useState } from "react";
import { ArrowDownCircleIcon } from "lucide-react";

interface AccordionItemProps {
  question: string;
  answer: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b w-[75vw] flex flex-col justify-center items-center">
      <button
        className="flex justify-between w-full py-4 text-indigo-900 font-medium focus:outline-none items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ArrowDownCircleIcon />
        </span>
        
        <span className="ml-4 text-right flex-1">{question}</span>
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-100 text-right text-default font-[400] text-indigo-900 w-full">
          {answer}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
