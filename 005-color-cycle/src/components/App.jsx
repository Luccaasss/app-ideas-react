import React, { useState } from 'react'
import '../style/app.css'
import ColorSelector from './ColorSelector';

function App() {
  const [toggleButton, setToggleButton] = useState(true)
  const [boxBackgroundColor, setBoxBackgroundColor] = useState('#ff6347')

  return (
    <div className="App">
      <p>Color Cycle</p>
      <div className='color-box' style={{backgroundColor: boxBackgroundColor}}></div>
      <ColorSelector setBoxBackgroundColor={setBoxBackgroundColor}/>
      <button
        className='toggle-button' 
        onClick={() => {
        setToggleButton(!toggleButton)
      }}>{toggleButton ? 'Start' : 'Stop'}
      </button>
    </div>
  );
}

export default App;
