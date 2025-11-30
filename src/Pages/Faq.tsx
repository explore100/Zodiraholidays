import React, { useState } from "react";
import { faqData } from "../Types/travelPackage";
import type { FaqItem } from "../Types/types";

const categories = [
  { id: 1, label: "Tours Booking" },
  { id: 2, label: "Activities" },
  { id: 3, label: "Destinations" },
  { id: 4, label: "Hotels Booking" },
  { id: 5, label: "Rental Car" },
  { id: 6, label: "Property" },
  { id: 7, label: "Tickets Booking" },
];

const Faq: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(1); // default open first

  const toggleFaq = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="max-w-3xl mx-auto p-4 font-sans">
      {/* Header */}
      <h2 className="text-3xl font-bold text-center mb-1">Frequently Asked Questions</h2>
      <p className="text-center text-gray-600 mb-6">
        You need to come at least once in your life
      </p>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className="border border-gray-300 rounded-full px-4 py-1 text-sm hover:bg-gray-100 transition"
            type="button"
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* FAQ Items */}
      <div className="space-y-2">
        {faqData.map((item: FaqItem, idx) => {
          const isActive = activeId === item.id;
          return (
            <div key={item.id} className="border rounded-md overflow-hidden shadow-sm">
              <button
                onClick={() => toggleFaq(item.id)}
                className="w-full text-left flex items-center justify-between px-5 py-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <div className="flex items-center gap-5">
                  {/* Number */}
                  <span className="font-mono font-bold text-2xl text-gray-600 min-w-[35px]">
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </span>
                  {/* Question */}
                  <span className="font-bold text-gray-900">{item.question}</span>
                </div>

                {/* Icon */}
                <span className="text-2xl select-none">
                  {isActive ? (
                    <span aria-label="Close">&#x2715;</span> // ✕
                  ) : (
                    <span aria-label="Expand">&#43;</span> // +
                  )}
                </span>
              </button>

              {/* Answer */}
              {isActive && (
                <div
                  className="bg-gray-100 px-5 py-4 text-gray-700 text-lg leading-relaxed"
                  aria-live="polite"
                >
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
