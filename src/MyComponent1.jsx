import React, {useState, useEffect} from 'react';

function MyComponent1(){

    const[count, setCount] = useState(0);


    useEffect(function changeTitle(){
        document.getElementById('siteName').innerText = `Count: ${count}`
    }, [count]);

    const addCount =()=>{
        setCount(count +1 );
    }
    const substractCount =()=>{
        setCount(count -1 );
    }

    return(<div>

        <p>count: {count}</p>
        <button onClick={addCount}>add</button>
        <button onClick={substractCount}>substract</button>

       
    </div>);

}
export default MyComponent1