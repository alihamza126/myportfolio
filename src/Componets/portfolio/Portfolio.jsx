import React, { useContext } from 'react';
import'./portfolio.css'
import { Swiper } from 'swiper/react';
import { SwiperSlide} from 'swiper/react';
import 'swiper/css'
import p1 from '../../img/ecommerce.png'
import p2 from '../../img/musicapp.png'
import p3 from '../../img/New folder/1.png'
import p4 from '../../img/New folder/2.png'
import p5 from '../../img/New folder/3.png'
import { themeContext } from '../../Context';

const Portfolio = () => {
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
  return (
      <div className="portfolio" id='portfolio'>
        <span  style={{color:darkMode?'white':''}}>Recents</span>
        <span>Projects</span>
        
        <Swiper 
        slidesPerView={(window.innerWidth<420)?2:3}
        spaceBetween={(window.innerWidth<420)?130:33}
        grabCursor={true}
        className='portfolio-slider'
        >
          <SwiperSlide>
            <img src={p1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={p2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={p3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={p4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={p5} alt="" />
          </SwiperSlide>
        </Swiper>
        <div className="i-blur p-blur" style={{background:'var(--orange)'}}></div>
      </div>
  )
}

export default Portfolio