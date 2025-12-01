import { ImageWithFallback } from "./ImageWithFallback";
import { MapPin, ArrowDown } from "lucide-react";

export function HeroImageSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1633942515749-f93dddbbcff9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2lzcyUyMGFscHMlMjBtb3VudGFpbnN8ZW58MXx8fHwxNzY0NTY5NDcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Swiss Alps"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </div>

      {/* Content Overlay */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 text-center text-white">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6">
          <MapPin className="w-4 h-4" />
          <span>Swiss Alps, Switzerland</span>
        </div>
        
        <h1 className="text-white mb-4 max-w-4xl">
          Explore Europe's Most Breathtaking Destinations
        </h1>
        
        <p className="text-white/90 max-w-2xl mb-8 text-lg">
          From majestic mountains to charming coastal towns, discover the beauty that awaits
        </p>

        <div className="flex gap-4">
          <button className="bg-white text-slate-900 px-8 py-4 rounded-xl hover:bg-slate-100 transition-all shadow-xl">
            Start Exploring
          </button>
          <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all">
            View Gallery
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white/70" />
        </div>
      </div>
    </section>
  );
}
