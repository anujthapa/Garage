import React, { Component } from "react"
import Headerinfo from "./Headerinfo"
import logo from "../../assets/images/logo1.png"
import "./header.scss"
class Header extends Component {
  render() {
    return (
      <div>
        <Headerinfo />
        <div className="header">
          <div className="header-logo">
            <img src={logo} />
          </div>
          <div className="header-navigation">
            <ul>
              <li>HOME</li>
              <li>CATEGORIES</li>
              <li>DEALERS</li>
              <li>CONTACT</li>
              <li>
                <button className="bottom">POST NEW CAR</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Header
