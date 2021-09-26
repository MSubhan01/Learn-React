import { useState } from "react";

function App() {

  const [counter, setCounter] = useState(0);

  function decrement(){
    setCounter(counter - 1);
  }
  function Increment(){
    setCounter(counter + 1);
  }

  return (
    <>
    <h1>Counter: {counter}</h1>
    <button onClick={decrement}>decrement</button>
    <button onClick={Increment}>Increment</button>
    </>
  );
}

export default App;
