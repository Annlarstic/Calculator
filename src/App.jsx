
import { useState } from 'react';
import './App.css';
import { evaluate } from 'mathjs';

function App() {
  const [value, setValue] = useState('');

  const handleButtonClick = (val) => {
    setValue(value + val);
  };

  const handleCalculation = () => {
    try {
      if (/[^0-9+\-*/().%]/.test(value)) {
        throw new Error('Invalid character in expression');
      }
      const result = evaluate(value);
      if (isNaN(result)) {
        throw new Error('Invalid calculation result');
      }
      setValue(result.toString());
    } catch (e) {
      console.error("Error evaluating expression:", e);
      setValue('Error');
    }
  };

  const handleClear = () => {
    setValue('');
  };

  const handleDelete = () => {
    setValue(value.slice(0, -1));
  };

  const handlePercentage = () => {
    const numericValue = parseFloat(value);

    if (isNaN(numericValue)) {
      setValue('Error');
      return;
    }

    setValue((numericValue / 100).toString());
  };

  return (
    <div className="container">
      <div className="calculator">
        <div className="display-text">
          <input type="text" value={value} readOnly />
        </div>

        <div className="buttons">
          <div className="row">
            <button onClick={handleClear} className="button clear">AC</button>
            <button onClick={handleDelete} className="button delete">DE</button>
            <button onClick={handlePercentage} className="button operator">%</button>
            <button onClick={() => handleButtonClick('/')} className="button operator">/</button>
          </div>

          <div className="row">
            <button onClick={() => handleButtonClick('7')} className="button">7</button>
            <button onClick={() => handleButtonClick('8')} className="button">8</button>
            <button onClick={() => handleButtonClick('9')} className="button">9</button>
            <button onClick={() => handleButtonClick('*')} className="button operator">*</button>
          </div>

          <div className="row">
            <button onClick={() => handleButtonClick('4')} className="button">4</button>
            <button onClick={() => handleButtonClick('5')} className="button">5</button>
            <button onClick={() => handleButtonClick('6')} className="button">6</button>
            <button onClick={() => handleButtonClick('-')} className="button operator">-</button>
          </div>

          <div className="row">
            <button onClick={() => handleButtonClick('1')} className="button">1</button>
            <button onClick={() => handleButtonClick('2')} className="button">2</button>
            <button onClick={() => handleButtonClick('3')} className="button">3</button>
            <button onClick={() => handleButtonClick('+')} className="button operator">+</button>
          </div>

          <div className="row">
            <button onClick={() => handleButtonClick('0')} className="button zero">0</button>
            <button onClick={() => handleButtonClick('.')} className="button">.</button>
            <button onClick={handleCalculation} className="button equal">=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
