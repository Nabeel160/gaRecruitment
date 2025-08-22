export const About = () => {
  return (
    <div className="bg-gray-50 font-funnel">
      {/* Header Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto text-center px-6 max-w-4xl font-funnel">
          <h2 className="text-4xl font-bold mb-6 font-playpen">
            About GA Recruitment
          </h2>
          <p className="mb-4 leading-relaxed text-gray-700">
            At GA Recruitment, we pride ourselves on being more than just a staffing agency. 
            We are a trusted partner for businesses across industries, providing highly trained 
            and reliable staff for events, hotels, and cleaning services.
          </p>
          <p className="mb-4 leading-relaxed text-gray-700">
            With years of experience, our team understands the unique requirements of every client. 
            Whether you need professional event staff to ensure smooth operations, or dedicated 
            housekeeping and cleaning personnel, we tailor our services to meet your needs with 
            precision and care.
          </p>
          <p className="leading-relaxed text-gray-700">
            Our mission is simple: to deliver staffing solutions that go beyond expectations, 
            allowing our clients to focus on what they do best while we handle the rest. 
            Your success is our success.
          </p>
        </div>

        {/* Image below text */}
        <div className="container mx-auto mt-12 px-6 max-w-5xl">
          <img
            src="/images/aboutUs.jpg"
            alt="About GA Recruitment"
            className="w-full h-[70vh] object-cover rounded-[40px] shadow-lg"
          />
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Our team"
          className="rounded-2xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold text-[#b57571] mb-4">Who We Are</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Founded with the mission to simplify staffing, GA Recruitment connects 
            businesses with skilled professionals in the hospitality, events, and 
            cleaning sectors. We focus on building long-term partnerships through 
            trust and reliability.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Over the years, we’ve helped numerous businesses achieve seamless 
            operations by providing dependable staffing solutions tailored to their 
            exact requirements.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our approach is personal, hands-on, and proactive. We treat every 
            client’s business as our own and ensure only the best people are 
            sent to represent your brand.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-gray-100 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-[#b57571] mb-4">Our Mission</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Our mission is to provide professional staffing solutions that exceed 
            client expectations while creating meaningful job opportunities for 
            individuals. We bridge the gap between businesses needing skilled staff 
            and professionals looking for reliable work.
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
};
