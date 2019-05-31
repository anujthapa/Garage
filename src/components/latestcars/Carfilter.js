import React from "react"

const Carfilter = ({
  AtoZ,
  sortCarExpensive,
  sortCarCheap,
  sortCarNew,
  sortCarOld
}) => {
  return (
    <div className="car-filter">
      <button onClick={sortCarNew}>Newcar</button>
      <button onClick={sortCarOld}>OldCar</button>
      <button onClick={sortCarExpensive}>Expensive</button>
      <button onClick={sortCarCheap}>Cheap</button>
      <button onClick={AtoZ}>A-Z</button>
    </div>
  )
}
export default Carfilter
