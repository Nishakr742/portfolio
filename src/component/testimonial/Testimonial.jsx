import React from 'react';
import './testimonial.css';
import  Data  from './Data';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

function Testimonial() {
  return (
    <section className='testimonial container section'>
           <h2 className='section_title'>My clients say</h2>
           <span className='section_subtitle'>Testimonial</span>

        <Swiper className='testimonial_container'
          loop={true}
          grabCursor={true}
          spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
         
        }}
            modules={[Pagination]}
        >
          {
            Data.map(({id,image,title,desc})=>{
              return(
                <>
                  <SwiperSlide className="testimonial_card" key={id}>
                   <div className="img-boder"> <img src={image} alt="test-image" className='testimonial_img' /> </div> 

                    <h3 className='testmonial_name'>{title}</h3>
                    <p className="testmonial_desc">{desc}</p>
                  </SwiperSlide>
                </>
              )
            })
          }
        </Swiper>
    </section>
  )
}

export default Testimonial;