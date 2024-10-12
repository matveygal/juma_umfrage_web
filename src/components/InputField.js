import React from 'react';

function InputField({ label, name, defaultValue, onChange }) {
    const handleChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {  // Only allows integers
            onChange(name, value);
        }
    };

    return (
        <div className="input-field">
            <label>{label}:</label>
            <input type="text" defaultValue={defaultValue} onChange={handleChange} />
        </div>
    );
}

export default InputField;
