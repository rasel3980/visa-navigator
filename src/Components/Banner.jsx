import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';  
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import slider1 from '../assets/slider1.jpg';
import slider2 from '../assets/slider-2.jpg';
import slider3 from '../assets/slider-3.jpg';

const image = {
  slider1,
  slider2,
  slider3
};

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
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper mt-10 w-full h-80 md:h-[500px] rounded-xl shadow-lg"
        loop={true}
      >
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
              src={slider1}
              alt="Beautiful Landscape"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-black opacity-50 rounded-xl"></div>
            <div className="absolute bottom-10 left-10 text-white">
              <h2 className="text-3xl font-semibold">Explore the World</h2>
              <p className="text-xl mt-2">Discover new destinations and experiences.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
              src={slider2}
              alt="Travel Destination"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-black opacity-50 rounded-xl"></div>
            <div className="absolute bottom-10 left-10 text-white">
              <h2 className="text-3xl font-semibold">Adventure Awaits</h2>
              <p className="text-xl mt-2">Embark on a journey of a lifetime.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
              src={slider3}
              alt="Exotic Locations"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-black opacity-50 rounded-xl"></div>
            <div className="absolute bottom-10 left-10 text-white">
              <h2 className="text-3xl font-semibold">Unforgettable Memories</h2>
              <p className="text-xl mt-2">Make memories that last forever.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
