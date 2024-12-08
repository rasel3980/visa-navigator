import React from 'react';

import { Swiper, SwiperSlide,} from 'swiper/react';  // Import Swiper and SwiperSlide
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";


import slider1 from '../assets/slider1.jpg';
import slider2 from '../assets/slider-2.jpg';
import slider3 from '../assets/slider-3.jpg';

const image ={
    slider1,
    slider2,
    slider3
}

const Banner = () => {
    return (
        <>
      <Swiper
        spaceBetween={50}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper mt-10 w-full h-80 md:h-[400px]"
        loop={true}
      >
        <SwiperSlide>
          <div className="flex justify-center items-center w-full h-full">
            <img
              className="w-full h-full object-cover rounded-xl"
              src={slider1}
              alt="Homework image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center w-full h-full">
            <img
              className="w-full h-full object-cover rounded-xl"
              src={slider2}
              alt="Online Spanish learning"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center w-full h-full">
            <img
              className="w-full h-full object-cover rounded-xl"
              src={slider3}
              alt="Online Spanish learning"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
    );
};

export default Banner;
