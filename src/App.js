import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import Msg from './component/Msg';
// import War from './component/War';
import Arrow from './component/Arrow';




function App() {
  return (
  
    <BrowserRouter> 
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/message' element ={<Msg/>}/>
      {/* <Route path='/class' element= {<War/>}/> */}
      <Route path='/arrow' element= {<Arrow/>}/>
    </Routes>
    </BrowserRouter>

    
  );
}

export default App;






