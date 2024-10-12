import React, { useState } from 'react';
import InputField from './components/InputField';
import ResultLabel from './components/ResultLabel';
import CalculateButton from './components/CalculateButton';
import ToggleSwitch from './components/ToggleSwitch';
import { calculateResult } from './Calculate';
import './css/App.css';

function App() {
    const [inputValues, setInputValues] = useState({
        plus_param: 1,
        minus_param: 1,
        start_value: 1,
        n: 10
    });
    const [toggleValue, setToggleValue] = useState(false);
    const [result, setResult] = useState([]);
    const [prob, setProb] = useState(0);

    const handleInputChange = (name, value) => {
        setInputValues(prevValues => ({ ...prevValues, [name]: parseInt(value) || 0 }));
    };

    const handleToggleChange = () => {
        setToggleValue(prev => !prev);
    };

    const handleCalculateClick = () => {
        const calculateOutput = calculateResult(inputValues, toggleValue)
        setResult(calculateOutput.res);
        setProb(calculateOutput.prob)
    };

    return (
        <div className="app-container">
            <h2>Enter Values</h2>
            <div className="input-fields">
                <InputField
                    label="Plus Param"
                    name="plus_param"
                    defaultValue={inputValues.plus_param}
                    onChange={handleInputChange}
                />
                <InputField
                    label="Minus Param"
                    name="minus_param"
                    defaultValue={inputValues.minus_param}
                    onChange={handleInputChange}
                />
                <InputField
                    label="Start Value"
                    name="start_value"
                    defaultValue={inputValues.start_value}
                    onChange={handleInputChange}
                />
                <InputField
                    label="N"
                    name="n"
                    defaultValue={inputValues.n}
                    onChange={handleInputChange}
                />
            </div>
            <ToggleSwitch label="Toggle Effect" value={toggleValue} onChange={handleToggleChange} />
            <CalculateButton onClick={handleCalculateClick} />
            <ResultLabel result={prob} text="Prob:" />
            <ResultLabel result={result} />
        </div>
    );
}

export default App;
