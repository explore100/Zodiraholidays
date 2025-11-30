import React from "react";
import {
  Plane,
  Globe2,
  BookMarked,
  Hotel,
  Mountain,
  CalendarCheck,
} from "lucide-react";

const services = [
  {
    icon: <Plane size={42} />,
    title: "Airline Ticketing",
    desc: "International & domestic flight booking with the best available fares.",
  },
  {
    icon: <Globe2 size={42} />,
    title: "International Holiday Packages",
    desc: "Customized global tour packages with premium travel planning.",
  },
  {
    icon: <BookMarked size={42} />,
    title: "Visa Services",
    desc: "Fast and reliable visa processing services with full support.",
  },
  {
    icon: <CalendarCheck size={42} />,
    title: "Domestic Holiday Packages",
    desc: "Explore Nepal with curated domestic tour packages.",
  },
  {
    icon: <Hotel size={42} />,
    title: "Hotel Reservation",
    desc: "Book verified and comfortable hotels around the world.",
  },
  {
    icon: <Mountain size={42} />,
    title: "Adventure Activities",
    desc: "Thrilling activities like trekking, rafting, paragliding & more.",
  },
];

const ServicesModern: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 uppercase">
            Our Services
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Your trusted partner for complete travel & tourism solutions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="text-indigo-600 mb-5">{item.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              {/* Book Now Button */}
              <a
                href="https://wa.me/9779709155929" // Replace with your number (country code + number, no + or spaces)
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="mt-auto bg-indigo-500 text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-indigo-700 transition-colors duration-300">
                  Book Now
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesModern;
