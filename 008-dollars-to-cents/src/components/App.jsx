import React, { createContext, useState } from 'react';
import Converter from './Converter';
import '../style/app.css'

export const DollarContext = createContext() 

function App() {
  const [dollarValue, setDollarValue] = useState(0);

  return (
    <DollarContext.Provider value={{dollarValue, setDollarValue}}>
      
      <div className="App">
        <h1>Converter App</h1>
        <Converter />
      </div>
    
    </DollarContext.Provider>

  );
}

export default App;
