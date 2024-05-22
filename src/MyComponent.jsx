import React, {useState} from 'react';

function MyComponent(){
    
    // declaring different states
    const [name, nameChange] = useState("Guest");


    // declaring different function
    const nameHandler = ()=>{
        nameChange(event.target.value);
    }

    return(<div>
       <input type="text" value={name} onChange={nameHandler}/>
       <p>Name: {name}</p>
    </div>);

}
export default MyComponent