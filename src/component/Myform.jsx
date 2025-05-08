import React from 'react'
import { useState } from 'react'

function Myform() {
    // const [name, setName] = useState("");
    // const [age, setAge] = useState("");
    // const [email, setEmail] = useState("");

    // // console.log("Current state" , name);
    const [input , setInput] = useState({phone:"+91", email:"@gmail.com", country:"India", about: "Enter your Text..."});


    function handleSubmit(e){
        e.preventDefault();
        console.log("Form submitted");
        // console.log("Current state" , name,age , email);
        console.log("Current state" , input);
    }


    function hanleChange(e){
        const name = e.target.name;
        const value = e.target.value;
        setInput((previousState) => { return{ ...previousState, [name]:value} })
    }
  return (
    <div>
      <form onSubmit={handleSubmit} >
        <label>
         Enter Your Name:   <input  type='text'  name="name" onChange={hanleChange}  /> </label><br/>
         <label> Enter Your Age:   <input  type='text' name="age"  onChange={hanleChange}/></label><br/>
         <label> Enter Your Email:   <input  type='text' name="email" onChange={hanleChange} value={input.email}/></label><br/>
         <label> Enter Your Phone:   <input  type='text' name="phone" onChange={hanleChange} value={input.phone}/></label><br/>
         <label> Enter Your Country:   <select name="country" onChange={hanleChange} value={input.country}>
         <option>Select</option>
            <option value="Australia">Australia</option>
            <option value="India">India</option>
            <option value="United Kingdom">United Kingdom</option>
            </select></label><br/><br/>
            <label> Enter Your Text : <textarea value={input.about} name="about" onChange={hanleChange} ></textarea></label><br/>
            

         <input type='submit' value="submit form" />
      </form>
    </div>
  )
}

export default Myform
