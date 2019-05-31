import React from "react"

function Feature({ img, text }) {
  return (
    <div className="feature">
      <div className="feature-img">
        <img src={img} alt="img" />
      </div>
      <div className="feature-desc">
        <div className="content">
          <h3>LOREM IPSUM</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus unde ex nobis minus eaque facere!
          </p>
          <h3>Price €</h3>
          <button className="button">READ MORE</button>
        </div>
      </div>
    </div>
  )
}
export default Feature
