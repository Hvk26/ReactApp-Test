import React, {useState} from 'react';

function MyComponent(){
    
    // declaring different states
    const [name, nameChange] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [payment, setPayment] = useState("");


    // declaring different function
    const nameHandler = ()=>{
        nameChange(event.target.value);
    }
    const paymentHandler = ()=>{
        setPayment(event.target.value);
    }
    const quantityHandler = ()=>{
        setQuantity(event.target.value);
    }

    return(<div>
       <input type="text" value={name} onChange={nameHandler}/>
       <p>Name: {name}</p>

       <input type="Number" value={quantity} onChange={quantityHandler}/>
       <p>Quantity: {quantity}</p>

       <select value = {payment} onChange={paymentHandler} >
        <option>Select an option</option>
        <option >Visa</option>
        <option >Mastercard</option>
        <option >UPI</option>
        <option >COD</option>
       </select>
       <p>Payment Method: {payment}</p>
    </div>);

}
export default MyComponent