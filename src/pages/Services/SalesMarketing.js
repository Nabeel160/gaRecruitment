import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const SalesMarketing = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 font-funnel">
      <div className="grid md:grid-cols-2 gap-12 items-center mt-28 mb-8">
        <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=1400&q=80"
            alt="Sales and marketing team working together"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold text-[#b57571] mb-6 font-playpen">
            Sales & Marketing
          </h1>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Our sales and marketing professionals help grow your brand, acquire
            customers and execute campaigns that deliver measurable results.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-playpen">
            What We Offer:
          </h2>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <CheckCircle className="text-[#b57571] w-6 h-6 mr-3 mt-1" />
              <span className="text-gray-700 text-lg">Sales executives & account managers.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-[#b57571] w-6 h-6 mr-3 mt-1" />
              <span className="text-gray-700 text-lg">Digital marketers & campaign specialists.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-[#b57571] w-6 h-6 mr-3 mt-1" />
              <span className="text-gray-700 text-lg">Content, SEO & social media experts.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-[#b57571] w-6 h-6 mr-3 mt-1" />
              <span className="text-gray-700 text-lg">Market research & growth strategists.</span>
            </li>
          </ul>

          <Link to="/contact" className="inline-block bg-[#b57571] text-white px-6 py-3 rounded-xl shadow hover:bg-[#9a5d5a] transition">
            Hire Sales & Marketing →
          </Link>
        </div>
      </div>
    </section>
  );
};
