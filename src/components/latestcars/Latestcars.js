import React, { Component } from "react"
import Heading from "../common/Heading"
import "./latestcar.scss"
import Car from "./Car"
import Carfilter from "./Carfilter"
import { data } from "../../assets/data/data"
class Latestcars extends Component {
  state = {
    cars: [],
    newCars: []
  }
  componentDidMount() {
    this.setState({ cars: data })
  }
  sortCarByAZ = () => {
    const newCars = this.state.cars.sort((a, b) => {
      if (a.name < b.name) {
        return -1
      } else if (a.name > b.name) {
        return 1
      } else {
        return 0
      }
    })
    this.setState(() => {
      return { newCars }
    })
  }
  sortCarExpensive = () => {
    const newCars = this.state.cars.sort((a, b) => {
      if (a.price < b.price) {
        return -1
      } else if (a.price > b.price) {
        return 1
      } else {
        return 0
      }
    })
    this.setState(() => {
      return { newCars }
    })
  }
  sortCarCheap = () => {
    const newCars = this.state.cars.sort((a, b) => {
      if (a.price > b.price) {
        return -1
      } else if (a.price < b.price) {
        return 1
      } else {
        return 0
      }
    })
    this.setState(() => {
      return { newCars }
    })
  }
  sortCarOld = () => {
    const newCars = this.state.cars.sort((a, b) => {
      if (a.price > b.price) {
        return -1
      } else if (a.price < b.price) {
        return 1
      } else {
        return 0
      }
    })
    this.setState(() => {
      return { newCars }
    })
  }
  sortCarNew = () => {
    const newCars = this.state.cars.sort((a, b) => {
      if (a.price < b.price) {
        return -1
      } else if (a.price > b.price) {
        return 1
      } else {
        return 0
      }
    })
    this.setState(() => {
      return { newCars }
    })
  }
  render() {
    return (
      <div className="latest-cars">
        <Heading heading="LATEST CARS" />
        <Carfilter
          AtoZ={this.sortCarByAZ}
          sortCarExpensive={this.sortCarExpensive}
          sortCarCheap={this.sortCarCheap}
          sortCarNew={this.sortCarNew}
          sortCarOld={this.sortCarOld}
        />
        <div className="car">
          {console.log(this.state.newCars)}
          {this.state.newCars.length > 0
            ? this.state.newCars.map(item => <Car car={item} />)
            : this.state.cars.map(item => <Car car={item} />)}
        </div>
      </div>
    )
  }
}
export default Latestcars
