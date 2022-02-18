import React, {useState} from 'react';

// 'start/stop', reset -> button


const App = () => {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(0);

  const handleClick = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(0);
      return;
    }

    const newIntervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    setIntervalId(newIntervalId);
  };

  return (
    <div>
      <h1>{count}</h1>
      
      <button onClick={handleClick}>
        {intervalId ? "Stop counting" : "Start counting"}
      </button>
      <button onClick={() => {
        clearInterval(intervalId)
        setIntervalId(0)
        setCount(0)
      }}>
        Reset
      </button>
    </div>
  );
};

export default App;