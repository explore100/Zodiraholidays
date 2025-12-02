import { ImageWithFallback } from "./ImageWithFallback";
import { Heart, Bookmark } from "lucide-react";

export function BentoGrid() {
  const destinations = [
    {
      id: 1,
      title: "Norwegian Fjords",
      category: "Nature",
      image:
        "https://images.unsplash.com/photo-1664825381616-5cb8397fd9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3J3ZWdpYW4lMjBmam9yZHN8ZW58MXx8fHwxNzY0NTY5NDcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      span: "md:col-span-2 md:row-span-2"
    },
    {
      id: 2,
      title: "Iceland",
      category: "Adventure",
      image:
        "https://images.unsplash.com/photo-1610123598147-f632aa18b275?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2VsYW5kJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2NDU0MTcwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      id: 3,
      title: "Prague Castle",
      category: "Historic",
      image:
        "https://images.unsplash.com/photo-1654084747154-0b21cfd57aa0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmFndWUlMjBjYXN0bGV8ZW58MXx8fHwxNzY0NTY5NDcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      id: 4,
      title: "Vienna",
      category: "Cultural",
      image:
        "https://images.unsplash.com/photo-1516550893923-42d28e5677af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWVubmElMjBhdXN0cmlhfGVufDF8fHx8MTc2NDU2OTQ3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      id: 5,
      title: "Scottish Highlands",
      category: "Nature",
      image:
        "https://images.unsplash.com/photo-1589489873423-d1745278a8f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY290dGlzaCUyMGhpZ2hsYW5kc3xlbnwxfHx8fDE3NjQ1Njk0NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      span: "md:col-span-1 md:row-span-1"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-slate-900 mb-3">Trending Destinations</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Curated collection of Europe's most stunning locations
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-4 
          gap-4 
          auto-rows-[220px] 
          sm:auto-rows-[240px] 
          md:auto-rows-[280px]
        ">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${destination.span}`}
            >
              <ImageWithFallback
                src={destination.image}
                alt={destination.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

              {/* Content */}
              <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white text-xs sm:text-sm">
                    {destination.category}
                  </span>

                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white/30 transition-colors">
                      <Heart className="w-4 h-4 text-white" />
                    </button>
                    <button className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white/30 transition-colors">
                      <Bookmark className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-white text-base sm:text-lg mb-1">
                    {destination.title}
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore this destination
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
