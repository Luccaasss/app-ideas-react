import React, { useContext , useState } from 'react';
import InputIncorrect from './InputIncorrect';
import {DollarContext} from './App';

export default function Converter() {
  const [inputValue, setInputValue] = useState('')
  const [inputError, setInputError] = useState(false);
  const { dollarValue, setDollarValue } = useContext(DollarContext)

  function converterInput() {
    if (!Number(inputValue)) {
      console.error('err')
      setInputError(true)
    }
    else {
      console.log(inputValue)
      setInputError(false)
      setDollarValue(Math.round(Number(inputValue) * 100))
    }
  }

  return (
    <div className='cointainer-converter'>
      <p>Enter the number of dollars</p>

      <input 
        type="text" 
        onChange={event => {
          setInputValue(event.target.value)
        }}
      />

      <div>
        <button 
          onClick={() => converterInput()}
        >Converter</button>
      </div>

      {inputError && <InputIncorrect/>}
      {!inputError && (dollarValue !== 0) && dollarValue}


    </div>
  )
}
