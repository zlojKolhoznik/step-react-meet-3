import './App.css';
import { useState } from 'react';

function App() {
  return (
    <>
      <DateComponent />
    </>
  );
}

function DateComponent() {
  let [time, setTime] = useState(new Date().toLocaleTimeString());
  const clickHandler = () => {
    setTime(new Date().toLocaleTimeString());
  }
  return (
    <>
      <h1>{time}</h1>
      <button onClick={clickHandler}>Refresh time</button>
    </>
  );
}

export default App;
