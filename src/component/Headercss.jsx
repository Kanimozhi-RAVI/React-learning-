import React from 'react'
import List from './List'
import './Header.css';
import styles from './Header.module.css';

function Headercss() {
    const mystyle = {
        color:"red",
        backgroundColor:"gray",
        padding :"10px"
    }
  return (
    <div>
      <h1 style={mystyle}>Hello CSS</h1>
      <h2 className={styles.myColor}>Heloo css styling!</h2>
      <List/>
    </div>
  )
}

export default Headercss
