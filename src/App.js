import React, { Component } from "react"
import "./App.css"

import Header from "./components/header/Header"
import Imagecrousal from "./components/hero/Imagecrousal"
import Features from "./components/features/Features"
import Latestcars from "./components/latestcars/Latestcars"
import Subscribe from "./components/subscribe/Subscribe"
import Footer from "./components/footer/Footer"
import { data } from "./assets/data/data"

class App extends Component {
  state = {
    cars: []
  }
  componentDidMount() {
    this.setState({ cars: data })
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Imagecrousal />
        <Features />
        <Latestcars />
        <Subscribe />
        <Footer />
      </div>
    )
  }
}

export default App
