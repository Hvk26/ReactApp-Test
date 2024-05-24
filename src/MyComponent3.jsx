import React, {useState} from "react";

function MyComponent3(){

    const [car, setCar] = useState({year: 2024, make: "Audi", model: "Q3"})

    const changeMake = ()=>{
        setCar(c=> ({...c, make: event.target.value}));
    }

    const changeModel = ()=>{
        setCar(c=> ({...c, model: event.target.value}));
    }

    return(
        <>
            <input type="text" value={car.make} onChange={changeMake} />
            <input type="text" value={car.model} onChange={changeModel} />
            <div>Your favorite car is: {car.make} {car.model} {car.year}</div>
        </>
        
    );
}

export default MyComponent3