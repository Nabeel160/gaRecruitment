import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

export const AgencySectionWithCarousel = () => {
  const items = [
    { title: "Event Staff", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f" },
    { title: "Hotel Staff", img: "/images/hotelStaff.jpg" },
    { title: "Cleaning Services", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952" },
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
            <div className="relative rounded-2xl overflow-hidden shadow-lg group h-[450px]">
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
                  to="/services"
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
