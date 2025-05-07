import React from 'react'
import { useState } from 'react'

function Objectstate() {

    const [car , setCar] = useState({
        color :"Red",
        brand: "Pept",
        price : "20000",
        year: "2025"
    });

    function myColor () {
       setCar(previousState => {
        return {...previousState , color:"Bluee"}
       })
    };
    // console.log('Mycarvalues' , myColor) 
  return (
    <div>
        <h1> MyCar Details With object State method</h1>
      <p> Car color :{car.color} </p>
      <p> Car Brand : {car.brand}</p>
      <p> Car Price : {car.price} </p>
      <p> Car Year :{car.year} </p>
      <button onClick={ myColor }>Change my car color</button>
    </div>
  )
}

export default Objectstate
