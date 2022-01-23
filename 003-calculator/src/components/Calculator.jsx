export default function Calculator(props) {
  const {
    handleAddNumber,
    displayString,
    handleOperator,
    handleIqualOperator,
    handleResetCalculator
  } = props;



  return (
    <div className="calculator-container">
      
    <div className="caculator-display">{displayString}</div>

      <button className="calculator-button action" onClick={() => handleResetCalculator()}>C</button> 
      <button className="calculator-button action">AC</button> 
      <button className="calculator-button action">%</button> 
      <button className="calculator-button action" onClick={() => handleOperator('/')}>/</button>

      <button className="calculator-button" onClick={() => handleAddNumber(7)}>7</button> 
      <button className="calculator-button" onClick={() => handleAddNumber(8)}>8</button> 
      <button className="calculator-button" onClick={() => handleAddNumber(9)}>9</button> 
      <button className="calculator-button action" onClick={() => handleOperator('x')}>x</button>

      <button className="calculator-button" onClick={() => handleAddNumber(4)}>4</button> 
      <button className="calculator-button" onClick={() => handleAddNumber(5)}>5</button>
      <button className="calculator-button" onClick={() => handleAddNumber(6)}>6</button>
      <button className="calculator-button action" onClick={() => handleOperator('-')}>-</button>

      <button className="calculator-button" onClick={() => handleAddNumber(1)}>1</button> 
      <button className="calculator-button" onClick={() => handleAddNumber(2)}>2</button>
      <button className="calculator-button" onClick={() => handleAddNumber(3)}>3</button>
      <button className="calculator-button action" onClick={() => handleOperator('+')}>+</button>

      <button className="calculator-button zero-button" onClick={() => handleAddNumber(0)}>0</button> 
      <button className="calculator-button">.</button>
      <button className="calculator-button result-button" onClick={() => handleIqualOperator()}>=</button>

    </div>
  )
}