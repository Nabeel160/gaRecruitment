import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const EventStaff = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 font-funnel">
      <div className="grid md:grid-cols-2 gap-12 items-center mt-28 mb-8">
        {/* Image */}
        <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Event Management"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h1 className="text-4xl font-bold text-[#b57571] mb-6 font-playpen">
            Event Management & Staffing
          </h1>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            From intimate gatherings to large-scale corporate events, GA
            Recruitment provides professional staff to ensure everything runs
            smoothly. Our trained event managers and support teams guarantee
            flawless execution and unforgettable experiences.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-playpen">
            Our Event Services:
          </h2>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <CheckCircle className="text-[#b57571] w-6 h-6 mr-3 mt-1" />
              <span className="text-gray-700 text-lg">
                Event planners to coordinate logistics and schedules.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-[#b57571] w-6 h-6 mr-3 mt-1" />
              <span className="text-gray-700 text-lg">
                Hospitality staff for guest welcoming and assistance.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-[#b57571] w-6 h-6 mr-3 mt-1" />
              <span className="text-gray-700 text-lg">
                Waitstaff, bartenders, and catering support for all event sizes.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-[#b57571] w-6 h-6 mr-3 mt-1" />
              <span className="text-gray-700 text-lg">
                On-site supervisors to handle last-minute changes efficiently.
              </span>
            </li>
          </ul>

          <Link
            to="/contact"
            className="inline-block bg-[#b57571] text-white px-6 py-3 rounded-xl shadow hover:bg-[#9a5d5a] transition"
          >
            Plan Your Event →
          </Link>
        </div>
      </div>
    </section>
  );
};
