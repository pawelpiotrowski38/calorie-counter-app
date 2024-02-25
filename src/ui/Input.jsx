import { useState } from 'react';
import './input.scss';

export default function Input({ label, id, width, value, onSetValue }) {
    const [isFocused, setIsFocused] = useState(false);

    const isInputEmpty = value.trim() === '';

    const style = {
        width: width,
    };
    
    return (
        <div className='input__container'>
            <input
                className='input__input'
                style={style}
                type='text'
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
        </div>
    )
}
