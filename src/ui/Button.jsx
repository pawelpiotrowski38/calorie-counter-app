import { Link } from 'react-router-dom';
import './button.scss';

export default function Button({ onClick, linkTo, disabled, width, children }) {
    const style = {
        width: width,
    }

    if (linkTo) {
        return (
            <Link
                className='button'
                to={linkTo}
                onClick={onClick}
                style={style}
            >
                {children}
            </Link>
        )
    }

    if (onClick) {
        return (
            <button
                className='button'
                disabled={disabled}
                onClick={onClick}
                style={style}
            >
                {children}
            </button>
        )
    }
    
    return (
        <button
            className='button'
            disabled={disabled}
            style={style}
        >
            {children}
        </button>
    )
}

Button.defaultProps = {
    onClick: null,
    linkTo: null,
    disabled: false,
    width: '100%',
}
