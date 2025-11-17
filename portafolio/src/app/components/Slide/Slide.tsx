'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

import slide1 from './images/screen1.png'
import slide2 from './images/screen2.png'
import slide3 from './images/screen3.png'
import slide4 from './images/screen4.png'
import slide5 from './images/screen5.png'
import slide6 from './images/screen6.png'
import slide7 from './images/screen7.png'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-coverflow';

import './styles.css';


export const Slide = () => {
  return (
    <div className='grid grdi-cols sm:grid-cols'>
    <Swiper
      className="rounded-lg"
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
          width={800}
          height={800}
          style={{ objectFit: "cover" }}
        />
      </SwiperSlide>
      <SwiperSlide className=''>
        <Image
          src={slide2}
          alt="imagenSlide2"
          width={600}
          style={{ objectFit: "cover" }}
        />
      </SwiperSlide>
      <SwiperSlide className=''>
        <Image
          src={slide3}
          alt="imagenSlide3"
          width={600}
          style={{ objectFit: "cover" }}
          />
      </SwiperSlide>
      <SwiperSlide className=''>
        <Image
          src={slide4}
          alt="imagenSlide4"
          width={600}
          style={{ objectFit: "cover" }}
          />
      </SwiperSlide>
      <SwiperSlide className=''>
        <Image
          src={slide5}
          alt="imagenSlide4"
          width={600}
          style={{ objectFit: "cover" }}
          />
      </SwiperSlide>
      <SwiperSlide className=''>
        <Image
          src={slide6}
          alt="imagenSlide4"
          width={600}
          style={{ objectFit: "cover" }}
          />
      </SwiperSlide>
      <SwiperSlide className=''>
        <Image
          src={slide7}
          alt="imagenSlide4"
          width={600}
          style={{ objectFit: "cover" }}
          />
      </SwiperSlide>
      
    </Swiper>
    </div>
  );
};