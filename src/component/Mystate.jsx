import React from 'react'
import { useState } from 'react';
import ComponentClass from './ComponentClass';

function Mystate() {
  // const color = 'Red';
  const [color , setColor] = useState('Red')

  return (
    <div>
      <h1>My favourite color  is  and functional class{color}</h1>
      <button onClick={()=>{setColor('Blue') }}>Chnage my color!</button>
      <ComponentClass/>
    </div>
  )
}

export default Mystate
