import React, {useState, useEffect} from 'react';

function MyComponent1(){

    // const[count, setCount] = useState(0);
    // const[color, setColor] = useState();
       const[height, setHeight] = useState(window.innerHeight);
       const[width, setWidth] = useState(window.innerWidth);


    // useEffect(function changeTitle(){
    //     document.getElementById('siteName').innerText = `Count: ${count} ${color}`
    // }, [count,color]);
       useEffect(()=>{
        window.addEventListener("resize", sizeHandler);
        console.log("Listener added");

        return()=>{
            window.removeEventListener("resize", sizeHandler);
            console.log("Listener removed");
        }
       },[height, width])

    // const addCount =()=>{
    //     setCount(c=> c +1 );
    // }
    // const substractCount =()=>{
    //     setCount(c=> c -1 );
    // }
    // const changeColor =()=>{
    //     setColor(c=> c=== "green" ? "red": "green");
    // }
       const sizeHandler =()=>{
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
       }

    return(<div>
        {/* <p style={{color: color}}>count: {count}</p>
        <button onClick={addCount}>add</button>
        <button onClick={substractCount}>substract</button>
        <button onClick ={changeColor}>Change color</button>       */}
        <p>window height: {height}</p>
        <p>window width: {width}</p>

    </div>);

}
export default MyComponent1