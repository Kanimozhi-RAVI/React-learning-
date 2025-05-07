import Car from "./Car";
import Classcomponent from "./Classcomponent";

function Property() {

 const carInfo = {brand:'Ford' , color: 'Red'};
// const carInfo = {};
 const phone = { type :"Apple", Price : '50000'};
 const showcarInfo = carInfo.brand !== undefined && carInfo.color !== undefined ;

    
    return (
      <>
          <h1>Who lives in my garage?</h1>
         { showcarInfo ? <Car carInfo = {carInfo} /> : null }
        <Classcomponent  phone={phone}/>
        <Car carInfo = {carInfo} /> 
      
      </>
    );
  };
  
  export default Property;
  