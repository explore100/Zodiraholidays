import React from 'react';
import { travelSteps } from '../Types/travelPackage';
import poland  from "../assets/poland.png"
const TravelTips: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row md:items-center md:gap-16">
      {/* Left Side Text */}
      <div className="md:w-1/2">
        <p className="text-orange-600 font-semibold uppercase text-sm mb-3 tracking-wide">
          TRAVEL TIPS
        </p>
        <h2 className="text-3xl font-bold mb-10 max-w-md">
          Book Your Next Trip <br /> In 3 Easy Steps
        </h2>

        <div className="space-y-10">
          {travelSteps.map(({ id, color, title, description }) => (
            <div key={id} className="flex items-start gap-4 max-w-md">
              <div className={`w-6 h-6 rounded-sm mt-1 flex-shrink-0 ${color}`}></div>
              <div>
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side Image */}
      <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
        <img
          src={poland}
          alt="Traveler on mountain cliff"
          className="rounded-lg max-w-full shadow-lg object-cover"
        />
      </div>
    </section>
  );
};

export default TravelTips;
