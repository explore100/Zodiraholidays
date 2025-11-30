import React from "react";
import { adventureData } from "../Types/travelPackage";
import type { Adventure } from "../Types/types";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/swiper-bundle.css"; // ⬅ New required import

const TopAdventures: React.FC = () => {
  return (
    <div className="bg-blue-200 bg-opacity-20 py-16 px-6 text-center">
      <h1 className="text-4xl font-extrabold text-green-900 mb-12 font-serif">
        TOP ADVENTURES
      </h1>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={12}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto"
      >
        {adventureData.map(({ id, title, description, image }: Adventure) => (
          <SwiperSlide key={id}>
            <div className="bg-white rounded-xl shadow-md w-72 p-4 mx-auto flex flex-col items-start">
              <img
                src={image}
                alt={title}
                className="rounded-lg w-full h-44 object-cover mb-4"
                loading="lazy"
              />
              <h3 className="font-semibold text-lg text-green-900 mb-1 font-serif">
                {title}
              </h3>
              <p className="font-mono text-gray-600">{description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <a
  href={`https://wa.me/9779709155929?text=${encodeURIComponent(
    "Hi! I want to contact you."
  )}`}
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="mt-12 px-6 py-3 border-2 border-green-900 text-green-900 font-semibold text-sm rounded-lg hover:bg-green-900 hover:text-white transition-colors duration-300 text-center">
    CONTACT US FOR
    <br />
    ALL KIND OF ADVENTURES
  </button>
</a>

    </div>
  );
};

export default TopAdventures;
