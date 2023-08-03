import React, { useContext } from 'react';
import './card.css'
import { themeContext } from '../../Context';

function Card(props) {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div>
      <div className="card">
        <img src={props.img} />
        <span>
          {props.heading}</span>
        <span style={{color: darkMode ? 'white' : ''}}>{props.detail}</span>
        <a href="#"><button >Learn more</button></a>
      </div>
    </div>
  )
}

export default Card