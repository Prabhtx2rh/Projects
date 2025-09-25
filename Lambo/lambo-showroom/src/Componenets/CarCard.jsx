import React from 'react'
import {motion} from 'framer-motion'
function CarCard({car, onOpen}){
return(
  <motion.article
  className='card'
  whileHover={{scale: 1.02}}
  initial={{y:30, opacity: 0}}
  whileInView={{y: 0, opacity: 1}}
  viewport={{once: true, amount: 0.2}}
  transition={{duration: 0.6}}
  >
    <div className='card__imgwirap' onClick={()=> onOpen(car)}>
      <motion.img
      src={car.img}
      alt={car.name}
      className="card__img"
      whileHover={{scale: 1.08}}
      transition={{duration: 0.5}}
      />
    </div>
    <div className='card__body'>
      <h3>{car.name}</h3>
      <p className='muted'>{car.price}</p>
      <div className='specs'>
        <span>{car.hp}</span>
        <span>{car.topSpeed}</span>
      </div>
      <button className='btn--small' onClick={()=> onOpen(car)}>view</button>
    </div>
  </motion.article>
)
}

export default CarCard;