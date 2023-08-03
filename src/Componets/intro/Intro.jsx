import React, { useContext } from 'react';
import './intro.css';
import github from '../../img/github.png';
import linkedin from '../../img/linkedin.png';
import instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import crown from '../../img/crown.png';
import thumbup from '../../img/thumbup.png';
import boy from '../../img/boy.png';
import glassmoji from '../../img/glassesimoji.png';
import FloatingDiv from '../floatingImage/FloatingDiv';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';


function Intro() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const trans = { duration: 2, type: 'spring' }
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span
                        style={{
                            color: darkMode ? 'white' : ''
                        }}
                    >Hy! I Am</span>
                    <span>Ali Hamza</span>
                    <span className='introtext'>Web Developer Highly Demanded Skills with Experience of 2 years,Producting Quality Work</span>
                </div>
                <button className="button i-button">Hire Me</button>
                <div className="i-icons">
                    <a target='_blank' href="https://github.com/alihamza126"><img src={github} alt="" /></a>
                    <a target='_blank' href="https://www.instagram.com/itx.hamza126/"><img src={instagram} alt="" /></a>
                    <a target='_blank' href="https://www.facebook.com/AliDeveloper126/"><img src={linkedin} alt="" /></a>
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <motion.img
                    initial={{ left: '-45%' }}
                    whileInView={{ left: '-23%' }}
                    transition={trans}
                    src={glassmoji} alt="" />
                <motion.div
                    className='crown'
                    initial={{ top: '-4%', left: '73%' }}
                    whileInView={{ left: '67%' }}
                    transition={trans}
                    style={{ top: '-4%', left: '68%' }}>
                    <FloatingDiv img1={crown} text1={"Web"} text2={"Developer"} />
                </motion.div>

                <motion.div
                    className='thumbup'
                    initial={{ top: '17rem', left: '18rem' }}
                    whileInView={{ left: '0rem' }}
                    transition={trans}
                    style={{ top: '18rem', left: '0rem' }}>
                    <FloatingDiv img1={thumbup} text1={"App"} text2={"Developer"} />
                </motion.div>

                {/* this is blur div */}
                <div className="i-blur" style={{ background: "rgba(238 210 255)" }}>
                </div>
                <div className="i-blur" style={{ background: "#C1f5ff", top: "17rem", left: "-9rem", height: "19rem", width: '19rem' }}></div>

            </div>
        </div>
    )
}

export default Intro    