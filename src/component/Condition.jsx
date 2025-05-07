import React from 'react'

function Condition() {
    const door = false;
  return (
    <div>
      {door? <p> Door Is  open</p> :<p>Door Is  close</p>}
    </div>
  )
}

export default Condition
