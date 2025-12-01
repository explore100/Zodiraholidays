import { Star, MapPin } from "lucide-react";
import { ImageWithFallback } from "../Context/EuropeDestinty/ImageWithFallback";

const destinations = [
  {
    id: 1,
    name: "Swiss Alps",
    country: "Switzerland",
    image: "https://images.unsplash.com/photo-1604223190546-a43e4c7f29d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NjQ0ODM2MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.9,
    tours: 28
  },
  {
    id: 2,
    name: "Historic Prague",
    country: "Czech Republic",
    image: "https://images.unsplash.com/photo-1725806760874-96040618865c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldXJvcGVhbiUyMGNpdHklMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzY0NDc3MDgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.8,
    tours: 42
  },
  {
    id: 3,
    name: "Ancient Temples",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1585797972613-45e1ece55d98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHRlbXBsZSUyMGN1bHR1cmV8ZW58MXx8fHwxNzY0NDk3NzE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5.0,
    tours: 35
  },
  {
    id: 4,
    name: "Sahara Desert",
    country: "Morocco",
    image: "https://images.unsplash.com/photo-1598696737715-1e7741c387ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjBhZHZlbnR1cmV8ZW58MXx8fHwxNzY0NTY5MDExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.7,
    tours: 18
  },
  {
    id: 5,
    name: "Northern Lights",
    country: "Iceland",
    image: "https://images.unsplash.com/photo-1648607560570-4ee80c5914c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3J0aGVybiUyMGxpZ2h0cyUyMGF1cm9yYXxlbnwxfHx8fDE3NjQ1MTcwNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.9,
    tours: 22
  },
  {
    id: 6,
    name: "Maldives Beach",
    country: "Maldives",
    image: "https://images.unsplash.com/photo-1551727095-10465ee6b17f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcGFyYWRpc2V8ZW58MXx8fHwxNzY0NTE3NjA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5.0,
    tours: 31
  }
];

export function Destinations() {
  return (
    <section id="destinations" className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-amber-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-amber-500 mb-2">POPULAR DESTINATIONS</p>
          <h2 className="text-5xl md:text-6xl mb-4">
            Featured Locations
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Handpicked destinations that offer unique experiences and unforgettable adventures
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <ImageWithFallback
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>{destination.rating}</span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 text-white/80 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{destination.country}</span>
                  </div>
                  <h3 className="text-white text-2xl mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-white/70">{destination.tours} tours available</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
