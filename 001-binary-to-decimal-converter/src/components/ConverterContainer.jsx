import React, { useContext, useState } from 'react';
import { InputContext } from './App'

export default function ConverterContainer() {
  const {inputString, setInputString} = useContext(InputContext);
  const [inputValue, setInputValue] = useState('')



  return (
    <div className="converter-container">
      <p>Binary Input</p>

      <span>
        <input type="text" onChange={(e) => {
          setInputValue(e.target.value)
        }}/>

        <button onClick={() => {
          if (inputValue.split('').some(e => e !== '0' && e !== '1')){
            setInputString('Enter either 0 or 1')
          }
          else {
            setInputString(String(parseInt(inputValue, 2)))
          }
        }}>Converter</button>
      </span>

      <p>Decimal Output</p>
      <input type="text" disabled value={inputString}/>

    </div>
  )
}