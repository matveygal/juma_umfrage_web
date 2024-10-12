import React from 'react';

function ToggleSwitch({ label, value, onChange }) {
    return (
        <div className="toggle-switch">
            <label>{label}:</label>
            <input type="checkbox" checked={value} onChange={onChange} />
            <span className="switch-slider" />
        </div>
    );
}

export default ToggleSwitch;
