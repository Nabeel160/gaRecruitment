import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const ChefsKitchen = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 font-funnel">
      <div className="grid md:grid-cols-2 gap-12 items-center mt-28 mb-8">
        {/* Image */}
        <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1400&q=80"
            alt="Chef preparing food in a professional kitchen"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h1 className="text-4xl font-bold text-[#b57571] mb-6 font-playpen">
            Chefs & Kitchen Management
          </h1>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            We source experienced culinary professionals and kitchen managers who
            lead high-volume service while maintaining food quality and safety.
            From menu execution to kitchen operations, our teams keep your
            kitchen running like clockwork.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-playpen">
            What We Offer:
          </h2>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <CheckCircle className="text-[#b57571] w-6 h-6 mr-3 mt-1" />
              <span className="text-gray-700 text-lg">Executive & sous chefs for menu leadership.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-[#b57571] w-6 h-6 mr-3 mt-1" />
              <span className="text-gray-700 text-lg">Line cooks, commis and prep staff.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-[#b57571] w-6 h-6 mr-3 mt-1" />
              <span className="text-gray-700 text-lg">Kitchen supervisors and inventory control.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-[#b57571] w-6 h-6 mr-3 mt-1" />
              <span className="text-gray-700 text-lg">Food safety & HACCP trained personnel.</span>
            </li>
          </ul>

          <Link
            to="/contact"
            className="inline-block bg-[#b57571] text-white px-6 py-3 rounded-xl shadow hover:bg-[#9a5d5a] transition"
          >
            Hire Chefs →
          </Link>
        </div>
      </div>
    </section>
  );
};
