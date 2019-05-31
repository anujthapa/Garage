import React, { Component } from "react"
import image from "../../assets/images/oldcar.jpg"
import image2 from "../../assets/images/porche.jpg"
import image3 from "../../assets/images/car9.jpg"
import Searchfield from "./Searchfield"
import { data } from "../../assets/data/data"

import "./imagecrousal.scss"
class Imagecrousal extends Component {
  state = {
    cars: [
      { car: image },
      { car: image2 },
      { car: image3 },
      { car: image },
      { car: image2 }
    ],
    id: 0
  }

  render() {
    return (
      <div className="Imagecrousal">
        <div id="slider">
          <figure>
            {this.state.cars.map(item => (
              <img src={item.car} alt={item.name} />
            ))}
          </figure>
        </div>
        <Searchfield />
      </div>
    )
  }
}
export default Imagecrousal
