import { useEffect, useState } from "react";
import { ImageWithFallback } from "./ImageWithFallback";
import { TrendingUp } from "lucide-react";

export function ParallaxCards() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const destinations = [
    {
      id: 1,
      name: "Prague",
      trend: "+24%",
      image: "https://images.unsplash.com/photo-1654084747154-0b21cfd57aa0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmFndWUlMjBjYXN0bGV8ZW58MXx8fHwxNzY0NTY5NDcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 2,
      name: "Vienna",
      trend: "+18%",
      image: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWVubmElMjBhdXN0cmlhfGVufDF8fHx8MTc2NDU2OTQ3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 3,
      name: "Scotland",
      trend: "+32%",
      image: "https://images.unsplash.com/photo-1589489873423-d1745278a8f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY290dGlzaCUyMGhpZ2hsYW5kc3xlbnwxfHx8fDE3NjQ1Njk0NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-slate-900 mb-3">Trending Now</h2>
          <p className="text-slate-600">Most visited destinations this month</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((destination, index) => {
            const parallaxOffset = (scrollY * (index + 1) * 0.05) % 50;
            
            return (
              <div
                key={destination.id}
                className="group cursor-pointer"
                style={{
                  transform: `translateY(${parallaxOffset}px)`
                }}
              >
                <div className="relative h-[500px] rounded-3xl overflow-hidden bg-slate-900">
                  <ImageWithFallback
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  
                  <div className="absolute top-6 right-6">
                    <div className="flex items-center gap-2 bg-emerald-500 rounded-full px-4 py-2 shadow-lg">
                      <TrendingUp className="w-4 h-4 text-white" />
                      <span className="text-white">{destination.trend}</span>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-white mb-2">{destination.name}</h3>
                    <p className="text-white/80 mb-4">
                      Experience the magic of this trending destination
                    </p>
                    <button className="bg-white text-slate-900 px-6 py-3 rounded-xl hover:bg-slate-100 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}