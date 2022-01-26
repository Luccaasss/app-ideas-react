import React, {useState} from "react";
import '../style/app.css'

function App() {
  const [animationNameValue, setAnimationNameValue] = useState(false)
  const [animationVelocity, setAnimationVelocity] = useState('1000ms')
  const velocities = ['1000ms', '800ms', '600ms', '400ms', '200ms']

  return (
    <>
      <p>Crhistmas lights</p>

      <div className="App">
        <div style={{animationName: animationNameValue ? 'none' : 'glow1', animationDuration: animationVelocity}} className="light light-red"></div>
        <div style={{animationName: animationNameValue ? 'none' : 'glow2', animationDuration: animationVelocity}} className="light light-yellow"></div>
        <div style={{animationName: animationNameValue ? 'none' : 'glow3', animationDuration: animationVelocity}} className="light light-blue"></div>
        <div style={{animationName: animationNameValue ? 'none' : 'glow4', animationDuration: animationVelocity}} className="light light-green"></div>

        <div style={{animationName: animationNameValue ? 'none' : 'glow1', animationDuration: animationVelocity}} className="light light-red"></div>
        <div style={{animationName: animationNameValue ? 'none' : 'glow2', animationDuration: animationVelocity}} className="light light-yellow"></div>
        <div style={{animationName: animationNameValue ? 'none' : 'glow3', animationDuration: animationVelocity}} className="light light-blue"></div>
        <div style={{animationName: animationNameValue ? 'none' : 'glow4', animationDuration: animationVelocity}} className="light light-green"></div>
      </div>

      <div className="controls">
        <button onClick={() => setAnimationNameValue(!animationNameValue)}>
          {animationNameValue ? 'ON' : 'OFF'}
        </button>
        <div className="veloctytext">Velocity</div>
        <input 
          type="range" 
          name="velocity" 
          id="velocity"
          min={1}
          max={5}
          defaultValue={0}
          onChange={(e) => {
            setAnimationVelocity(velocities[e.target.value - 1])
          }}
        />
      </div>
    </>
  );
}

export default App;
