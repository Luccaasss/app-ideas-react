import React, {createContext, useState} from 'react'
import HearderConverter from "./HearderConverter";
import ConverterContainer from "./ConverterContainer";
import '../style/app.css'

export const InputContext = createContext()

function App() {
  const [inputString, setInputString] = useState('');



  return (
    <InputContext.Provider value={{inputString, setInputString}}>
      <div className="App">
        <HearderConverter/>
        <ConverterContainer/>
      </div>
    </InputContext.Provider>
  );
}

export default App;
