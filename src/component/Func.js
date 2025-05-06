import React from "react";
import Car from "./Car";


function Garage() {

  const brand = "Ford";
  
  return (
    <>
	    <h1>Who lives in my garage?</h1>
	    
      <Car brand={brand} color={'Red'} />
    </>
  );
}

export default Garage;