import "./App.css";
import { useState } from "react";

function App() {
  return (
    <>
      <FibonacciComponent />
    </>
  );
}

function FibonacciComponent() {
    const getFibonacci = n => {
        if (n <= 1) {
            return 1;
        }
        return getFibonacci(n - 1) + getFibonacci(n - 2);
    };
    const nextFibonacci = () => {
        setFibonacci(fibonacci + 1);
    };
    const previousFibonacci = () => {
        if (fibonacci > 0) {
          setFibonacci(fibonacci - 1);
        }
        else {
          alert("You are at the beginning of the Fibonacci sequence.")
        }
    };
    let [fibonacci, setFibonacci] = useState(0);
    return (
        <>
            <h1>Current Fibonacci: {getFibonacci(fibonacci)}</h1>
            <button onClick={previousFibonacci}>Previous Fibonacci</button>
            <button onClick={nextFibonacci}>Next Fibonacci</button>
        </>
    );
}

export default App;

