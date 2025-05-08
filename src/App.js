import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Log from './component/Log';
import Msg from './component/Msg';
import Arrow from './component/Arrow';
import War from './component/Func';
import Car from './component/Car';
import Property from './component/Property';
import Classcomponent from './component/Classcomponent';
import Condition from './component/Condition';
import List from './component/List';
import Headercss from './component/Headercss';
import Mystate from './component/Mystate';
import ComponentClass from './component/ComponentClass';
import Multistate from './component/Multistate';
import Objectstate from './component/Objectstate';
import Listupdate from './component/Listupdate';
import Useeffect from './component/Useeffect';
import Myform from './component/Myform';

function App() {
  return (
  
    <BrowserRouter> 
    <Routes>
      <Route path='/log' element={<Log/>}/>
      <Route path='/message' element ={<Msg/>}/>
      <Route path='/arrows' element={<Arrow/>}/>
      <Route path='/func' element= {<War/>} />
      <Route path='/car' element={<Car/>}/>
      <Route path='/property' element ={<Property/>}/>
      <Route path='/classcmpt' element={<Classcomponent/>}/>
      <Route path='/condition' element={<Condition/>}/>
      <Route path='/list' element={<List/>}/>
      <Route path='/css' element={<Headercss/>}/>
      <Route path='/mystate' element = {<Mystate/>}/>
      <Route path='/myclass' element = {<ComponentClass/>}/>
      <Route path='/multistate' element = {<Multistate/>}/>
      <Route path='/objectstate' element = {<Objectstate/>}/>
      <Route path='/listupdate' element = {<Listupdate/>}/>
      <Route path='/useeffect' element = {<Useeffect/>}/>
      <Route path='/myform' element = {<Myform/>}/>
      
    </Routes>
    </BrowserRouter>

    
  );
}

export default App;






