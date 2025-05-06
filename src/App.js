import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Log from './component/Log';
import Msg from './component/Msg';
import Arrow from './component/Arrow';
import War from './component/Func';
import Car from './component/Car';
import Property from './component/Property';
import Classcomponent from './component/Classcomponent';

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
    </Routes>
    </BrowserRouter>

    
  );
}

export default App;






