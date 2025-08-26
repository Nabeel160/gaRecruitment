import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const CleaningStaff = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 font-funnel">
      <div className="grid md:grid-cols-2 gap-12 items-center mt-28 mb-8">
        {/* Image */}
        <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
            alt="Cleaning Services"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h1 className="text-4xl font-bold text-[#b57571] mb-6 font-playpen">
            Professional Cleaning Services
          </h1>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Our expert cleaning staff ensures that your space remains spotless,
            hygienic, and welcoming. Whether it’s hotels, offices, or event
            venues, GA Recruitment provides reliable cleaning teams trained to
            maintain the highest standards.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-playpen">
            What We Offer:
          </h2>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <CheckCircle className="text-[#b57571] w-6 h-6 mr-3 mt-1" />
              <span className="text-gray-700 text-lg">
                Daily housekeeping for hotels, offices, and commercial spaces.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-[#b57571] w-6 h-6 mr-3 mt-1" />
              <span className="text-gray-700 text-lg">
                Deep cleaning services for carpets, kitchens, and restrooms.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-[#b57571] w-6 h-6 mr-3 mt-1" />
              <span className="text-gray-700 text-lg">
                Specialized cleaning teams for events and post-construction
                projects.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-[#b57571] w-6 h-6 mr-3 mt-1" />
              <span className="text-gray-700 text-lg">
                Flexible schedules and contracts to match your requirements.
              </span>
            </li>
          </ul>

          <Link
            to="/contact"
            className="inline-block bg-[#b57571] text-white px-6 py-3 rounded-xl shadow hover:bg-[#9a5d5a] transition"
          >
            Request Cleaning →
          </Link>
        </div>
      </div>
    </section>
  );
};
