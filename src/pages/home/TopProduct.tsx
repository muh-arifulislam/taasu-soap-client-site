import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import bg1 from "../../assets/images/hero01.webp";
import svg from "../../assets/icons/121.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "./swiper.css";

import image1 from "../../assets/icons/01l.svg";
import image2 from "../../assets/icons/02l.svg";
import image3 from "../../assets/icons/03l.svg";
import image4 from "../../assets/icons/04l.svg";
import image5 from "../../assets/icons/05l.svg";

const AWARDS = [
  { id: "award01", image: image1, title: "Natural Ingredients" },
  { id: "award02", image: image2, title: "Cruelty Free" },
  { id: "award03", image: image3, title: "Vegan Friendly" },
  { id: "award04", image: image4, title: "Handmade" },
  { id: "award05", image: image5, title: "Eco-Friendly" },
];

const TopProduct = () => {
  const width = window.innerWidth;
  return (
    <section>
      <div className="relative max-w-screen-2xl mx-auto">
        <div
          className="absolute top-0 left-0 right-0 bottom-0 -z-10 opacity-90"
          style={{
            background: `url(${bg1})`,
            backgroundPosition: `${width < 570 ? "0% 50%" : "80% 50%"}`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 py-14 md:py-28">
          <div className="w-full md:w-[90%]">
            <h2 className="text-xl md:text-3xl font-bold mb-4 font-secondary">
              Matcha Green Soap.
            </h2>
            <div className="mb-4">
              <img src={svg} className="w-14 h-14" alt="" />
            </div>
            <p className="text-xl font-medium mb-12 text-slate-600/70">
              Matcha is not only a delicious tea but also our new homemade soap,
              which we are proud to present to you.
            </p>
            <p className="text-lg text-slate-600/70">
              Matcha has a huge number of useful effects. It contains theanine
              and catechin. Theanine is considered to be a powerful yet gentle
              natural antidepressant. Catechin is a very powerful antioxidant
              that works to rejuvenate our body. Now you can experience all
              these benefits of matcha in our artisan soap.
            </p>
            <div className="pt-5">
              <Swiper
                slidesPerView={4}
                spaceBetween={20}
                slidesPerGroup={1}
                loop={true}
                loopAddBlankSlides={true}
                autoplay={true}
                pagination={true}
                modules={[Autoplay, Pagination]}
                className="top-product-swiper"
              >
                {AWARDS.map((award) => (
                  <SwiperSlide
                    key={award.id}
                    className="select-none bg-transparent"
                  >
                    <img
                      style={{
                        width: "100px",
                        backgroundColor: "transparent",
                      }}
                      src={award.image}
                      alt={award.title}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopProduct;
