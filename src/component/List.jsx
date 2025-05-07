import React from 'react'
import Car from './Car';

function List() {
    const carList = [
        { brand: 'Ford', color:'Black'},
        {brand: 'Fraricca', color:"Red"},
        {brand: 'Tata', color :'DarkRed'}

    ];
    const numList = [
        1,2,3,4,5,6
    ];
  return (
    <>
      
      <ul> { carList.map((carInfo) => 
        <li key={carInfo.brand}><Car carInfo = {carInfo}/> </li> )}
       
    </ul> 
    <ul>
        {numList.map((e, index)=> <li key={index}>{e}</li>)}  
    </ul>
       </>
  )
}

export default List
