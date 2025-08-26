import { Link } from "react-router-dom";

export const Services = () => {
  return (
    <div className="bg-gray-50 font-funnel">
      <section className="text-center pt-16 pb-8 mt-10">
        <h1 className="text-4xl font-extrabold font-playpen">Our Services</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg">
          Explore the staffing solutions GA Recruitment offers across multiple
          industries. Click below to learn more about each service.
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 pb-12">
        {/* Event */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
          <div className="w-full h-72 overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Event staff"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold mt-4 mb-2">Event Staffing</h2>
          <p className="text-gray-700 mb-4">
            Reliable coordinators, ushers, and staff for your events.
          </p>
          <Link
            to="/services/event"
            className="mt-auto text-[#b57571] font-semibold hover:underline"
          >
            Find out more →
          </Link>
        </div>

        {/* Hotel */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
          <div className="w-full h-72 overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf"
              alt="Hotel staff"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold mt-4 mb-2">Hotel Staffing</h2>
          <p className="text-gray-700 mb-4">
            Chefs, receptionists, and support staff for smooth operations.
          </p>
          <Link
            to="/services/hotel"
            className="mt-auto text-[#b57571] font-semibold hover:underline"
          >
            Find out more →
          </Link>
        </div>

        {/* Cleaning */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
          <div className="w-full h-72 overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
              alt="Cleaning staff"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold mt-4 mb-2">Cleaning Services</h2>
          <p className="text-gray-700 mb-4">
            Professional cleaning staff for offices, hotels, and homes.
          </p>
          <Link
            to="/services/cleaning"
            className="mt-auto text-[#b57571] font-semibold hover:underline"
          >
            Find out more →
          </Link>
        </div>

        {/* Chefs */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
          <div className="w-full h-72 overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
              alt="Chefs and kitchen management"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold mt-4 mb-2">Chefs & Kitchen Management</h2>
          <p className="text-gray-700 mb-4">
            Talented chefs and kitchen managers to keep dining services seamless.
          </p>
          <Link
            to="/services/chefs"
            className="mt-auto text-[#b57571] font-semibold hover:underline"
          >
            Find out more →
          </Link>
        </div>

        {/* Food Service */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
          <div className="w-full h-72 overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
              alt="Food service staff"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold mt-4 mb-2">Food Service</h2>
          <p className="text-gray-700 mb-4">
            Waitstaff, baristas, and service teams for hospitality and events.
          </p>
          <Link
            to="/services/food-service"
            className="mt-auto text-[#b57571] font-semibold hover:underline"
          >
            Find out more →
          </Link>
        </div>

        {/* IT & Tech */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
          <div className="w-full h-72 overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
              alt="IT and software staff"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold mt-4 mb-2">IT, Technology & Software</h2>
          <p className="text-gray-700 mb-4">
            Skilled developers, IT support, and digital specialists.
          </p>
          <Link
            to="/services/it"
            className="mt-auto text-[#b57571] font-semibold hover:underline"
          >
            Find out more →
          </Link>
        </div>

        {/* Sales & Marketing */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
          <div className="w-full h-72 overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
              alt="Sales and marketing team"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold mt-4 mb-2">Sales & Marketing</h2>
          <p className="text-gray-700 mb-4">
            Experts to drive growth, brand awareness, and customer engagement.
          </p>
          <Link
            to="/services/sales"
            className="mt-auto text-[#b57571] font-semibold hover:underline"
          >
            Find out more →
          </Link>
        </div>

        {/* Finance */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
          <div className="w-full h-72 overflow-hidden rounded-lg">
            <img
              src="https://plus.unsplash.com/premium_photo-1661443781814-333019eaad2d?q=80&w=1551&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Finance professionals"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold mt-4 mb-2">Finance</h2>
          <p className="text-gray-700 mb-4">
            Accountants, auditors, and financial managers you can trust.
          </p>
          <Link
            to="/services/finance"
            className="mt-auto text-[#b57571] font-semibold hover:underline"
          >
            Find out more →
          </Link>
        </div>

        {/* HR */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
          <div className="w-full h-72 overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
              alt="HR and recruitment"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold mt-4 mb-2">HR, L&D & Recruitment</h2>
          <p className="text-gray-700 mb-4">
            Professionals for hiring, training, and employee development.
          </p>
          <Link
            to="/services/hr"
            className="mt-auto text-[#b57571] font-semibold hover:underline"
          >
            Find out more →
          </Link>
        </div>

        {/* Care Service */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
          <div className="w-full h-72 overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1584515933487-779824d29309"
              alt="Care service staff"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold mt-4 mb-2">Care Service</h2>
          <p className="text-gray-700 mb-4">
            Compassionate staff for healthcare, elderly care, and support roles.
          </p>
          <Link
            to="/services/care"
            className="mt-auto text-[#b57571] font-semibold hover:underline"
          >
            Find out more →
          </Link>
        </div>

        {/* Luxury Travel */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
          <div className="w-full h-72 overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1"
              alt="Luxury travel staff"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold mt-4 mb-2">
            Luxury Travels, Lifestyle & Concierge
          </h2>
          <p className="text-gray-700 mb-4">
            Exclusive staff for luxury lifestyle and high-end travel services.
          </p>
          <Link
            to="/services/luxury"
            className="mt-auto text-[#b57571] font-semibold hover:underline"
          >
            Find out more →
          </Link>
        </div>

        {/* Business & Admin */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
          <div className="w-full h-72 overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=80"
              alt="Business admin staff"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold mt-4 mb-2">
            Business & Head Office Administration
          </h2>
          <p className="text-gray-700 mb-4">
            Administrative professionals to support daily business operations.
          </p>
          <Link
            to="/services/business"
            className="mt-auto text-[#b57571] font-semibold hover:underline"
          >
            Find out more →
          </Link>
        </div>
      </div>
    </div>
  );
};
