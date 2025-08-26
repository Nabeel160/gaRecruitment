import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const FoodService = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 font-funnel">
      <div className="grid md:grid-cols-2 gap-12 items-center mt-28 mb-8">
        <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80"
            alt="Food service staff serving at an event"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold text-[#b57571] mb-6 font-playpen">
            Food Service
          </h1>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Our food service teams are experienced in front-of-house operations,
            banquet service, and efficient event catering. We help you deliver
            punctual, polished service that guests notice.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-playpen">
            What We Offer:
          </h2>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <CheckCircle className="text-[#b57571] w-6 h-6 mr-3 mt-1" />
              <span className="text-gray-700 text-lg">Professional waiters & servers.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-[#b57571] w-6 h-6 mr-3 mt-1" />
              <span className="text-gray-700 text-lg">Bartenders & beverage teams.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-[#b57571] w-6 h-6 mr-3 mt-1" />
              <span className="text-gray-700 text-lg">Banquet and buffet service crews.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-[#b57571] w-6 h-6 mr-3 mt-1" />
              <span className="text-gray-700 text-lg">Event food coordinators & floor managers.</span>
            </li>
          </ul>

          <Link to="/contact" className="inline-block bg-[#b57571] text-white px-6 py-3 rounded-xl shadow hover:bg-[#9a5d5a] transition">
            Hire Food Service →
          </Link>
        </div>
      </div>
    </section>
  );
};
