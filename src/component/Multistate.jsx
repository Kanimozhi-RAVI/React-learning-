import React from 'react'
import { useState } from 'react'

function Multistate() {
    const [color ,setColor] = useState("Red");
    const [brand ,setBrand] = useState("Pept");
    const [price ,setPrice] = useState("20000");
    const [Year ,setYear] = useState("2025");

  return (
    <div>
      <h1> MyCar Details</h1>
      <p> Car color :{color} </p>
      <p> Car Brand : {brand}</p>
      <p> Car Price : {price} </p>
      <p> Car Year :{Year} </p>
    </div>
  )
}

export default Multistate
