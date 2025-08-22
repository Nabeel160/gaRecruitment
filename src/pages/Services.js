export const Services = () => {
  return (
  <div className="bg-gray-50 font-funnel">
      {/* Header */}
      <section className="text-center py-16 mt-10">
        <h1 className="text-4xl font-extrabold font-playpen">Our Services</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg">
          GA Recruitment provides a wide range of professional staffing services
          designed to meet the needs of businesses, hotels, events, and cleaning
          operations. We tailor each service to match your requirements with
          trained, reliable, and professional staff.
        </p>
      </section>

      {/* Event Staff */}
      <section className="py-16 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="Event staff"
          className="rounded-2xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">Event Staffing</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Hosting an event requires not only planning but also reliable staff
            who can manage guests, assist with operations, and ensure everything
            runs smoothly. GA Recruitment supplies event coordinators, waitstaff,
            ushers, and support teams tailored to your event’s size and nature.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Whether it’s a corporate function, wedding, or large festival, our
            staff is trained in guest handling, crowd management, and professional
            etiquette. We ensure your event staff is punctual, well-presented, and
            fully briefed.
          </p>
          <p className="text-gray-700 leading-relaxed">
            With GA Recruitment, you get peace of mind knowing your event is
            supported by professionals who understand the importance of first
            impressions and seamless service.
          </p>
        </div>
      </section>

      {/* Hotel Staff */}
      <section className="py-16 bg-gray-100 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Hotel Staffing</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Hotels require a diverse range of skilled professionals to function
            effectively. GA Recruitment provides chefs, housekeeping staff,
            front-desk receptionists, and support staff to ensure smooth daily
            operations.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Our hotel staff is trained to maintain the highest standards of
            hospitality, ensuring guests feel welcomed and well taken care of from
            check-in to check-out.
          </p>
          <p className="text-gray-700 leading-relaxed">
            From luxury hotels to boutique resorts, we supply both short-term and
            long-term staffing solutions that adapt to your business needs.
          </p>
        </div>
        <img
          src="/images/hotelStaff.jpg"
          alt="Hotel staff"
          className="rounded-2xl shadow-lg"
        />
      </section>

      {/* Cleaning Staff */}
      <section className="py-16 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
          alt="Cleaning staff"
          className="rounded-2xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">Cleaning Services</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            A clean environment is essential for productivity and comfort. GA
            Recruitment offers professional cleaning staff for offices,
            commercial spaces, and residential properties.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Our cleaning professionals are trained in the latest cleaning
            techniques, ensuring hygiene, safety, and attention to detail in every
            task they perform.
          </p>
          <p className="text-gray-700 leading-relaxed">
            From daily office cleaning to specialized deep-cleaning services, we
            adapt our workforce to your schedule and requirements.
          </p>
        </div>
      </section>
    </div>
  );
}
