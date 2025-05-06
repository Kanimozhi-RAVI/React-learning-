
function Car (props){
    //  const {carInfo} = props;
    //  const { brand , color} = carInfo;
    
    const text = `I am a ${props.carInfo.brand}  Car. My car is very nice.`;
    return(
        <>
        <h2> {text}</h2>
        </>
    )
};

export default Car;