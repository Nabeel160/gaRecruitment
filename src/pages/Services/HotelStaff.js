import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const HotelStaff = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 font-funnel">
      <div className="grid md:grid-cols-2 gap-12 items-center mt-28 mb-8">
        {/* Image */}
        <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/images/hotelStaff.jpg"
            alt="Hotel staffing service"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h1 className="text-4xl font-bold text-[#b57571] mb-6 font-playpen">
            Hotel Staffing Solutions
          </h1>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            At GA Recruitment, we specialize in providing <strong>skilled and
            reliable hotel staff</strong> to ensure smooth daily operations and
            exceptional guest experiences. Whether you need front desk
            receptionists, kitchen staff, or housekeeping teams, we deliver
            professionals who understand the importance of <strong>hospitality
            excellence</strong>.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-playpen">
            Why Choose Our Hotel Staffing?
          </h2>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <CheckCircle className="text-[#b57571] w-6 h-6 mr-3 mt-1" />
              <span className="text-gray-700 text-lg">
                Experienced receptionists trained in guest management.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-[#b57571] w-6 h-6 mr-3 mt-1" />
              <span className="text-gray-700 text-lg">
                Housekeeping staff ensuring cleanliness and comfort.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-[#b57571] w-6 h-6 mr-3 mt-1" />
              <span className="text-gray-700 text-lg">
                Professional chefs and kitchen assistants for all cuisines.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-[#b57571] w-6 h-6 mr-3 mt-1" />
              <span className="text-gray-700 text-lg">
                24/7 support and flexible contracts tailored to your needs.
              </span>
            </li>
          </ul>

          <Link
            to="/contact"
            className="inline-block bg-[#b57571] text-white px-6 py-3 rounded-xl shadow hover:bg-[#9a5d5a] transition"
          >
            Get in Touch →
          </Link>
        </div>
      </div>
    </section>
  );
};
