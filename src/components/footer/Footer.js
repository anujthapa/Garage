import React from "react"
import Footernav from "./Footernav"
import Footersocial from "./Footersocial"
import Footerinfo from "./Footerinfo"
import "./footer.scss"
const Footer = () => {
  return (
    <div className="footer">
      <Footernav />
      <Footersocial />
      <Footerinfo />
    </div>
  )
}
export default Footer
