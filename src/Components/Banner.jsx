import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';  // Import Swiper and SwiperSlide
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import slider1 from '../assets/slider1.jpg';
import slider2 from '../assets/slider-2.jpg';
import slider3 from '../assets/slider-3.jpg';

const Banner = () => {
    return (
        <div className="w-full h-[400px] bg-gray-200">
            <Swiper
                spaceBetween={50}   // Space between slides
                slidesPerView={1}   // Number of slides visible at once
                autoplay={{         // Autoplay feature
                    delay: 3000,   // 3 seconds for each slide
                    disableOnInteraction: false,  // Autoplay continues after interaction
                }}
                loop={true}         // Infinite loop through slides
                pagination={{       // Pagination dots for navigation
                    clickable: true,
                }}
                navigation={{       // Navigation arrows for manual slide control
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
            >
                <SwiperSlide>
                    <div className="relative w-full h-full">
                        <img src={slider1} alt="Slide 1" className="w-full h-full object-cover" />
                        <div className="absolute bottom-10 left-10 text-white">
                            <h2 className="text-3xl font-semibold">Visa Requirements Made Easy</h2>
                            <p>Explore visa options from various countries with ease.</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative w-full h-full">
                        <img src={slider2} alt="Slide 2" className="w-full h-full object-cover" />
                        <div className="absolute bottom-10 left-10 text-white">
                            <h2 className="text-3xl font-semibold">Quick and Simple Application Process</h2>
                            <p>Apply for your visa online and track your application status.</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative w-full h-full">
                        <img src={slider3} alt="Slide 3" className="w-full h-full object-cover" />
                        <div className="absolute bottom-10 left-10 text-white">
                            <h2 className="text-3xl font-semibold">Get Started Today</h2>
                            <p>Find the best visa options for your travel or studies.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            {/* Navigation buttons */}
            <div className="swiper-button-next absolute top-[50%] right-5 text-white text-3xl cursor-pointer z-10"></div>
            <div className="swiper-button-prev absolute top-[50%] left-5 text-white text-3xl cursor-pointer z-10"></div>
        </div>
    );
};

export default Banner;
