import { Link } from "react-router-dom";

export const Services = () => {
  return (
    <div className="bg-gray-50 font-funnel">
      <section className="text-center pt-16 pb-8 mt-10">
        <h1 className="text-4xl font-extrabold font-playpen">Our Services</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg">
          Explore the staffing solutions GA Recruitment offers for events,
          hotels, and cleaning. Click below to learn more about each service.
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 pb-4">
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
              src="/images/hotelStaff.jpg"
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
      </div>
    </div>
  );
};
