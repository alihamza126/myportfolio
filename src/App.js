import logo from './logo.svg';
import './App.css';
import Navbar from './Componets/Navbar/Navbar';
import Intro from './Componets/intro/Intro';
import Services from './Componets/services/Services';
import Experience from './Componets/experience/Experience';
import Works from './Componets/works/Works';
import Portfolio from './Componets/portfolio/Portfolio';
import Contact from './Componets/contact/Contact';
import Footer from './Componets/footer/Footer';
import { themeContext } from './Context';
import { useContext } from 'react';
import Testimonial from './Componets/testimonial/Testimonial';
import Particles from 'react-particles';


function App() {
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
  return (
    <div className="app"
    style={{background:darkMode?'var(--bg)':'',
            color:darkMode?'white':''
    }}
    >
      <Navbar/> 
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
      <Portfolio/>
      <Testimonial/>
        <Contact/>
        <Footer/>

        <Particles>
          
        </Particles>
    </div>
  );
}

export default App;
