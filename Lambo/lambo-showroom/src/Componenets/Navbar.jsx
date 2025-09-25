import React, {useEffect, useState} from "react";
import {motion} from 'framer-motion';

export default function Navbar(){
  const[scrolled, setScrolled] = useState(false);
  useEffect(()=>{
 const onScroll = () => setScrolled(window.scrollY> 50);
 window.addEventListener('scroll', onScroll);
 return()=> window.removeEventListener('scroll', onScroll)
  },[])

  return(
    <motion.nav
    initial={{y: -20}}
    animate={{y: 0}}
    transition={{type: 'spring', stiffness: 120, damping: 18}}
    className= {`nav ${scrolled ? "nav--scrolled": ""}`}
    >
      <div className="container nav__inner">
        <div className="logo">CarShow</div>
        <ul className="menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#cars">Cars</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </motion.nav>
  )
}