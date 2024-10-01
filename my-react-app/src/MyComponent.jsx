import React, {useState} from 'react';

function MyComponent() {

  const [car, setCar] = useState({year: 2024,make: "Ford",model: "Mustang"});

  function handleYearChange(event) {
    setCar(prevCar => ({...prevCar, year: event.target.value}));
  }
  function handleMakeChange(event) {
    setCar(prevCar => ({...prevCar, make: event.target.value}));  
  }
  function handleModelChange(event) {
    setCar(prevCar => ({...prevCar, model: event.target.value}));  
  }

  return(<div>
          <p>Your favourite car is: {car.year} {car.make} {car.model}</p>

          <input type="number" value={car.year} onChange={handleYearChange}/><br />
          <input type="text" value={car.make} onChange={handleMakeChange}/><br />
          <input type="text" value={car.model} onChange={handleModelChange}/><br />
        </div>);
}

export default MyComponent;




/*
import React, {useState} from 'react';

function MyComponent() {

  const [count, setCount] = useState(0);

  const increment = () => {
    // setCount(count + 1); //if we try to write another setCount(count + 1) the count will only increase once because React batches up all and only make a single change for performance optimizations.We use updater functions in that case.

    setCount((prevCount) => prevCount + 1);
    // setCount((prevCount) => prevCount + 1);
    // setCount((prevCount) => prevCount + 1); 
    // //Here we take the pending state to calculate the next state not the current state.We will update it at the end. React puts update function in a queue rather than batching them all together.
  }
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);  }
  const reset = () => {
    setCount(prevCount => prevCount = 0); //we dont need this but i just added it to demonstrate how it will be.
  }

  return(<div className="counter-container">
          <p className="count-display">Count: {count}</p>
          <button className="counter-button" onClick={decrement}>Decrement</button>
          <button className="counter-button" onClick={reset}>Reset</button>
          <button className="counter-button" onClick={increment}>Increment</button> 
        </div>);
}

export default MyComponent;

*/




/*
import React, {useState} from 'react';

function MyComponent() {

  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }
 
  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }

  function handleShippingChange(event) {
    setShipping(event.target.value);
  }

  return(<div>

          <input value={name} onChange={handleNameChange}/>
          <p>Name: {name}</p>

          <input value={quantity} onChange={handleQuantityChange} type="number"/>
          <p>Quantity: {quantity}</p>

          <textarea value={comment} onChange={handleCommentChange} placeholder="Add delivery instructions"></textarea>
          <p>Comment: {comment}</p>

          <select value={payment} onChange={handlePaymentChange}>
            <option value="">Select an option</option>
            <option value="Visa">Visa</option>
            <option value="MasterCard">MasterCard</option>
            <option value="GiftCard">GiftCard</option>
          </select>
          <p>Payment: {payment}</p>

          <label>
            <input type="radio" value="Pick up" checked={shipping === "Pick up"} onChange={handleShippingChange}/>
            Pick up
          </label><br />
          <label>
            <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}/>
            Delivery
          </label>
          <p>Shipping: {shipping}</p>
          
        </div>);
}

export default MyComponent;

*/




/*
import React, {useState} from 'react';

function MyComponent() {

  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    setName("Kevin");
  }

  const incrementAge = () => {
    setAge(age + 1);
  }

  const toggleEmployedStatus = () => {
    setIsEmployed(!isEmployed);
  }

  return(<div>
    <p>Name: {name}</p>
    <button onClick={updateName}>Set Name</button>

    <p>Age: {age}</p>
    <button onClick={incrementAge}>Increment Age</button>

    <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
    <button onClick={toggleEmployedStatus}>Toggle Status</button>
  </div>);
}

export default MyComponent;

*/