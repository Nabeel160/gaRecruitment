import { AgencySectionWithCarousel } from "../components/AgencySectionWithCarousel";
import { Testimonials } from "../components/Testimonials";

export const Home = () => {
  return (
    <div className="bg-gray-50 font-funnel">
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="max-w-[90%] mx-auto my-28"> 
          <div className="relative">
            <img
              src="/images/mainBanner.webp"
              alt="Recruitment Services"
              className="w-full h-[65vh] object-cover rounded-[50px] shadow-lg "
            />

            {/* Text overlay */}
            <div className="absolute top-1/2 left-12 transform -translate-y-1/2 bg-white/80 p-8 rounded-lg shadow-md max-w-xl">
              <h1 className="text-5xl font-bold text-[#b57571] mb-4 font-playpen">
                GA Recruitment
              </h1>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Providing trusted and professional staffing solutions for
                hotels, events, and cleaning services. Our trained staff
                seamlessly integrate into your operations to deliver exceptional
                results.
              </p>
              <a
                href="/services"
                className="bg-[#b57571] text-white px-6 py-3 rounded-lg shadow hover:bg-[#9a5e5a] transition"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#b57571] mb-6 font-playpen">
              About GA Recruitment
            </h2>
            <p className="text-lg mb-4 text-gray-700 leading-relaxed">
              GA Recruitment has been a trusted staffing partner for years,
              specializing in supplying event staff, hotel personnel, and
              cleaning professionals across multiple industries. We are
              dedicated to delivering not only manpower but also peace of mind.
            </p>
            <p className="text-lg mb-4 text-gray-700 leading-relaxed">
              Whether it’s a high-profile corporate gathering, a luxury hotel
              operation, or maintaining cleanliness in a busy commercial space,
              we provide the right people with the right skills.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our team works tirelessly to understand your staffing requirements
              and deliver customized solutions. With GA Recruitment, you get
              trained professionals, clear contracts, and guaranteed staff
              replacements when required.
            </p>
          </div>
          <div>
            <img
              src="/images/homeSideImage.webp"
              alt="Professional team at work"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      <AgencySectionWithCarousel />

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-[#b57571] mb-8 text-center font-playpen">
            Why Choose GA Recruitment?
          </h2>
          <div className="grid md:grid-cols-2 gap-12 text-gray-700">
            <div>
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
                alt="Experienced staff"
                className="rounded-2xl shadow mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                ✔ Years of Experience
              </h3>
              <p>
                With multiple years in the staffing industry, GA Recruitment has
                built a reputation for reliability and excellence. Our knowledge
                of the hospitality, events, and cleaning sectors allows us to
                provide tailored staffing solutions.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                alt="Trained professionals"
                className="rounded-2xl shadow mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                ✔ Trained Professionals
              </h3>
              <p>
                Every staff member undergoes strict training, ensuring they can
                deliver services with professionalism and confidence. We don’t
                just send workers — we send well-prepared team members.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
                alt="Flexible contracts"
                className="rounded-2xl shadow mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                ✔ Flexible Contracts
              </h3>
              <p>
                We offer daily, monthly, and yearly contracts, designed to fit
                your unique needs. Our flexible terms mean you can count on us
                for both short-term and long-term staffing.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="Client support"
                className="rounded-2xl shadow mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                ✔ End-to-End Support
              </h3>
              <p>
                From recruitment and training to ongoing staff management, we
                provide continuous support, ensuring our clients enjoy a
                seamless experience from start to finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
};
