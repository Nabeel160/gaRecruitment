import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

export const AgencySectionWithCarousel = () => {
  const items = [
    { title: "Event Staff", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f", link: '/services/event' },
    { title: "Hotel Staff", img: "/images/hotelStaff.jpg", link: '/services/hotel' },
    { title: "Cleaning Services", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952", link: '/services/cleaning' },
    { title: "Chefs & Kitchen Management", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4", link: '/services/chefs' },
    { title: "Food Service", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836", link: '/services/food-service' },
    { title: "IT & Software Management", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c", link: '/services/it' },
    { title: "Sales & Marketing", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d", link: '/services/sales' },
    { title: "Finance", img: "https://plus.unsplash.com/premium_photo-1661443781814-333019eaad2d?q=80&w=1551&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", link: '/services/finance' },
    { title: "HR & Recruitment", img: "https://images.unsplash.com/photo-1521791136064-7986c2920216", link: '/services/hr' },
    { title: "Care Service", img: "https://images.unsplash.com/photo-1584515933487-779824d29309", link: '/services/care' },
    { title: "Luxury Travels", img: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1", link: '/services/luxury' },
    { title: "Business Administration", img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=80", link: '/services/business' },
  ];

  return (
    <section className="bg-white py-16">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-playpen font-bold text-[#b57571]">
          Our Hospitality Recruitment Agency
        </h2>
      </div>

      {/* Carousel */}
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-7xl mx-auto"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative rounded-2xl overflow-hidden shadow-lg group h-[450px] mb-12">
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              {/* Black Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>

              {/* Centered Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                <h3 className="text-3xl font-bold my-28">{item.title}</h3>
                <Link
                  to={item.link}
                  className="text-sm underline hover:text-gray-300 transition"
                >
                  Find out more
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
