import React, { useContext } from 'react'
import './services.css'
import FloatingDiv from '../floatingImage/FloatingDiv'
import Card from '../card/Card';
import glassemoji from '../../img/glasses.png';
import hearthemoji from '../../img/heartemoji.png';
import humbleemoji from '../../img/humble.png';
import resume from './resume.pdf'
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';


function Services() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const trans = { duration: 1, type: 'spring' }
  return (
    <div className="services" id='services'>
      <div className="s-left">
        <div className="s-intro">
          <span style={{
            color: darkMode ? 'white' : ''
          }}>My Awesome</span>
          <span>Services</span>
          <span style={{
            color: darkMode ? 'white' : ''
          }}>
            Web App with leatest Techonology like React, Angular, Node js <br />
            Wordpress development & Seo Blogging
          </span>
          <a href={resume} download={true}>
            <button className='button s-button'>Download Cv</button>
          </a>
        </div>
      </div>

      <div className="s-right">
        <motion.div
          initial={{ left: '30rem' }}
          whileInView={{ left: '14rem' }}
          transition={trans}
          viewport={{margin:'40%'}}
          style={{ left: '14rem' }}>
          <Card
            img={glassemoji}
            heading={"Web Developer"}
            detail={"Html,Css3, JavaScript,Bootstrap, React,NodeJS,mySql "}
          />
        </motion.div>

        <motion.div
          initial={{ left: '-9rem' }}
          whileInView={{ left: '-3rem' }}
          transition={trans}
          viewport={{margin:'40%'}}

          style={{ left: '-4rem', top: "12rem" }}>
          <Card
            img={humbleemoji}
            heading={"Wordpress Developer"}
            detail={"Custom Design,Blogging Design,Solve Issues"}
          />
        </motion.div>

        <motion.div
          initial={{ left: '30rem' }}
          whileInView={{ left: '15rem' }}
          transition={trans}
          viewport={{margin:'40%'}}
          style={{ left: '14rem', top: "19rem" }}>
          <Card
            img={hearthemoji}
            heading={"Wordpress Developer"}
            detail={"Custom Design,Blogging Design,Solve Issues"}
          />
        </motion.div>
        <div className="i-blur s-blur1" style={{ background: 'var(--purple)' }}></div>
        <div className="i-blur s-blur2" style={{ background: '#C1f5ff' }}></div>
      </div>
    </div>
  )
}

export default Services