import React from 'react'
import './Ayuda.css'

// Import Header Books Data
import { headerBooks2 } from '../../Data/Data';
// Import Swiper React components Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination} from 'swiper/modules';

// React Arrow Icon
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";

// Sape Svg Import

import headerShape from '../../assets/header-shape.svg'

/// Import Link From React

import { Link } from 'react-router-dom';





export default function Ayuda() {
  return (

    <header>
       
    <div className="header-container">
      {/*...................Header swiper Slider................*/}
      <Swiper
      spaceBetween={50}
      slidesPerView={1}
      >
        {
          headerBooks2.map(({title, info, img, btnLink}, index)=>{
            return(
              <SwiperSlide key={index}>
                <div className="header-wrapper container">
                  {/*...................Header Left................*/}
                  <div className="header-left">
                    <h1>{title}</h1>   
                    <p dangerouslySetInnerHTML={{__html:info}}></p>
                    <Link className='btn btn-border2' to={btnLink}>Ayuda</Link>
                  </div>
                  {/*...................Header Right................*/}
                  <div className="header-right">
                    <img src={img} alt=''></img>
                  </div>
                </div>
              </SwiperSlide>
            )
          })
        }
       
      </Swiper>

           {/*...................Header Shape................*/}
           <div className="header-shape">
             <img src={headerShape} alt=''/>  
           </div>
          
    </div>
  </header>
  )
}
