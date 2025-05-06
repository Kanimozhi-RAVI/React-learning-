import Car from "./Car";
import Classcomponent from "./Classcomponent";

function Property() {

 const carInfo = {brand:'Ford' , color: 'Red'};
 const phone = { type :"Apple", Price : '50000'};

    
    return (
      <>
          <h1>Who lives in my garage?</h1>
        <Car carInfo = {carInfo} />
        <Classcomponent  phone={phone}/>
      </>
    );
  };
  
  export default Property;
  