import React from 'react';
import './floatingdiv.css'

function FloatingDiv(props) {
  return (
    <div className="floatingdiv">
            <img src={props.img1} alt="" />
        <span>
            {props.text1}
            <br />
            {props.text2}
        </span>
    </div>
  )
}

export default FloatingDiv