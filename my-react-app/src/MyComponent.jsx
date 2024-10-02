import React, {useState, useEffect} from 'react';

function MyComponent() {

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  // window.addEventListener("resize", handleResize);
  // console.log("Event Listener Added");
  // //here when we do this without useEffect hook every time our page rerenders it generates an eventlistener that is around 1000 times that is poor code

  useEffect(() => {
     window.addEventListener("resize", handleResize);
     console.log("Event Listener Added");

     return () => {
      window.removeEventListener("resize", handleResize)
      console.log("Event Listener Removed");
     } //this helps to remove evenlisteners after use. This is another use of useEffect() hook.
  }, []);


  useEffect(() => {
    document.title = `Size: ${width} x ${height}`
  }, [width, height]);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return(<>
          <p>Window Width: {width}px</p>
          <p>Window Height: {height}px</p>
        </>);
}


export default MyComponent;





/*

import React, {useState, useEffect} from 'react';

function MyComponent() {

  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  // useEffect(() => {
  //   document.title = `Count: ${count}`
  // }); //runs the function every time the page re-renders

  // useEffect(() => {
  //   document.title = `Count: ${count}`
  // }, []); //runs the function only once during mount when we add an empty array of dependencies

  useEffect(() => {
    document.title = `Count: ${count} ${color}`
  }, [count, color]); //runs the function every time the value of the count inside dependency array changes and during mount

  function addCount() {
    setCount(c =>  c + 1);

  }

  function subtractCount() {
    setCount(c =>  c - 1);

  }
  
  function changeColor() {
    setColor(c => c === "green" ? "red" : "green");
  }

  return(<>
          <p style={{color: color}}>Count: {count}</p>
          <button onClick={addCount}>Add</button>
          <button onClick={subtractCount}>Subtract</button><br />
          <button onClick={changeColor}>Change Color</button>
        </>);
}


export default MyComponent;

*/





/*
import React, {useState} from 'react';

function MyComponent() {

  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");


  function handleAddCar() {

    const newCar = {year: carYear, make: carMake, model: carModel};

    setCars(prevCars => [...prevCars, newCar]);

    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  }

  function handleRemoveCar(index) {
    setCars(prevCars => prevCars.filter((_, i) => i !== index));
  }

  function handleYearChange(event) {
    setCarYear(event.target.value);
  }

  function handleMakeChange(event) {
    setCarMake(event.target.value)
  }

  function handleModelChange(event) {
    setCarModel(event.target.value)
  }


  return(<div>
          <h2>List of Car Objects</h2>
          <ul>
            {cars.map((car, index) => 
            <li key={index} onClick={() => handleRemoveCar(index)}>
              {car.year} {car.make} {car.model}
            </li>)}
          </ul>

          <input type="number" value={carYear} onChange={(event) => handleYearChange(event)}/><br />
          <input type="text" value={carMake} onChange={(event) => handleMakeChange(event)} placeholder="Enter car make"/><br />
          <input type="text" value={carModel} onChange={(event) => handleModelChange(event)} placeholder="Enter car model"/><br />
          <button onClick={handleAddCar}>Add Car</button>
        </div>);
}


export default MyComponent;

*/




/*

import React, {useState} from 'react';

function MyComponent() {

  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";

    setFoods(prevFoods => [...prevFoods, newFood]);
  }
  function handleRemoveFood(index) {
    setFoods(foods.filter((_, i) => i !== index));
  }

  return(<div>
          <h2>List of Food</h2>
          <ul>
            {foods.map((food, index) => 
              <li key={index} onClick={() => handleRemoveFood(index)}>
                {food}
              </li>)}
          </ul>

          <input type="text" id="foodInput" placeholder="Enter food name:"/>
          <button onClick={handleAddFood}>Add Food</button>
        </div>);
}

export default MyComponent;

*/





/*
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

*/





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