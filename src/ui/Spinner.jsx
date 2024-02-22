import './spinner.scss';

export default function Spinner({ color, size, thickness, duration }) {
    const styles = {
        borderTopColor: `transparent`,
        borderRightColor: `var(--${color})`,
        borderBottomColor: `var(--${color})`,
        borderLeftColor: `var(--${color})`,
        width: `${size}rem`,
        height: `${size}rem`,
        borderWidth: `${thickness}rem`,
        animationDuration: `${duration}s`,
    }

    return (
        <div className='spinner'>
            <div className='spinner__spin' style={styles}></div>
        </div>
    )
}

Spinner.defaultProps = {
    color: 'secondary-element-color',
    size: 4.5,
    thickness: 0.5,
    duration: 1.25,
};
