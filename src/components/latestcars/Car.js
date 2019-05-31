import React from "react"

const Car = ({ car }) => {
  return (
    <div className="cars">
      <img src={car.car} alt={car} />
      <div className="car-info">
        <h2>{car.name}</h2>
        <p> {car.desc}</p>
        <h3>{car.price}</h3>
        <div>
          <button>SEE MORE</button>
        </div>
      </div>
    </div>
  )
}
export default Car
