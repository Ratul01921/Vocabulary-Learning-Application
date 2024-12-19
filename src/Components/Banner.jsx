import React from 'react';
import slider1 from '../assets/Screenshot 2024-12-20 004310.png'
import slider2 from '../assets/slider-1.jpg'
import slider3 from '../assets/slider-2.jpg'
import slider4 from '../assets/download.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';


const Banner = () => {
    return (
        // <div className="carousel w-full h-96 my-8">
        //     <div id="slide1" className="carousel-item relative w-full ">
        //         <img
        //             src={slider1}
        //             className="w-full object-fill " />
        //         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        //             <a href="#slide4" className="btn btn-circle">❮</a>
        //             <a href="#slide2" className="btn btn-circle">❯</a>
        //         </div>
        //     </div>
        //     <div id="slide2" className="carousel-item relative w-full">
        //         <img
        //             src={slider2}
        //             className="w-full" />
        //         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        //             <a href="#slide1" className="btn btn-circle">❮</a>
        //             <a href="#slide3" className="btn btn-circle">❯</a>
        //         </div>
        //     </div>
        //     <div id="slide3" className="carousel-item relative w-full">
        //         <img
        //             src={slider3}
        //             className="w-full" />
        //         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        //             <a href="#slide2" className="btn btn-circle">❮</a>
        //             <a href="#slide4" className="btn btn-circle">❯</a>
        //         </div>
        //     </div>
        //     <div id="slide4" className="carousel-item relative w-full">
        //         <img
        //             src={slider4}
        //             className="w-full" />
        //         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        //             <a href="#slide3" className="btn btn-circle">❮</a>
        //             <a href="#slide1" className="btn btn-circle">❯</a>
        //         </div>
        //     </div>
        // </div>
        <div className="w-full  my-6">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="h-64 md:h-96 lg:h-[650px]"

            >
                <SwiperSlide>
                    <img className='w-full object-cover' src={slider1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full object-cover' src={slider2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full object-cover' src={slider3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full object-cover' src={slider4} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;