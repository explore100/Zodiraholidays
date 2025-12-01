import { ImageWithFallback } from "./ImageWithFallback";
import { Compass, Camera, Map } from "lucide-react";

export function SplitImageSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-slate-900 mb-6">Stockholm Adventures</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Experience the Nordic charm of Stockholm, where historic architecture meets modern design. 
              Explore the archipelago, visit world-class museums, and enjoy the vibrant cultural scene.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Compass className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-slate-900 mb-1">Island Hopping</h4>
                  <p className="text-slate-600">Explore 30,000 islands in the archipelago</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Camera className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-slate-900 mb-1">Gamla Stan</h4>
                  <p className="text-slate-600">Photography in the medieval old town</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <Map className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-slate-900 mb-1">Cultural Tours</h4>
                  <p className="text-slate-600">Discover Viking history and royal palaces</p>
                </div>
              </div>
            </div>

            <button className="bg-slate-900 text-white px-8 py-4 rounded-xl hover:bg-slate-800 transition-colors shadow-lg">
              Plan Your Trip
            </button>
          </div>

          {/* Right Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-64 rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1580339841933-f06ca55842d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9ja2hvbG0lMjBzd2VkZW58ZW58MXx8fHwxNzY0NTY5NDc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Stockholm"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="h-48 rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1650523412149-0c8ee542b4f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWxnaWFuJTIwYnJ1Z2VzfGVufDF8fHx8MTc2NDU2OTQ3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Bruges"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="h-48 rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1629203328770-42cdc08ca727?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5xdWUlMjB0ZXJyZSUyMGl0YWx5fGVufDF8fHx8MTc2NDU2OTQ3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Cinque Terre"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="h-64 rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1610123598147-f632aa18b275?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2VsYW5kJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2NDU0MTcwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Iceland"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
