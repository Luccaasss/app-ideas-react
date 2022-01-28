import React, { useState } from 'react'
import '../style/app.css'

let intervalTimer

function App() {
  const [counterdownDisplay, setCounterdownDisplay] = useState({
    days: 0,
    hous: 0,
    minutes: 0,
    seconds: 0,
  })

  const interval = (futureDate) => {
    intervalTimer = setInterval(() => {
      const timeNow = new Date()
      const utcSaoPaulo = 10800000;
      const distance = new Date(futureDate - timeNow.getTime() + utcSaoPaulo)

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCounterdownDisplay({days, hours, minutes, seconds})

    }, 1000)
  }



  return (
    <div className="App">
      <div className='display-counter-down'>COUNTERDOWN TIMER</div>

      <input
        type="datetime-local"
        onChange={(e) => {
          if (intervalTimer) {
            clearTimeout(intervalTimer);
          }
          interval(e.target.valueAsNumber)
        }}
      />

      <div className='display-counter-down'>
        <span>{counterdownDisplay.days}</span>
        <span>Days</span>
        <span>{counterdownDisplay.hours}</span>
        <span>Hours</span>
        <span>{counterdownDisplay.minutes}</span>
        <span>Minutes</span>
        <span>{counterdownDisplay.seconds}</span>
        <span>Seconds</span>
      </div>
    </div>
  );
}

export default App;
