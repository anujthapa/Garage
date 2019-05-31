import React from "react"
import logo from "../../assets/images/collectionlogo1.png"
import "./footer.scss"
const Footernav = () => {
  return (
    <div className="footer-nav">
      <div className="footer-logo">
        <img src={logo} alt={logo} />
      </div>
      <div className="footer-navigation">
        <ul>
          <li>ABOUT US</li>
          <li>CATEGORIES</li>
          <li>PREORDERS</li>
          <li>CONTACT US</li>
          <li>RECIVE OU NEWSLETTER</li>
        </ul>
      </div>
    </div>
  )
}
export default Footernav
