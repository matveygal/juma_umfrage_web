import React from 'react';

function ResultLabel({ result }) {
    const displayResult = Array.isArray(result) ? result.join(', ') : result;

    return (
        <div className="result-label">
            <h3>Result: {displayResult}</h3>
        </div>
    );
}

export default ResultLabel;
