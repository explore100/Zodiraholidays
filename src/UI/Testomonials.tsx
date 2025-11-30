import type { ClientData} from "../Types/types";

export const TestimonialCard: React.FC<ClientData> = ({ quote, client }) => (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-xl flex flex-col items-center text-center max-w-full mx-auto transform transition duration-300 hover:scale-[1.02] hover:shadow-2xl border border-gray-100">
        {/* Quote Icon */}
        <span className="text-5xl font-serif text-yellow-500 mb-6">
            &ldquo;
        </span>

        {/* Quote Text */}
        {/* Enforced height for visual consistency across cards */}
        <p className="text-gray-700 italic text-lg mb-8 min-h-[7rem] flex items-center justify-center leading-relaxed px-2">
            {quote}
        </p>

        {/* Separator */}
        <div className="w-16 h-[2px] bg-indigo-200 mb-6"></div>

        {/* Client Image */}
        <img
            src={client.image}
            alt={client.name}
            className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg -mt-10"
            // Fallback for image loading error
            onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = 'https://placehold.co/100x100/6B7280/ffffff?text=User';
            } } />

        {/* Client Name */}
        <p className="text-lg font-semibold text-gray-800 mt-2">
            {client.name}
        </p>
    </div>
);