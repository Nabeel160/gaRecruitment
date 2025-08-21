export const Contact = () => {
  return (
     <div className="bg-gray-50">
      {/* Header */}
      <section className="bg-red-900 text-white text-center py-16">
        <h1 className="text-4xl font-extrabold">Contact Us</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg">
          We’d love to hear from you! Whether you’re looking for staffing
          solutions or want to join our team, our support staff is ready to
          assist.
        </p>
      </section>

      {/* Contact Info */}
      <section className="py-16 max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-red-900 mb-6">Get in Touch</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            GA Recruitment is committed to building lasting partnerships. Contact
            us today to discuss your staffing requirements, request a consultation,
            or simply ask a question about our services.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Our team is available to assist businesses with short-term and
            long-term staffing needs across the hospitality, event, and cleaning
            sectors.
          </p>
          <p className="mb-6 text-gray-700 leading-relaxed">
            We also welcome applications from professionals seeking work
            opportunities. Submit your CV and become part of our trusted network.
          </p>

          <div className="bg-white shadow-lg p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="mb-2">📍 Address: 123 Recruitment Street, London, UK</p>
            <p className="mb-2">📞 Phone: +44 123 456 789</p>
            <p className="mb-2">✉️ Email: info@garecruitment.com</p>
          </div>
        </div>

        {/* Image */}
        <div >
          <img
            src="/images/contactUs.jpg"
            alt="Contact us"
            className="rounded-2xl shadow-lg"
            style={{ height: '80%'}}
          />
        </div>
      </section>
    </div>
  );
}
