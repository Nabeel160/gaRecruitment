import { ShieldCheck, FileText, Scale, CheckCircle2 } from "lucide-react";

export const Contracts = () => {
  return (
    <div className="bg-gray-50 font-funnel">
      {/* Hero Section */}
      <section
        className="relative bg-[#b57571] text-white text-center py-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="bg-[#b57571]/60 bg-opacity-50 p-10 rounded-2xl max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-6 font-playpen">Contracts & Compliance</h1>
          <p className="text-lg leading-relaxed">
            At GA Recruitment, our contracts are more than paperwork — they are
            promises of fairness, professionalism, and mutual respect. We build
            trust by ensuring every agreement is transparent, ethical, and
            legally sound.
          </p>
        </div>
      </section>

      {/* Why Our Contracts Stand Out */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="/images/contracts.jpg"
            alt="Business contract discussion"
            className="rounded-2xl shadow-xl"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-[#9a5f5b] mb-6 font-playpen">
            Why Our Contracts Stand Out
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We design agreements that protect both clients and employees while
            being flexible to your business needs. Every detail — from timelines
            to costs — is clearly documented so there are no surprises.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <CheckCircle2 className="text-[#b57571] w-6 h-6 mr-3" />
              Tailored to match your staffing requirements.
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="text-[#b57571] w-6 h-6 mr-3" />
              Transparent terms — no hidden clauses or confusion.
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="text-[#b57571] w-6 h-6 mr-3" />
              Flexible and scalable for short or long-term needs.
            </li>
          </ul>
        </div>
      </section>

      {/* Compliance & Transparency */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#b57571] mb-10 font-playpen">
            Compliance & Transparency
          </h2>
          <div className="grid md:grid-cols-3 gap-10 text-gray-700">
            <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-md transition">
              <ShieldCheck className="text-[#9a5f5b] w-12 h-12 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-3">Strict Legal Adherence</h3>
              <p>
                We comply with labor laws, safety standards, and ethical
                practices, giving you complete peace of mind.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-md transition">
              <FileText className="text-[#9a5f5b] w-12 h-12 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-3">Simple Language</h3>
              <p>
                Our contracts are written in clear, easy-to-understand wording —
                no legal jargon, no hidden traps.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-md transition">
              <Scale className="text-[#9a5f5b] w-12 h-12 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-3">Fair Agreements</h3>
              <p>
                Every contract ensures equal protection for clients and staff,
                fostering long-term partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Images / Trust Section */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=80"
            alt="Handshake"
            className="rounded-2xl shadow-md hover:shadow-xl transition"
          />
          <img
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1000&q=80"
            alt="Compliance meeting"
            className="rounded-2xl shadow-md hover:shadow-xl transition"
          />
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1000&q=80"
            alt="Team contract discussion"
            className="rounded-2xl shadow-md hover:shadow-xl transition"
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#9a5f5b] text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Partner with Confidence</h2>
        <p className="max-w-3xl mx-auto mb-10 text-lg leading-relaxed">
          Secure, fair, and flexible contracts form the backbone of lasting
          partnerships. Let GA Recruitment handle your staffing needs with
          professionalism and transparency.
        </p>
        <a
          href="/contact"
          className="bg-white text-[#9a5f5b] px-8 py-3 rounded-lg shadow hover:bg-gray-100 font-semibold transition"
        >
          Contact Us Today
        </a>
      </section>
    </div>
  );
};
