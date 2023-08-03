import React, { useContext } from 'react';
import './Navbar.css';
import logo from '../../img/logo.png'
import Toggle from '../togglebtn/Toggle';
import { Link } from 'react-scroll';
import { themeContext } from '../../Context';

function Navbar() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="n-wrapper" id='navbar'>
      <div className="n-left">
        <div className="n-logo"><img src={logo} alt="" /></div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
                   <Link 
                    spy={true} to='navbar' smooth={true}>
                   <li style={{color:darkMode?'white':''}}>Home</li>
                   </Link>
                   <Link 
                   spy={true} to='services' smooth={true}>
                    <li style={{color:darkMode?'white':''}}>Services</li>
                   </Link>
                   <Link spy={true} to='work' smooth={true}>
                    <li style={{color:darkMode?'white':''}}>Works</li>
                   </Link>
                   <Link spy={true} to='portfolio' smooth={true}>
                    <li style={{color:darkMode?'white':''}}>Portfolio</li>
                   </Link>
                   <Link spy={true} to='testimonial' smooth={true}>
                    <li style={{color:darkMode?'white':''}}>testimonials</li>
                   </Link>

                </ul>
      </div>
      <button className="button n-contact n-button">Contact us</button>
    </div>
    </div >
  )
}

export default Navbar