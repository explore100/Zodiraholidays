import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// @ts-ignore: CSS module declarations for Swiper may be missing in this TS config
import "swiper/css";
// @ts-ignore: CSS module declarations for Swiper may be missing in this TS config
import "swiper/css/pagination";

import { activitydestination } from "../Types/travelPackage";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const PopularDestination: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <h2 className="text-3xl font-bold text-olive-800 mb-10 text-center">
        POPULAR DESTINATION
      </h2>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="max-w-7xl mx-auto"
      >
        {activitydestination.map((dest) => (
          <SwiperSlide key={dest.id}>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={dest.image}
                alt={dest.title}
                className="object-cover h-48 w-full rounded-t-xl"
              />
              <div className="p-5 text-left">
                <h3 className="font-semibold text-lg mb-2">{dest.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{dest.description}</p>

                <div className="flex items-center text-sm text-gray-600 mb-3 space-x-4">
                  <span className="flex items-center">
                    <FaMapMarkerAlt className="mr-1" /> {dest.location}
                  </span>
                  <span className="flex items-center">
                    <FaCalendarAlt className="mr-1" /> {dest.tripDuration}
                  </span>
                </div>
                <a
                  href="https://wa.me/9779709155929" // Replace with your number (country code + number, no + or spaces)
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-[#415725] hover:bg-[#344418] text-white py-2 px-4 rounded text-sm">
                    EXPLORE NOW
                  </button>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PopularDestination;
