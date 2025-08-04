"use client";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string | string[];
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 text-left font-semibold text-lg text-gray-800 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="mb-0">{question}</p>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-green-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-green-600" />
        )}
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="pb-4 text-gray-600">
          {Array.isArray(answer) ? (
            <ol className="list-decimal pl-5 space-y-1">
              {answer.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          ) : (
            <p>{answer}</p>
          )}
        </div>
      </div>
    </div>
  );
}
