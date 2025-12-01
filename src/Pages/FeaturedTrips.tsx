import { Calendar, Users, DollarSign, Compass } from "lucide-react";

const trips = [
  {
    id: 1,
    title: "Alpine Adventure",
    description: "Experience the majestic Swiss Alps with guided hiking tours, cable car rides, and authentic mountain cuisine.",
    duration: "7 days",
    groupSize: "8-12 people",
    price: "$2,499",
    features: ["Mountain Hiking", "Scenic Railways", "Local Cuisine", "Expert Guides"]
  },
  {
    id: 2,
    title: "Cultural Japan",
    description: "Immerse yourself in Japanese traditions with temple visits, tea ceremonies, and authentic cultural experiences.",
    duration: "10 days",
    groupSize: "6-10 people",
    price: "$3,299",
    features: ["Temple Tours", "Tea Ceremony", "Traditional Stay", "Cherry Blossoms"]
  },
  {
    id: 3,
    title: "Desert Expedition",
    description: "Venture into the Sahara Desert with camel treks, starlit camping, and exploration of ancient Berber villages.",
    duration: "5 days",
    groupSize: "4-8 people",
    price: "$1,899",
    features: ["Camel Trekking", "Desert Camping", "Star Gazing", "Berber Culture"]
  }
];

export function FeaturedTrips() {
  return (
    <section id="trips" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-amber-500 mb-2">CURATED EXPERIENCES</p>
          <h2 className="text-5xl md:text-6xl mb-4">
            Featured Trips
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join our expertly crafted tours designed for unforgettable adventures
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {trips.map((trip) => (
            <div
              key={trip.id}
              className="border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300 hover:border-amber-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-amber-100 p-3 rounded-xl">
                  <Compass className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-2xl">
                  {trip.title}
                </h3>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {trip.description}
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-700">
                  <Calendar className="w-5 h-5 text-amber-500" />
                  <span>{trip.duration}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Users className="w-5 h-5 text-amber-500" />
                  <span>{trip.groupSize}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <DollarSign className="w-5 h-5 text-amber-500" />
                  <span>{trip.price} per person</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 mb-6">
                <div className="grid grid-cols-2 gap-2">
                  {trip.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-xl transition-colors">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
