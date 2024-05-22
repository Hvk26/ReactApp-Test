import React, {useState, useEffect} from 'react';

function MyComponent1(){

    const[count, setCount] = useState(0);
    const[color, setColor] = useState();



    useEffect(function changeTitle(){
        document.getElementById('siteName').innerText = `Count: ${count} ${color}`
    }, [count,color]);

    const addCount =()=>{
        setCount(c=> c +1 );
    }
    const substractCount =()=>{
        setCount(c=> c -1 );
    }
    const changeColor =()=>{
        setColor(c=> c=== "green" ? "red": "green");
    }

    return(<div>
        <p style={{color: color}}>count: {count}</p>
        <button onClick={addCount}>add</button>
        <button onClick={substractCount}>substract</button>
        <button onClick ={changeColor}>Change color</button>      
    </div>);

}
export default MyComponent1