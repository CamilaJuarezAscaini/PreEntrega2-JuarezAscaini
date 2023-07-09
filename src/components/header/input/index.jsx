import React from "react";
import './styles.css'

const Input = ({ placeholder, type = 'text', id, required = 'false', onBlur, onChange, onFocus, value, className }) => {
    return (
        <div className={className}>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                required={required}
                onFocus={onFocus}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
            />
        </div>

    )
}

export default Input;