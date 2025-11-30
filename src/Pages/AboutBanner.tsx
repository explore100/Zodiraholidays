import React from "react";
import { heroImages } from "../Types/travelPackage";

const Hero: React.FC = () => {
  return (
    <section className="w-full bg-[#f4f8ff] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT TEXT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Visit The Most{" "}
            <span className="text-blue-600">Beautiful Places</span>{" "}
            In The World
          </h1>

          <p className="text-gray-600 mt-4 max-w-md">
            Plan and book your perfect trip with expert advice, travel tips,
            destination information, and inspiration from us.
          </p>

         
        </div>

        {/* RIGHT IMAGE COLLAGE */}
        <div className="grid grid-cols-5 gap-4">

          {/* BIG LEFT IMAGE (WIDER) */}
          <div className="col-span-2 row-span-3 rounded-[32px] overflow-hidden h-[420px] md:h-[500px]">
            <img
              src={heroImages[0].imageUrl}
              className="w-full h-full object-cover"
            />
          </div>

          {/* TOP SMALL IMAGE */}
          <div className="col-span-1 rounded-[24px] h-32 md:h-40 overflow-hidden">
            <img
              src={heroImages[1].imageUrl}
              className="w-full h-full object-cover"
            />
          </div>

          {/* BIG RIGHT IMAGE (WIDER) */}
          <div className="col-span-2 row-span-3 rounded-[40px] overflow-hidden h-[420px] md:h-[500px]">
            <img
              src={heroImages[2].imageUrl}
              className="w-full h-full object-cover"
            />
          </div>

          {/* BOTTOM TWO SMALL IMAGES */}
          <div className="col-span-1 rounded-[24px] h-32 md:h-40 overflow-hidden">
            <img
              src={heroImages[3].imageUrl}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="col-span-1 rounded-[24px] h-32 md:h-40 overflow-hidden">
            <img
              src={heroImages[4].imageUrl}
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
