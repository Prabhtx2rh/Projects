import React from "react";
import {motion, AnimatePresence} from 'framer-motion'

function CarModel({open, car, onClose}){
  return(
    <AnimatePresence>
      {open && car && (
        <motion.div
        className="modal__backdrop"
        initial={{opacity: 0}}
        animate={{opacity:1}}
        exit={{opacity: 0}}
        >
          <motion.div
          className="modal"
          initial={{y:40, opacity: 0, scale: 0.98}}
          animate={{y:0, opacity: 1, scale: 1}}
          exit={{y:40, opacity: 0, scale: 0.98}}
          transition={{duration: 0.25}}
          >
            <button className="modal__close" onClick={onClose}>X</button>
            <div className="modal__content">
              <img src={car.img} alt={car.name} className="modal__img" />
              <div className="modal__info">
                <h3>{car.name}</h3>
                <p className="muted">{car.price}</p>
                <ul className="spec-list">
                  <li><strong>Horsepower:</strong>{car.hp}</li>
                  <li><strong>Top speed:</strong>{car.topSpeed}</li>
                  <li><strong>Engine:</strong>Twin Turbo v6</li>
                </ul>
                <button className="btn">Contact Dealer</button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CarModel;