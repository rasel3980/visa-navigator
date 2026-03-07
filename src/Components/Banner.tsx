
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { NavLink } from 'react-router-dom';

import slider1 from '../assets/slider1.jpg';
import slider2 from '../assets/slider-2.jpg';
import slider3 from '../assets/slider-3.jpg';

interface SlideData {
  image: string;
  alt: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  cta: string;
}

const slides: SlideData[] = [
  {
    image: slider1,
    alt: "Beautiful Landscape",
    badge: "🌍 190+ Countries",
    title: "Explore the",
    subtitle: "World Freely",
    description: "Discover new destinations and experiences with hassle-free visa processing.",
    cta: "Explore Visas",
  },
  {
    image: slider2,
    alt: "Travel Destination",
    badge: "⚡ Fast Processing",
    title: "Adventure",
    subtitle: "Awaits You",
    description: "Embark on a journey of a lifetime with our streamlined visa application process.",
    cta: "Apply Now",
  },
  {
    image: slider3,
    alt: "Exotic Locations",
    badge: "✨ 99% Success Rate",
    title: "Unforgettable",
    subtitle: "Memories",
    description: "Make memories that last forever. Your dream destination is just a visa away.",
    cta: "Get Started",
  },
];

const Banner = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');
        .banner-font { font-family: 'Syne', sans-serif; }
        .body-font { font-family: 'DM Sans', sans-serif; }

        .swiper-button-next,
        .swiper-button-prev {
          width: 44px !important;
          height: 44px !important;
          background: rgba(255,255,255,0.15) !important;
          backdrop-filter: blur(10px) !important;
          border: 1px solid rgba(255,255,255,0.2) !important;
          border-radius: 50% !important;
          color: white !important;
          transition: all 0.3s ease !important;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: rgba(255,255,255,0.3) !important;
          transform: scale(1.1) !important;
        }
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 14px !important;
          font-weight: bold !important;
        }
        .swiper-pagination-bullet {
          width: 8px !important;
          height: 8px !important;
          background: rgba(255,255,255,0.5) !important;
          opacity: 1 !important;
          transition: all 0.3s ease !important;
        }
        .swiper-pagination-bullet-active {
          width: 28px !important;
          height: 8px !important;
          border-radius: 4px !important;
          background: white !important;
        }
        .slide-content {
          animation: slideUp 0.8s ease forwards;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .badge-pill {
          animation: slideUp 0.6s ease forwards;
        }
        .cta-btn {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .cta-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transform: translateX(-100%);
          transition: transform 0.5s ease;
        }
        .cta-btn:hover::after { transform: translateX(100%); }
        .cta-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 30px rgba(0,0,0,0.3); }
        .outline-cta {
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }
        .outline-cta:hover {
          background: rgba(255,255,255,0.2);
          transform: translateY(-2px);
        }
      `}</style>

      <div className="body-font w-full">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full h-[85vh] min-h-[550px]"
          loop={true}
        >
          {slides.map((slide: SlideData, index: number) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <img
                  className="w-full h-full object-cover"
                  src={slide.image}
                  alt={slide.alt}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                <div className="absolute inset-0 flex items-center">
                  <div className="max-w-7xl mx-auto px-8 md:px-16 w-full">
                    <div className="max-w-2xl slide-content">
                      <div className="badge-pill inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6">
                        <span className="text-sm text-white font-medium">{slide.badge}</span>
                      </div>
                      <h1 className="banner-font text-5xl md:text-7xl font-extrabold text-white leading-none mb-3">
                        {slide.title}
                        <br />
                        <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                          {slide.subtitle}
                        </span>
                      </h1>
                      <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
                        {slide.description}
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <NavLink to="/all visas">
                          <button className="cta-btn px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-2xl shadow-xl text-sm tracking-wide">
                            {slide.cta} →
                          </button>
                        </NavLink>
                        <NavLink to="/register">
                          <button className="outline-cta px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-2xl text-sm tracking-wide">
                            Learn More
                          </button>
                        </NavLink>
                      </div>
                      <div className="flex gap-8 mt-12 pt-8 border-t border-white/10">
                        {[
                          { value: '190+', label: 'Countries' },
                          { value: '50K+', label: 'Applications' },
                          { value: '99%', label: 'Success' },
                        ].map((stat) => (
                          <div key={stat.label}>
                            <p className="banner-font text-2xl font-bold text-white">{stat.value}</p>
                            <p className="text-white/50 text-xs mt-0.5">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Banner;