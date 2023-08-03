import React from 'react';
import './footer.css'
import wave from '../../img/wave.png'
import fb from '../../img/fb.png'
import whatsapp from '../../img/whatsapp.png'
import insta from '../../img/insta.png'



const Footer = () => {
  return (
    <div className="footer" style={{ with: '100%' }}>
      <img src={wave} style={{ width: '100%' }} />
      <div className="footer-content">
        <span><a type='email' href="">All Right Reserved. <br />Develope by<a className='hearth' type='tel' href="03037828419">💖</a>Ali</a></span>
        <div className="f-icons">
          <a href=""><img src={fb} alt="" /></a>
          <a href="">
            <img src={whatsapp} alt="" />
          </a>
          <a href="">
            <img src={insta} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer