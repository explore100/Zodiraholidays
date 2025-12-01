import React from "react";
import { HomePageTestimonials } from "../Types/travelPackage";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles (v10+ compatible)

// @ts-ignore: CSS module declarations for Swiper may be missing in this TS config
import "swiper/css/pagination";

const HomeTestimonials: React.FC = () => {
  return (
    <div className="w-full px-4 py-12">
      {/* Header */}
      <div className="text-center">
        <p className="text-gray-500 text-sm mb-1">Our Company Name</p>

        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Let’s See Our <span className="text-blue-600">Client’s Reviews</span>
        </h2>

        <p className="text-gray-500 max-w-lg mx-auto mb-10">
          Here you can add some brief text to explain the title.
          This is just a demo, so consider replacing it.
        </p>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },     
          640: { slidesPerView: 2 },   
          1024: { slidesPerView: 3 },  
        }}
        className="pb-10"
      >
        {HomePageTestimonials.map((t) => (
          <SwiperSlide key={t.id}>
            <div className="bg-white shadow-lg rounded-2xl p-6 text-left relative h-full">
              <p className="text-gray-600 mb-4">{t.message}</p>

              {/* Profile */}
              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt="profile"
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-semibold">{t.name}</h4>
                  <p className="text-blue-600 text-sm">{t.location}</p>
                </div>
              </div>

              <div className="absolute bottom-4 right-4 text-blue-600 text-3xl font-bold">
                ❝
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeTestimonials;
