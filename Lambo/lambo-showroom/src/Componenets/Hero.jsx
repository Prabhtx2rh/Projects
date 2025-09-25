import React from "react"
import { motion } from "framer-motion"

function Hero({onExplore}){

  return(
    <section id="home" className="hero">
      <div className="'hero__bg" />
      <div className="container hero__inner">
        <motion.h1
        initial={{y: 40, opacity: 0}}
        animate={{y:0, opacity:1}}
        transition={{duration: 0.8}}
        className="hero__title"
        >
          Find your Dream Car
        </motion.h1>

        <motion.p 
        initial={{y: 20, opacity: 0}}
        animate={{y:0, opacity:1}}
        transition={{delay: 0.15, duration: 0.6}}
        >
          Premium Cars - showcase, explore, and connect with the dealer
        </motion.p>

        <motion.button
        whileHover={{scale: 1.05}}
        whileTap={{scale: 0.98}}
        className="btn"
        onClick={onExplore}
        >
          Explore Car
        </motion.button>
      </div>
    </section>
  )
}

export default Hero; 