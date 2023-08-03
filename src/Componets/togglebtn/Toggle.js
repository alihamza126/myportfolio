import React, { useContext } from 'react';
import './toggle.css';
import moon from '../../img/moon.ico'
import sun from '../../img/sun.png'
import { themeContext} from '../../Context';



const Toggle = () => {
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;

    const handleclick=()=>{
        theme.dispatch({type:'toggle'});
}
  return (
    <div className="toggle" onClick={handleclick}>
        <img src={moon} alt="" />
        <img src={sun} alt="" />

        <div className="btn" 
        style={darkMode?{left:'2px'}:{right:'2px'}}
        ></div>
    </div>
  )
}

export default Toggle