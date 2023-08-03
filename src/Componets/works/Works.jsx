import React, { useContext } from 'react';
import './work.css';
import facebook from '../../img/Facebook.png';
import upwork from '../../img/Upwork.png';
import fiverr from '../../img/fiverr.png';
import amazon from '../../img/amazon.png';
import instagram from '../../img/instagram.png';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';

const Works = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const trans = { duration: 1, type: 'spring' }
    return (
        <div className="works" id='work'>
            <div className="s-left w-left">
                <div className="s-intro w-intro">
                    <span style={{ color: darkMode ? 'white' : '' }}>Work for All these</span>
                    <span>Branding & Clients</span>
                    <span>
                        Web App with leatest Techonology like React, Angular, Node js <br />
                        Wordpress development  <br />Seo Blogging
                    </span>
                    <a href="https://www.fiverr.com/hamza_126" target='_blank'>
                        <button className='button s-button'>Hire Me</button>
                    </a>
                </div>
                <div className="w-blur" style={{ background: '' }}></div>

            </div>
            <div className="s-right right-works">
                <motion.div 
                    initial={{rotate:'90deg'}}
                    whileInView={{rotate:'0deg'}}
                    transition={{duration:3.5 ,type:'spring'}}
                    viewport={{margin:'-40px'}}
                className="w-maincircule">
                    <div className="w-scircule">
                        <img src={facebook} alt="" />
                    </div>
                    <div className="w-scircule">
                        <img src={fiverr} alt="" />
                    </div>
                    <div className="w-scircule">
                        <img src={instagram} alt="" />
                    </div>
                    <div className="w-scircule">
                        <img src={upwork} alt="" />
                    </div>
                    <div className="w-scircule">
                        <img src={amazon} alt="" />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Works