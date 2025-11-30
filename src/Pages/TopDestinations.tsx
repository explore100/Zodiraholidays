import { destinations } from "../Types/travelPackage";
import { IoIosAirplane } from "react-icons/io";
const TopDestinations = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#002147] mb-10 flex items-center justify-center gap-2">
          Top destinations with <span className="text-[#002147] italic">Activities </span><IoIosAirplane className="text-[#002147] animate-bounce" />
        </h2>

        {/* Destination Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
          {destinations.map((place) => (
            <div
              key={place.id}
              className="flex items-center gap-4 bg-white rounded-full shadow-md hover:shadow-xl px-4 py-3 w-full max-w-[320px] transition-all duration-300"
            >
              <img
                src={place.image}
                alt={place.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm"
              />
              <div className="text-left">
                <h3 className="text-gray-900 font-semibold text-lg">{place.name}</h3>
                <p className="text-gray-500 text-sm">{place.activities}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopDestinations;
