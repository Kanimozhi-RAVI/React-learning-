import React, { useState } from 'react'
import { useEffect } from 'react'

function Useeffect() {
const [count ,setCount] = useState(0);

useEffect (()=>{
    console.log('Myscreen Reender')
    // checkCount();
    setCount(1)
},[]);


function updateCount (){
    setCount((previous) => { return  previous +1});
};
// function checkCount(){
//   if(count > 10){
//     setCount(1)
//   }
// }

  return (
    <div>
      <h1>
        My SCREEN IS HOW MANY TIMES {count} RENDERED!
      </h1>
      <button onClick={updateCount}> click mee!</button>
    </div>
  )
}

export default Useeffect
