import React from 'react';

function CalculateButton({ onClick }) {
    return (
        <button className="calculate-button" onClick={onClick}>
            Calculate
        </button>
    );
}

export default CalculateButton;
