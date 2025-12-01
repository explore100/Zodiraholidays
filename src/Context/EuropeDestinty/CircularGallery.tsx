import { useState } from "react";
import { ImageWithFallback } from "./ImageWithFallback";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function CircularGallery() {
  const destinations = [
    { id: 1, name: "Swiss Alps", image: "https://images.unsplash.com/photo-1633942515749-f93dddbbcff9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2lzcyUyMGFscHMlMjBtb3VudGFpbnN8ZW58MXx8fHwxNzY0NTY5NDcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 2, name: "Norwegian Fjords", image: "https://images.unsplash.com/photo-1664825381616-5cb8397fd9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3J3ZWdpYW4lMjBmam9yZHN8ZW58MXx8fHwxNzY0NTY5NDcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 3, name: "Dubrovnik", image: "https://images.unsplash.com/photo-1414862625453-d87604a607e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJyb3ZuaWslMjBjcm9hdGlhfGVufDF8fHx8MTc2NDU2OTQ3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 4, name: "Tuscany", image: "https://images.unsplash.com/photo-1694974249671-2a921a644a1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXNjYW55JTIwaXRhbHklMjBjb3VudHJ5c2lkZXxlbnwxfHx8fDE3NjQ1Njk0NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { id: 5, name: "Cinque Terre", image: "https://images.unsplash.com/photo-1629203328770-42cdc08ca727?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5xdWUlMjB0ZXJyZSUyMGl0YWx5fGVufDF8fHx8MTc2NDU2OTQ3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => setActiveIndex(prev => (prev === 0 ? destinations.length - 1 : prev - 1));
  const handleNext = () => setActiveIndex(prev => (prev === destinations.length - 1 ? 0 : prev + 1));

  return (
    <section className="py-16 md:py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">Gallery Showcase</h2>
          <p className="text-slate-400 text-sm md:text-base">Navigate through stunning destinations</p>
        </div>

        <div className="relative flex items-center justify-center">
          {/* Previous Button */}
          <button onClick={handlePrev} className="absolute left-0 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors">
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Circular Gallery */}
          <div className="relative w-full max-w-lg md:max-w-2xl h-64 sm:h-80 md:h-96 flex items-center justify-center overflow-hidden">
            {destinations.map((destination, index) => {
              const offset = index - activeIndex;
              let position = offset * 35; // % of container width
              let scale = 0.7;
              let zIndex = 0;
              let opacity = 0.4;

              if (offset === 0) {
                scale = 1;
                zIndex = 10;
                opacity = 1;
                position = 0;
              } else if (Math.abs(offset) === 1) {
                scale = 0.85;
                zIndex = 5;
                opacity = 0.6;
                position = offset * 60; // closer neighbors
              } else if (Math.abs(offset) === 2) {
                scale = 0.7;
                zIndex = 2;
                opacity = 0.3;
                position = offset * 90;
              } else {
                scale = 0.6;
                zIndex = 1;
                opacity = 0;
                position = offset * 120;
              }

              return (
                <div key={destination.id} className="absolute transition-all duration-500 cursor-pointer" style={{
                  transform: `translateX(${position}%) scale(${scale})`,
                  zIndex,
                  opacity
                }} onClick={() => setActiveIndex(index)}>
                  <div className="w-44 sm:w-56 md:w-72 h-44 sm:h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
                    <ImageWithFallback src={destination.image} alt={destination.name} className="w-full h-full object-cover" />
                    {offset === 0 && (
                      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/80 to-transparent">
                        <h3 className="text-sm md:text-lg">{destination.name}</h3>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Next Button */}
          <button onClick={handleNext} className="absolute right-0 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors">
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6 md:mt-8">
          {destinations.map((_, index) => (
            <button key={index} onClick={() => setActiveIndex(index)} className={`w-2 h-2 md:w-2 md:h-2 rounded-full transition-all ${index === activeIndex ? "bg-white w-6 md:w-8" : "bg-white/40"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
