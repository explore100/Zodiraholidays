import React from "react";
import { serviceData } from "../Types/travelPackage";

const OurService: React.FC = () => {
  return (
    <section className="w-full py-16 bg-[#f9fafb]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Header */}
        <p className="text-sm text-orange-600 font-semibold tracking-wider uppercase mb-2">
          Category
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-black">
          We Offer Best Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {serviceData.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-20 h-20 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-black">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurService;
