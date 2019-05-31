import React, { Component } from "react"

class Searchfield extends Component {
  render() {
    return (
      <div className="searchfield">
        <div className="searchfield-text">
          <h1>BUY YOUR DREAM CAR</h1>
        </div>

        <input type="text" placeholder="Enter Keyword" />
        <select name="Catagories">
          <option value="epic">Epic</option>
          <option value="old">Old</option>
          <option value="new">New</option>
        </select>
        <select name="Min Year">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <select name="max Year">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <div className="pricerange">
          <label>Please select your range</label>
          <input type="range" min="1" max="100" value="10" />
        </div>
      </div>
    )
  }
}
export default Searchfield
