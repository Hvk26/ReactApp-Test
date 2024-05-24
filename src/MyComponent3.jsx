import React, {useState} from "react";

function MyComponent3(){

    const [car, setCar] = useState({year: 2024, make: "Audi", model: "Q3", edition: "limited"})

    const changeMake = ()=>{
        setCar(c=> ({...c, make: event.target.value}));
    }

    const changeModel = ()=>{
        setCar(c=> ({...c, model: event.target.value}));
    }

    const changeYear = ()=>{
        setCar(c=> ({...c, year: event.target.value}));
    }

    const changeEdition = ()=>{
        setCar(c=> ({...c, edition: event.target.value}));
    }



    return(
        <>
            <input type="text" value={car.make} onChange={changeMake} />
            <input type="text" value={car.model} onChange={changeModel} />
            <input type="number" value={car.year} onChange={changeYear} />
            <input type="text" value={car.edition} onChange={changeEdition} />
            <div>Your favorite car is: {car.make} {car.model} {car.year} {car.edition} edition</div>
        </>
        
    );
}

export default MyComponent3