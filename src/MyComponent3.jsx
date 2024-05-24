import React, {useState} from "react";

function MyComponent3(){

    const [car, setCar] = useState({year: 2024, make: "Audi", model: "Q3"})

    return(
        <div>Your favorite car is: {car.make} {car.model} {car.year}</div>
    );
}

export default MyComponent3