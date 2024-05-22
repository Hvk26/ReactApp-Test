import React, {useState} from 'react';

function MyComponent(){
    
    // declaring different states
    const [name, nameChange] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [payment, setPayment] = useState("");
    const [method, setMethod] = useState("");


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
    const methodHandler = ()=>{
        setMethod(event.target.value);
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

        <label> <input type="radio" value="Pick Up" checked={method === "Pick Up"} onChange={methodHandler}/>Pick Up</label>
        <label> <input type="radio" value="Delivery" checked={method === "Delivery"} onChange={methodHandler}/>Delivery</label>
        <p>Shipping: {method}</p>
    </div>);

}
export default MyComponent