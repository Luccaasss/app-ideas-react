import React, { useEffect, useState } from 'react';
import '../style/app.css'
import Calculator from './Calculator';

function App() {
  const [displayValue, setDisplayValue] = useState([])
  const [displayString, setDisplayString] = useState('0')

  const [previousValue, setPreviousValue] = useState(0)
  const [currentOperator, setCurrentOperator] = useState('.')

  useEffect(() => {
    if (displayValue.length === 0) return
    setDisplayString(displayValue.join(''))
    console.log(displayValue)
  }, [displayValue])

  function handleAddNumber(newNumber) {
    if (displayValue.length === 9) return;
    setDisplayValue(preveValue => [...preveValue, newNumber])
  }

  function handleOperator(operator) {
    setCurrentOperator(operator)
    setPreviousValue(parseInt(displayString))
    setDisplayValue([]);
    setDisplayString('0')
  }

  function handleResetCalculator() {
    setDisplayString('0')
    setPreviousValue(0)
    setCurrentOperator('.')
    setDisplayValue([])
  }

  function handleIqualOperator() {
    if (currentOperator === '.') return
    if (currentOperator === '+') {
      setDisplayValue(String(previousValue + parseInt(displayString)).split(''))
    }
    if (currentOperator === '-') {
      setDisplayValue(String(previousValue - parseInt(displayString)).split(''))
    }
    if (currentOperator === 'x') {
      setDisplayValue(String(previousValue * parseInt(displayString)).split(''))
    }
    if (currentOperator === '/') {
      setDisplayValue(String(previousValue / parseInt(displayString)).split(''))
    }

  }

  return (
    <div className="App">
      <Calculator 
        handleAddNumber={handleAddNumber}
        displayString={displayString}
        handleOperator={handleOperator}
        handleIqualOperator={handleIqualOperator}
        handleResetCalculator={handleResetCalculator}
      />
    </div>
  );
}

export default App;
