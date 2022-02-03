import React, { useState } from 'react';
import '../style/app.css'

function App() {
  const [radiusValue, setRadiusValue] = useState(0);
  const [positionLeft, setPositionLeft] = useState(0);
  const [boxBackground, setBoxBackground] = useState('#ff0000');


  return (
    <div className="App">
      <div 
        className='box' 
        style={{ 
          borderRadius: `${radiusValue}%`,
          left:  `${positionLeft}px`,
          backgroundColor: boxBackground,
        }}>
      </div>

      <input
        type="range"
        defaultValue="0"
        min={0}
        max={50}
        onChange={(e) => {
          setRadiusValue(e.target.value)
        }}
      />

      <input
        type="range"
        defaultValue="0"
        min={-50}
        max={50}
        onChange={(e) => {
          setPositionLeft(e.target.value)
        }}
      />

      <input
        type="color"
        defaultValue="#ff0000"
        onChange={(e) => {
          setBoxBackground(e.target.value)
        }}
      />

    </div>
  );
}

export default App;
