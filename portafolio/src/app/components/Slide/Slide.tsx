'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

import slide1 from './images/screenShoesMenu.png'
import slide2 from './images/screenShoesSidebar.png'
import slide3 from './images/screenShoesShop.png'
import slide4 from './images/screenShoesCart.png'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-coverflow';

import './styles.css';
// import { useRef, useState } from 'react';

export const Slide = () => {
  return (
    <div className='p-7 grid grdi-cols sm:grid-cols'>
    <Swiper
      className="rounded-xl"
      spaceBetween={5}
      slidesPerView={1}
      centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      pagination={{
        type:'progressbar',
      }}
      navigation={false}
      modules={[Navigation, Pagination ]}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className=''>
        <Image
          src={slide1}
          alt="imagenSlide1"
          width={600}
          height={600}
          objectFit="cover"
        />
      </SwiperSlide>
      <SwiperSlide className=''>
        <Image
          src={slide2}
          alt="imagenSlide2"
          width={600}
          objectFit="cover"
        />
      </SwiperSlide>
      <SwiperSlide className=''>
        <Image
          src={slide3}
          alt="imagenSlide3"
          width={600}
          objectFit="cover"
          />
      </SwiperSlide>
      <SwiperSlide className=''>
        <Image
          src={slide4}
          alt="imagenSlide4"
          width={600}
          objectFit="cover"
          />
      </SwiperSlide>
      
    </Swiper>
    </div>
  );
};