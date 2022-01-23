import React, { useState } from 'react';
import '../style/app.css'

function App() {
  const [topLeftRadius, setTopLeftRadius] = useState(0);
  const [topRightRadius, setTopRightRadius] = useState(0);
  const [bottomRightRadius, setBottomRightRadius] = useState(0);
  const [bottomLeftRadius, setBottomLeftRadius] = useState(0);

  const borderRadiusStyle = {
    borderRadius: `${topLeftRadius}% ${topRightRadius}% ${bottomRightRadius}% ${bottomLeftRadius}%`
  }

  return (
    <div className="App">
      <h1>BORDER RADIUS</h1>
      <div 
        className="border-box"
        style={borderRadiusStyle}
      ></div>

        <input 
          type="range" 
          defaultValue = "0"
          name="border-top-left-radius" 
          id="border-top-left-radius" 
          onChange={(e) => {
            setTopLeftRadius(e.target.value)
          }}
        />

        <input 
          type="range" 
          defaultValue = "0" 
          name="border-top-right-radius" 
          id="border-top-right-radius"
          onChange={(e) => {
            setTopRightRadius(e.target.value)
          }} 
        />

        <input 
          type="range" 
          defaultValue = "0" 
          name="border-bottom-right-radius" 
          id="border-bottom-right-radius"
          onChange={(e) => {
            setBottomRightRadius(e.target.value)
          }} 
        />

        <input 
          type="range" 
          defaultValue = "0"
          name="border-bottom-left-radius" 
          id="border-bottom-left-radius"
          onChange={(e) => {
            setBottomLeftRadius(e.target.value)
          }} 
        />

        <div className='output-container'>
          <span>border-radius: {borderRadiusStyle.borderRadius}</span>
          <button onClick={() => {
            navigator.clipboard.writeText(borderRadiusStyle.borderRadius);
          }}>
            COPY
          </button>
        </div>
        
    </div>
  );
}

export default App;
