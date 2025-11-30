import { testimonialsData } from "../Types/travelPackage";
import { TestimonialCard } from "../UI/Testomonials";

const Testi: React.FC = () => {
  return (
    // Outer Container: Dark Navy Background, Responsive Padding
    <div className="min-h-screen bg-[#1F2937] p-4 sm:p-8 flex items-center justify-center font-sans">
      {/* Inner Content Card: Large, rounded White Section, Fluid Max Width */}
      <div className="bg-white rounded-3xl shadow-2xl max-w-7xl w-full mx-auto p-8 md:p-16 lg:p-20 my-8">
        
        {/* Header Section */}
        <header className="text-center mb-12">
          <h3 className="text-sm tracking-widest uppercase text-indigo-600 font-medium mb-2">
            Testimonials
          </h3>
          <h2 className="text-3xl sm:text-4xl font-serif text-gray-800 font-extrabold">
            What our clients say about us.
          </h2>
        </header>

        {/* Testimonials Grid (Fully Responsive) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-12">
          {/* Note: testimonialsData is now defined directly above and accessible */}
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>

        {/* Call to Action Footer */}
        <footer className="text-center pt-8 border-t border-gray-100 mt-4">
          <h3 className="text-2xl font-serif text-gray-800 font-bold mb-4">
            No two homes are alike!
          </h3>
          <p className="text-gray-600 max-w-xl mx-auto mb-8 leading-relaxed text-base">
            Our Elite network, combined with your personal needs, allows us to create a home plan specifically tailored to you.
          </p>
          
          {/* Button */}
          <button
            className="bg-[#1F2937] text-white py-3 px-8 rounded-lg shadow-lg hover:bg-indigo-900 transition duration-300 text-sm uppercase tracking-wider font-bold transform hover:scale-[1.05]"
            onClick={() => console.log('Get a quote clicked')}
          >
            Get a Quote
          </button>
        </footer>

      </div>
    </div>
  );
};

export default Testi;