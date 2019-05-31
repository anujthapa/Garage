import React, { Component } from "react"
import img from "../../assets/images/border.png"
import "./subscribe.scss"

class Subscribe extends Component {
  render() {
    return (
      <div className="subscribe">
        <div className="newsletter-border">
          <img src={img} alt={img} />
        </div>
        <div className="newsletter-section">
          <h1>NEWSLETTER</h1>
          <p>
            Subscribe to the COLLECTIONCARS mailing list to receive updates on
            new arrivals, special offers and other discount information.
          </p>
        </div>
        <div className="subscribe-section">
          <input type="text" placeholder="EMAIL" />
          <button>SUBSCRIBE</button>
        </div>
      </div>
    )
  }
}
export default Subscribe
