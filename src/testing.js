/*

**Messing around with React**

import { useState, useEffect } from 'react';
import './App.css';

const Person = (props) => {
  return(
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: {props.LastName}</h2>
      <h2>Age: {props.age}</h2>
    </>
  );
}

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    alert("You've changed the counter to " + counter);
  }, [counter]);   

  return (
    <div className="App">
      <Person name={'John'} LastName={'Doe'} age={25}/>
      <Person name={'Mary'} LastName={'Doe'} age={24}/>
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
}

export default App;
*/ 