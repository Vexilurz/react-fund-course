import React, {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);

  function inc() {
    setCount(count + 1)
  }
  
  function dec() {
    setCount(count - 1)
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={inc}>Inc</button>
      <button onClick={dec}>Dec</button>
    </div>
  );
}

export default App;
