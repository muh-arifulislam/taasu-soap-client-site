import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

import svgIcon from "../../assets/icons/121.svg";

const Testimonials = [
  {
    _id: "test01",
    name: "John Doe",
    review:
      "This soap is amazing! My skin feels so soft and refreshed after using it. Highly recommend to everyone.",
    createdAt: "March 15, 2023",
  },
  {
    _id: "test02",
    name: "Jane Smith",
    review:
      "The fragrance is so natural and calming. I love that it’s handmade and eco-friendly!",
    createdAt: "April 2, 2023",
  },
  {
    _id: "test03",
    name: "Michael Brown",
    review:
      "I have sensitive skin and this soap works perfectly for me. No irritation at all.",
    createdAt: "May 20, 2023",
  },
  {
    _id: "test04",
    name: "Emily Johnson",
    review:
      "Beautifully packaged and the lather is rich. It feels like a luxury product.",
    createdAt: "June 10, 2023",
  },
  {
    _id: "test05",
    name: "David Lee",
    review:
      "Great value for money. I’ve tried many soaps but this one stands out for its quality.",
    createdAt: "July 1, 2023",
  },
];

const TestimonialSection = () => {
  const width = window.innerWidth;

  return (
    <section className="container mx-auto px-4 mt-10">
      <div>
        <div>
          <div className="flex flex-col items-center">
            <h2 className="text-xl md:text-3xl font-secondary mb-4">
              Our Customers' Reviews.
            </h2>
            <div className="mb-4">
              <img src={svgIcon} className="w-14 h-14" alt="" />
            </div>
            <p className="text-lg text-slate-600/70">
              We're happy that more and more customers prefer handmade organic
              soaps.
            </p>
          </div>
          <div className="mt-10">
            <Swiper
              slidesPerView={width < 640 ? 1 : 2}
              spaceBetween={20}
              slidesPerGroup={1}
              loop={true}
              loopAddBlankSlides={true}
              autoplay={true}
              pagination={false}
              modules={[Autoplay]}
              className="top-product-swiper"
            >
              {Testimonials.map((testimonial) => (
                <SwiperSlide
                  key={testimonial._id}
                  className="select-none bg-transparent"
                >
                  <div className="border-2 border-red-400/30 px-10 py-20 flex flex-col items-center justify-center text-center">
                    <h3 className="text-2xl font-bold mb-4 text-red-500/40">
                      {testimonial.name}
                    </h3>
                    <p className="font-medium leading-6 mb-3 italic text-slate-700/40">
                      "{testimonial.review}"
                    </p>
                    <span className="text-slate-600/30 font-bold italic">
                      {testimonial.createdAt}
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
