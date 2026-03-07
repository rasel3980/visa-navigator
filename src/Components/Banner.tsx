
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import slider1 from '../assets/slider1.jpg';
import slider2 from '../assets/slider-2.jpg';
import slider3 from '../assets/slider-3.jpg';

interface SlideData {
  image: string;
  alt: string;
  title: string;
  description: string;
}

const slides: SlideData[] = [
  {
    image: slider1,
    alt: "Beautiful Landscape",
    title: "Explore the World",
    description: "Discover new destinations and experiences.",
  },
  {
    image: slider2,
    alt: "Travel Destination",
    title: "Adventure Awaits",
    description: "Embark on a journey of a lifetime.",
  },
  {
    image: slider3,
    alt: "Exotic Locations",
    title: "Unforgettable Memories",
    description: "Make memories that last forever.",
  },
];

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper mt-10 w-full h-80 md:h-[500px] rounded-xl shadow-lg"
        loop={true}
      >
        {slides.map((slide: SlideData, index: number) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
                src={slide.image}
                alt={slide.alt}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-black opacity-50 rounded-xl"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <h2 className="text-3xl font-semibold">{slide.title}</h2>
                <p className="text-xl mt-2">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Banner;