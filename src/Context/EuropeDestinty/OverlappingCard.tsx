import { ImageWithFallback } from "./ImageWithFallback";
import { MapPin, Star } from "lucide-react";

export function OverlappingCards() {
  const destinations = [
    {
      id: 1,
      name: "Dubrovnik",
      country: "Croatia",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1414862625453-d87604a607e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJyb3ZuaWslMjBjcm9hdGlhfGVufDF8fHx8MTc2NDU2OTQ3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 2,
      name: "Tuscany",
      country: "Italy",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1694974249671-2a921a644a1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXNjYW55JTIwaXRhbHklMjBjb3VudHJ5c2lkZXxlbnwxfHx8fDE3NjQ1Njk0NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 3,
      name: "Algarve",
      country: "Portugal",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1605908082539-2fa8664357c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0dWdhbCUyMGFsZ2FydmV8ZW58MXx8fHwxNzY0NTY5NDczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-slate-900 mb-3">Top Rated Destinations</h2>
          <p className="text-slate-600">Highly recommended by travelers worldwide</p>
        </div>

        <div className="relative flex justify-center items-center h-[500px]">
          {destinations.map((destination, index) => (
            <div
              key={destination.id}
              className="absolute transition-all duration-500 hover:z-20 hover:scale-105 cursor-pointer group"
              style={{
                transform: `translateX(${(index - 1) * 200}px) rotate(${(index - 1) * 3}deg)`,
                zIndex: destinations.length - index
              }}
            >
              <div className="w-80 h-96 bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-white">
                <div className="relative h-full">
                  <ImageWithFallback
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-white/90">{destination.country}</span>
                    </div>
                    
                    <h3 className="text-white mb-3">{destination.name}</h3>
                    
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 bg-amber-500 rounded-full px-3 py-1">
                        <Star className="w-3.5 h-3.5 fill-white text-white" />
                        <span className="text-white">{destination.rating}</span>
                      </div>
                      <span className="text-white/80 text-sm">Excellent</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
