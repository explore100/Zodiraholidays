import React from "react";
import { MdTravelExplore } from "react-icons/md";
import { GiAirplaneDeparture } from "react-icons/gi";
import { FaMapMarkedAlt, FaQuoteRight } from "react-icons/fa";

// ---- DATA (images + content saved in TS objects) ----
import photo from "../assets/beachhotel.png"; // replace with your image path

export const talentData = {
  heading: "We plan unforgettable tours and holiday experiences for you",
  subheading:
    "From luxury vacations to budget-friendly adventures — we organize perfect trips for families, couples, and groups.",
  cta: "Explore Packages",

  testimonial: {
    img: photo,
    message:
      "We booked a 7-day premium Nepal tour for our family. Everything was well managed — hotels, transportation, and experienced guides. Highly recommended!",
    name: "Aarav Sharma, Traveler",
  },

  cards: [
    {
      title: "Himalayan Adventure Trek",
      company: "Everest Region",
      exp: "7 Days • Guided Trek",
      icon: <MdTravelExplore className="text-blue-600 text-2xl" />, // change icon later if needed
    },
    {
      title: "Luxury Honeymoon Tour",
      company: "Maldives • Bali",
      exp: "5 Nights • 4-Star Resorts",
      icon: <GiAirplaneDeparture className="text-green-600 text-2xl" />,
    },
    {
      title: "City Sightseeing Holiday",
      company: "Pokhara • Kathmandu",
      exp: "3 Days • Family Friendly",
      icon: <FaMapMarkedAlt className="text-emerald-600 text-2xl" />,
    },
  ],
};


// ---- COMPONENT ----
const RecruitmentHero: React.FC = () => {
  return (
    <section className="w-full bg-[#eef5ff] py-20 px-6 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* LEFT SIDE */}
        <div className="flex-1">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#0d1a3b] leading-tight mb-6">
            {talentData.heading}
          </h1>
          <p className="text-gray-600 mb-8 text-lg max-w-lg">
            {talentData.subheading}
          </p>

          <button className="bg-[#3c5bff] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#2f47d8] transition flex items-center gap-2">
            {talentData.cta}
            <span className="text-xl">→</span>
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 relative">
          {/* TESTIMONIAL CARD */}
          <div className="bg-white shadow-lg rounded-xl p-6 flex gap-4 mb-10 w-[350px]">
            <img
              src={talentData.testimonial.img}
              alt="person"
              className="w-20 h-20 rounded-xl object-cover"
            />
            <div>
              <FaQuoteRight className="text-blue-600 text-xl mb-2" />
              <p className="text-gray-700 text-sm mb-2">{talentData.testimonial.message}</p>
              <p className="text-gray-500 text-xs">{talentData.testimonial.name}</p>
            </div>
          </div>

          {/* CIRCULAR FLOW */}
          <div className="flex justify-center relative">
            <div className="w-24 h-24 rounded-full border-4 border-blue-600 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-blue-600" />
            </div>
          </div>

          {/* 3 CARDS AROUND CIRCLE */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            {talentData.cards.map((card, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition"
              >
                <div className="flex justify-center mb-3">{card.icon}</div>
                <p className="font-semibold text-gray-800">{card.title}</p>
                <p className="text-gray-600 text-sm">{card.company}</p>
                <p className="text-gray-500 text-xs mt-1">{card.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruitmentHero;
