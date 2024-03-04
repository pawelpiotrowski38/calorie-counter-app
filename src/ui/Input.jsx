import { useState } from 'react';
import './input.scss';

export default function Input({ label, id, width, type, disabled, value, onSetValue, error }) {
    const [isFocused, setIsFocused] = useState(false);

    const isInputEmpty = value.trim() === '';

    const style = {
        width: width,
    };
    
    return (
        <div className='input__container'>
            <input
                className={`input__input ${error ? 'input__input--error' : ''}`}
                style={style}
                type={type}
                disabled={disabled}
                id={id}
                name={id}
                value={value}
                onChange={(event) => onSetValue(event.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            <label
                className={`input__label ${(isInputEmpty && !isFocused) ? '' : 'input__label--hidden'}`}
                htmlFor={id}
            >
                {label}
            </label>
            <div className='input__error'>
                {error}
            </div>
        </div>
    )
}
