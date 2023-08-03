import React from 'react';
import c1 from '../../img/profile1.jpg'
import c2 from '../../img/profile2.jpg'
import c3 from '../../img/profile3.jpg'
import c4 from '../../img/profile4.jpg'
import c5 from '../../img/profile5.jpg'
import c6 from '../../img/profile6.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,EffectFade} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import   './testimonial.css'

const Testimonial = () => {
   const clients = [
      {
         img: c1,
         review: `Lorem ipsm incidunt voluptates magnam vero nesciunt ducimus dignissimos sed.
         x Ducimus officiis dolorum quod blanditiis architecto eligendi sapiente reiciendis totam!`
      },
      {
         img: c2,
         review: `Lorem ipsm incidunt voluptates magnam vero nesciunt ducimus dignissimos sed.
         x Ducimus officiis dolorum quod blanditiis architecto eligendi sapiente reiciendis totam!`
      },
      {
         img: c3,
         review: `Lorem ipsm incidunt voluptates magnam vero nesciunt ducimus dignissimos sed.
         x Ducimus officiis dolorum quod blanditiis architecto eligendi sapiente reiciendis totam!`
      },
      {
         img: c4,
         review: `Lorem ipsm incidunt voluptates magnam vero nesciunt ducimus dignissimos sed.
         x Ducimus officiis dolorum quod blanditiis architecto eligendi sapiente reiciendis totam!`
      },
      {
         img: c5,
         review: `Lorem ipsm incidunt voluptates magnam vero nesciunt ducimus dignissimos sed.
         x Ducimus officiis dolorum quod blanditiis architecto eligendi sapiente reiciendis totam!`
      },
      {
         img: c6,
         review: `Lorem ipsm incidunt voluptates magnam vero nesciunt ducimus dignissimos sed.
         x Ducimus officiis dolorum quod blanditiis architecto eligendi sapiente reiciendis totam!`
      }
   ]
   return (
      <div className='t-wrapper' id='testimonial'>
         <div className="t-heading">
            <span>Clients always get</span>
            <span>Exceptional Work </span>
            <span>from me...</span>
            <div className="i-blur t-blur1" style={{background:'skyblue'}}></div>
            <div className="i-blur t-blur2" style={{background:'var(--purple)'}}></div>
         </div>

         <Swiper

            slidesPerView={1}
            modules={[Pagination]}
            pagination={{ clickable: true }}           
         >
            {clients.map((ele, index) => {
               return (
                  <SwiperSlide key={index}>
                     <div className="testimonial">
                     <img src={ele.img} alt="" />
                     <span>{ele.review}</span>
                     </div>
                  </SwiperSlide>
               )
            })}
         </Swiper>
      </div>
   )
}

export default Testimonial