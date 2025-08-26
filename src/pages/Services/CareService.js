import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const CareService = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 font-funnel">
      <div className="grid md:grid-cols-2 gap-12 items-center mt-28 mb-8">
        <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1400&q=80"
            alt="Caregivers assisting a client"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold text-[#b57571] mb-6 font-playpen">
            Care Services
          </h1>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Our compassionate care teams support healthcare settings, residential
            care and specialised assistance. We match experienced carers to the
            needs of individuals and organisations.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-playpen">
            What We Offer:
          </h2>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <CheckCircle className="text-[#b57571] w-6 h-6 mr-3 mt-1" />
              <span className="text-gray-700 text-lg">Caregivers & support workers.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-[#b57571] w-6 h-6 mr-3 mt-1" />
              <span className="text-gray-700 text-lg">Healthcare assistants and support staff.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-[#b57571] w-6 h-6 mr-3 mt-1" />
              <span className="text-gray-700 text-lg">Personal care & live-in support.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-[#b57571] w-6 h-6 mr-3 mt-1" />
              <span className="text-gray-700 text-lg">Special needs and respite care staff.</span>
            </li>
          </ul>

          <Link to="/contact" className="inline-block bg-[#b57571] text-white px-6 py-3 rounded-xl shadow hover:bg-[#9a5d5a] transition">
            Hire Care Staff →
          </Link>
        </div>
      </div>
    </section>
  );
};
