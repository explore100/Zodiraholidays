// src/components/TravelImageSlider.tsx
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";

import { travelPackages } from "../Types/travelPackage";

// Swiper v11+ CSS
import "swiper/swiper-bundle.css";

const TravelImageSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <section className="w-full py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h3 className="text-orange-600 font-semibold uppercase">Top Selling</h3>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Top Travel Packages
          </h2>
          <p className="text-gray-500 mt-2">
            Popular tours and trips packages. View them by style.
          </p>
        </div>

        {/* Main Slider */}
        <Swiper
          spaceBetween={10}
          navigation={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs, Autoplay]}
          className="mb-6 rounded-2xl overflow-hidden shadow-lg"
        >
          {travelPackages.map((pkg) => (
            <SwiperSlide key={pkg.id}>
              <div className="relative">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-[420px] md:h-[500px] object-cover"
                />
                <div className="absolute bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 w-full text-white">
                  <h3 className="text-xl md:text-2xl font-semibold">{pkg.title}</h3>
                  <p className="text-sm md:text-base">{pkg.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnail Slider */}
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="cursor-pointer"
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {travelPackages.map((pkg) => (
            <SwiperSlide key={pkg.id}>
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-28 md:h-32 object-cover rounded-lg border-2 border-transparent hover:border-orange-500 transition-all duration-300"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TravelImageSlider;
