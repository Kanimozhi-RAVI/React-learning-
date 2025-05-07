import React from 'react'
import { useState } from 'react'

function Listupdate() {
const [list, setList] = useState([]);
const [count ,setCount] = useState(1);


function addItem(){
    const myItem = 'Item' + count;
    setList((previousState) => { return [ ...previousState, myItem]});
    setCount((previousState) => { return previousState +1})
};

  return (
    <>
        <h1>MYupdated LIST</h1>
        <button onClick={addItem}>ADD Item</button>
      <ul>{

          list.map ((e,index) => <li key={index}> {e}</li>)
        }
        
      </ul>
    </>
  )
}

export default Listupdate;
 
