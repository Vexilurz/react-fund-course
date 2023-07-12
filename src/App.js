import React, {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('some text');

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

      <h1>{value}</h1>
      <input 
        type="text"
        value={value}
        onChange={event => setValue(event.target.value)}
      />
    </div>
  );
}

export default App;
