import '../components/Navbar.css'
import { useState,useEffect } from 'react';
import {Link} from 'react-router-dom'
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import Image from '../assets/logo_img.png';
function Navbar() {
  const [isDarkMode, setDarkMode] = useState(true);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
    console.log(checked)
  };
  useEffect(() => {
  //   if(isDarkMode)
  //   {
  //     navbar.add
  //  navbar.backgroundColor ='black';
  //  }
  //  else{
  //   navbar.backgroundColor='white';
  //  }
  
  }, [isDarkMode])
  
  return (
    <div className={`navbar ${isDarkMode ? "" : "darkmode"}`}>
    <div className="logo">
        <img src={Image} alt='This is a Component'></img>
    </div>
    <ul className="list">
        <li><Link to='/' aria-current="page" id='home' >Home</Link></li>
        <li><Link to='/about' id='about' >About</Link></li>
    </ul>
    <div className="dark">
    <DarkModeSwitch
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={40}
    />
    </div>
    </div>
  )
}

export default Navbar