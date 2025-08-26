import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sophia L.",
      text: "GA Recruitment provided professional staff for our corporate event. Everything ran smoothly thanks to their reliable team!",
    },
    {
      name: "James P.",
      text: "We hired cleaning staff through GA Recruitment, and they were punctual, efficient, and extremely professional.",
    },
    {
      name: "Amelia K.",
      text: "The hotel staff supplied by GA Recruitment exceeded our expectations — polite, well-trained, and always ready to help.",
    },
    {
      name: "Daniel R.",
      text: "From booking to execution, the service was seamless. Highly recommend GA Recruitment for any staffing needs!",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 mt-16">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-[#b57571] mb-10 font-playpen">
          What Our Clients Say
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-lg p-6 h-full flex flex-col justify-between hover:shadow-2xl transition mb-8">
                <p className="text-gray-700 italic mb-4">“{t.text}”</p>
                <h4 className="text-[#b57571] font-semibold">{t.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
