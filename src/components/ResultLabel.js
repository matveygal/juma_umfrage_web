import React from 'react';

function ResultLabel({ result, text = "Result:" }) {
    const displayResult = Array.isArray(result) ? result.join(', ') : result;

    return (
        <div className="result-label">
            <h3>{text} {displayResult}</h3>
        </div>
    );
}

export default ResultLabel;
