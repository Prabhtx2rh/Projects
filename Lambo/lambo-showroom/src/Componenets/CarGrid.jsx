import React from "react"
import CarCard from "./CarCard"
function CarGrid({cars, onOpen}){
return(
  <section id="cars" className="cars">
    <div className="container">
      <h2 className="section__title">Featured Cars</h2>
      <div className="grid">{cars.map(car=>(<CarCard key={car.id} car = {car} onOpen={onOpen} />))}</div>
    </div>
  </section>
)
}

export default CarGrid