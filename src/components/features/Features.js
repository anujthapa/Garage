import React from "react"
import Feature from "./Feature"
import "./feature.scss"
import car1 from "../../assets/images/car1.jpg"
import car2 from "../../assets/images/car2.jpg"
import Heading from "../common/Heading"
const Features = () => {
  return (
    <div className="features">
      <div className="features-heading">
        <Heading heading="F E A T U R E S C A R S" />
      </div>
      <div className="features-cars">
        <Feature img={car1} />
        <Feature img={car2} />
      </div>
    </div>
  )
}
export default Features
