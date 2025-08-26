export const Contact = () => {
  return (
    <div className="bg-gray-50 font-funnel">
      {/* Hero */}
      <section
        className="relative text-white text-center py-24 px-6 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        {/* brand tint overlay */}
        <div className="absolute inset-0 bg-[#b57571]/45" />
        <div className="relative max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold font-playpen">Contact Us</h1>
          <p className="mt-6 text-lg leading-relaxed">
            Looking for dependable staffing or ready to join our team? Our specialists are here
            to help with fast responses and tailored guidance.
          </p>
        </div>
      </section>

      {/* Main contact section */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: content */}
        <div>
          <h2 className="text-3xl font-bold text-[#b57571] mb-6 font-playpen">Let’s Start the Conversation</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            GA Recruitment partners with hotels, events, and facilities to provide trained,
            reliable teams. Tell us your goals, timeline, and headcount — we’ll craft a plan
            that fits.
          </p>
          <p className="mb-6 text-gray-700 leading-relaxed">
            Candidates are welcome too. Share your CV and availability to be matched with roles
            that suit your skills and schedule.
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <span className="mt-1 mr-3 inline-block w-2.5 h-2.5 rounded-full bg-[#b57571]" />
              <span className="text-gray-700">Tailored staffing for hospitality, events, and cleaning.</span>
            </li>
            <li className="flex items-start">
              <span className="mt-1 mr-3 inline-block w-2.5 h-2.5 rounded-full bg-[#b57571]" />
              <span className="text-gray-700">Clear SLAs, replacement guarantees, and transparent pricing.</span>
            </li>
            <li className="flex items-start">
              <span className="mt-1 mr-3 inline-block w-2.5 h-2.5 rounded-full bg-[#b57571]" />
              <span className="text-gray-700">Fast turnaround for urgent or seasonal needs.</span>
            </li>
          </ul>

          {/* Contact Card */}
          <div className="bg-white shadow-lg p-6 rounded-2xl border-l-4 border-[#b57571]">
            <h3 className="text-xl font-semibold mb-4 text-[#b57571] font-playpen">Contact Information</h3>
            <p className="mb-2">📍 123 Recruitment Street, London, UK</p>
            <p className="mb-2">
              📞 <a href="tel:+44123456789" className="underline decoration-[#b57571]">+44 123 456 789</a>
            </p>
            <p className="mb-2">
              ✉️ <a href="mailto:info@garecruitment.com" className="underline decoration-[#b57571]">info@garecruitment.com</a>
            </p>
            <p className="mb-2">🕒 Mon–Fri: 9:00 AM – 6:00 PM</p>
            <p className="text-gray-600">Response time: typically within 1 business day.</p>
          </div>
        </div>

        {/* Right: image with caption */}
        <div className="space-y-6">
          <div className="w-full h-[480px] rounded-2xl overflow-hidden shadow-2xl">
            <img
               src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80"
              alt="Friendly team ready to help"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <p className="text-sm text-gray-500 text-center">
            Our coordination team is ready to scope, staff, and support your operations.
          </p>
        </div>
      </section>

      {/* Image strip */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          <div className="h-64 rounded-2xl overflow-hidden shadow">
            <img
              src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=1200&q=80"
              alt="Workspace desk with contact options"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="h-64 rounded-2xl overflow-hidden shadow">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
              alt="Professional team collaborating"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="h-64 rounded-2xl overflow-hidden shadow">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80"
              alt="Handshake partnership"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#b57571] text-white py-20 text-center px-6">
        <h2 className="text-3xl font-bold mb-4 font-playpen">Ready to Get Started?</h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
          Tell us your staffing needs and timelines — we’ll respond with a clear plan and next steps.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="mailto:info@garecruitment.com"
            className="bg-white text-[#b57571] px-8 py-3 rounded-xl shadow hover:bg-gray-100 font-semibold transition"
          >
            Email Us
          </a>
          <a
            href="tel:+44123456789"
            className="border border-white/80 px-8 py-3 rounded-xl shadow hover:bg-white/10 font-semibold transition"
          >
            Call Now
          </a>
        </div>
      </section>
    </div>
  );
};
