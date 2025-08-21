export const About = () => {
  return (
    <div className="bg-gray-50">
      {/* Header */}
      <section className="bg-red-900 text-white text-center py-16 bg-[length:100%_200%] bg-no-repeat "  style={{ backgroundImage: "url('/images/aboutUs.jpg')"}}>
        <h1 className="text-4xl font-extrabold">About Us</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg">
          GA Recruitment is more than a staffing company — we are a trusted
          partner in helping businesses and individuals succeed by providing
          reliable, professional, and skilled staff.
        </p>
      </section>

      {/* Who We Are */}
      <section className="py-16 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Our team"
          className="rounded-2xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold text-red-900 mb-4">Who We Are</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Founded with the mission to simplify staffing, GA Recruitment
            connects businesses with skilled professionals in the hospitality,
            events, and cleaning sectors. We focus on building long-term
            partnerships through trust and reliability.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Over the years, we’ve helped numerous businesses achieve seamless
            operations by providing dependable staffing solutions tailored to
            their exact requirements.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our approach is personal, hands-on, and proactive. We treat every
            client’s business as our own and ensure only the best people are sent
            to represent your brand.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-gray-100 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-red-900 mb-4">Our Mission</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Our mission is to provide professional staffing solutions that exceed
            client expectations while creating meaningful job opportunities for
            individuals. We bridge the gap between businesses needing skilled
            staff and professionals looking for reliable work.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            We believe that the right people in the right positions can transform
            an organization’s performance and customer satisfaction.
          </p>
          <p className="text-gray-700 leading-relaxed">
            By focusing on quality, reliability, and ongoing support, we ensure
            every placement contributes positively to your success.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
          alt="Mission"
          className="rounded-2xl shadow-lg"
        />
      </section>
    </div>
  );
}
