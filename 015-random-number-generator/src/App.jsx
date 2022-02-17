import React, { useState } from "react";

function generetaRandomNumber(min, max) {
  return parseInt((Math.random() * (max - min + 1)) + min)
}


function App() {
  const [randomNumber, setRandomNumber] = useState(0)
  const [minInput, setMinInput] = useState(1)
  const [maxInput, setMaxInput] = useState(10)


  return (
    <div>
      <h1>Random Number Generator App</h1>

      <label htmlFor="setmin">Min</label>
      <input 
        type="number" 
        id="setmin"
        defaultValue={minInput}
        max={maxInput}
        min={0}
        onChange={(event) => {
          setMinInput(event.target.value)
        }} 
      />

      <label htmlFor="setmax">Max</label>
      <input 
        type="number" 
        id="setmax"
        min={minInput}
        defaultValue={maxInput}
        onChange={(event) => {
          setMaxInput(event.target.value)
        }} 
      />

      <button
        onClick={() => {
          setRandomNumber(generetaRandomNumber(Number(minInput), Number(maxInput)))
        }}
      >Generate</button>

      <div>{randomNumber}</div>
    </div>
  );
}

export default App;
