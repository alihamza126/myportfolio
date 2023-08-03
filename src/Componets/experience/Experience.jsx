import React, { useContext } from 'react';
import './experience.css'
import { themeContext } from '../../Context';

function Experience() {

    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
        <div className="experience" id="experience">
                <div className="achievment">
                    <div className="a-circule" style={{color: darkMode ? 'black' : ''}}>4+</div>
                    <span>years</span>
                    <span>Experience</span>
                </div>
                <div className="achievment">
                    <div className="a-circule" style={{color: darkMode ? 'black' : ''}}>15+</div>
                    <span>Projects</span>
                    <span>Completed</span>
                </div>
                <div className="achievment">  <div className="a-circule" style={{color: darkMode ? 'black' : ''}}>5+</div>
                    <span>Professional</span>
                    <span>Certificates</span>
                </div>
        </div>
  )
}

export default Experience