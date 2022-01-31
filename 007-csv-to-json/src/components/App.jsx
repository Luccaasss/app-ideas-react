import React, { useState } from 'react'

function App() {
  const [csvRes, setCSVRes] = useState('')
  const mainObj = [];

  return (
    <div className="App">
      <p>Hello, world!</p>

      <textarea 
        name="" 
        id="" 
        cols="30" 
        rows="10"
        onChange={(e) => {
          mainObj.length = 0;
          const n = String(e.target.value).split('\n')
                .map(e => e.replaceAll('\"', ''))
                .map(e => e.split(','))
          
          const firstEl = n.shift()
          n.forEach(el => {
            const obj = {}
            obj[firstEl[0]] = el[0]
            obj[firstEl[1]] = el[1]
            mainObj.push(obj)
          })
        }}

      />

      <textarea value={csvRes} cols="30" rows="10"/>

      <button onClick={() => {
        console.log(mainObj)
        setCSVRes(JSON.stringify(mainObj))
        console.log(JSON.stringify(mainObj))
      }}>
      converter</button>

      
    </div>
  );
}

export default App;
