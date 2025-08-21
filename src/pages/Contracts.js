export const Contracts = () => {
  return (
       <div className="bg-gray-50">
      {/* Hero Section with Background Image */}
      <section
        className="relative bg-red-800 text-white text-center py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/contracts-bg.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 p-10 rounded-lg max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-6">Contracts & Compliance</h1>
          <p className="text-lg leading-relaxed">
            At GA Recruitment, we believe in building trust through clear, fair,
            and transparent contracts. Every agreement we provide is designed to
            protect both our clients and our staff, ensuring a professional
            relationship that thrives on reliability, accountability, and mutual
            respect.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - image */}
        <div>
          <img
            src="/images/contracts.jpg"
            alt="Business contract discussion"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Right side - text */}
        <div>
          <h2 className="text-3xl font-bold text-red-900 mb-6">Why Our Contracts Stand Out</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We understand that staffing services require a foundation of trust and 
            commitment. Our contracts are tailored to meet the specific needs of our 
            clients, providing clarity on responsibilities, timelines, costs, and 
            quality standards. With every contract, you gain peace of mind knowing 
            expectations are documented and legally protected.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Unlike standard templates, our agreements are flexible, scalable, and 
            designed to evolve as your requirements grow. Whether you need short-term 
            event staff or long-term workforce support, we create a partnership 
            grounded in professionalism and fairness.
          </p>
        </div>
      </section>

      {/* Compliance & Transparency */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-red-800 mb-8">Compliance & Transparency</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            GA Recruitment strictly adheres to labor laws, safety standards, and 
            ethical business practices. All contracts are written in simple, 
            easy-to-understand language to ensure transparency for both clients 
            and employees. We ensure that every party is informed of their rights, 
            duties, and protections under our agreements.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This commitment to compliance is what sets us apart — helping you avoid 
            risks, maintain smooth operations, and focus on achieving your goals 
            without unnecessary complications.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-red-900 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Partner with Confidence</h2>
        <p className="max-w-3xl mx-auto mb-8 text-lg leading-relaxed">
          Secure, fair, and flexible contracts form the backbone of long-term 
          partnerships. Let GA Recruitment handle your staffing needs with the 
          professionalism and transparency you deserve.
        </p>
        <a
          href="/contact"
          className="bg-white text-red-900 px-8 py-3 rounded-lg shadow hover:bg-gray-100 font-semibold"
        >
          Contact Us Today
        </a>
      </section>
    </div>
  );
}
