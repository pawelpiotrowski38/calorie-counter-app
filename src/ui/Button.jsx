import './button.scss';

export default function Button({ onClick, disabled, width, children }) {
    const style = {
        width: width,
    }
    
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

Button.defaultProps = {
    onClick: null,
    disabled: false,
    width: '100%',
}
