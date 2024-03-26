import React, { useEffect } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import SwiperCore from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Asegúrate de importar el módulo de autoplay
import TitleTypeOne from '../../Ui/TitleTypeOne/TitleTypeOne'

import co1  from '../../assets/img/Colectas/co1.jpg'
import co2  from '../../assets/img/Colectas/co2.jpg'
import co3  from '../../assets/img/Colectas/co3.jpg'
import co4  from '../../assets/img/Colectas/co4.png'

// Inicializamos los módulos necesarios para Swiper
SwiperCore.use([Autoplay, Navigation, Pagination]);

const SwiperDemo = () => {
  useEffect(() => {
    // No necesitamos inicializar Swiper aquí porque Swiper de React se encarga de esto por nosotros
  }, []);

  return (
     <section className='Featured'  style={{marginTop:"90px", marginBottom:"-100px"}}>
     <div className="container featurers-book-cotnainer">
         {/*....................Title Props............... */}
         <TitleTypeOne TitleTop={'CADA GRANITO DE AYUDA CUENTA FALTAS TU!!'} Title={'Colectas'}/>
         {/*....................Swiper............... */}
         
        <br />
        
        <br />
         <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }} // Configuración del autoplay
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <img src={co1} alt="" style={{ height: "400px", width: "1500px"}} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={co2} alt="" style={{ height: "400px", width: "1500px" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={co3} alt=""  style={{ height: "400px", width: "1500px" }}/>
      </SwiperSlide>
    
    
    </Swiper>
     </div>
 </section>
  );
};

export default SwiperDemo;
