import { ImageWithFallback } from "./ImageWithFallback";
import { Eye, Download, Share } from "lucide-react";

export function MasonryGallery() {
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1633942515749-f93dddbbcff9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2lzcyUyMGFscHMlMjBtb3VudGFpbnN8ZW58MXx8fHwxNzY0NTY5NDcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Swiss Alps",
      views: "2.4k",
      height: "tall"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1664825381616-5cb8397fd9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3J3ZWdpYW4lMjBmam9yZHN8ZW58MXx8fHwxNzY0NTY5NDcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Norwegian Fjords",
      views: "3.1k",
      height: "medium"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1610123598147-f632aa18b275?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2VsYW5kJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2NDU0MTcwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Iceland",
      views: "1.8k",
      height: "short"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1414862625453-d87604a607e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJyb3ZuaWslMjBjcm9hdGlhfGVufDF8fHx8MTc2NDU2OTQ3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Dubrovnik",
      views: "2.9k",
      height: "medium"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1694974249671-2a921a644a1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXNjYW55JTIwaXRhbHklMjBjb3VudHJ5c2lkZXxlbnwxfHx8fDE3NjQ1Njk0NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Tuscany",
      views: "4.2k",
      height: "tall"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1605908082539-2fa8664357c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0dWdhbCUyMGFsZ2FydmV8ZW58MXx8fHwxNzY0NTY5NDczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Algarve",
      views: "1.5k",
      height: "short"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1580339841933-f06ca55842d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9ja2hvbG0lMjBzd2VkZW58ZW58MXx8fHwxNzY0NTY5NDc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Stockholm",
      views: "3.7k",
      height: "medium"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1629203328770-42cdc08ca727?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5xdWUlMjB0ZXJyZSUyMGl0YWx5fGVufDF8fHx8MTc2NDU2OTQ3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Cinque Terre",
      views: "5.1k",
      height: "tall"
    }
  ];

  const getHeight = (height: string) => {
    switch (height) {
      case "short":
        return "h-64";
      case "medium":
        return "h-80";
      case "tall":
        return "h-96";
      default:
        return "h-80";
    }
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-slate-900 mb-3">Photo Gallery</h2>
          <p className="text-slate-600">Curated collection of breathtaking moments</p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {images.map((image) => (
            <div
              key={image.id}
              className={`group relative break-inside-avoid ${getHeight(image.height)} rounded-2xl overflow-hidden cursor-pointer`}
            >
              <ImageWithFallback
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="absolute inset-0 p-4 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex justify-end gap-2">
                  <button className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Share className="w-4 h-4 text-white" />
                  </button>
                  <button className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Download className="w-4 h-4 text-white" />
                  </button>
                </div>
                
                <div>
                  <h4 className="text-white mb-2">{image.title}</h4>
                  <div className="flex items-center gap-2 text-white/90">
                    <Eye className="w-4 h-4" />
                    <span className="text-sm">{image.views} views</span>
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
