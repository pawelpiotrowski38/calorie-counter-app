import './basicProgressBar.scss';

export default function BasicProgressBar({ value, limit, thickness, color, children }) {
    const percentage = value/limit * 100;

    const barStyles = {
        height: `${thickness}rem`
    }

    const insideStyles = {
        width: `${percentage}%`,
        backgroundColor: `var(--${color})`,
    }

    return (
        <div className='basic-progress-bar'>
            <p className='basic-progress-bar__title'>
                {children}
            </p>
            <div
                className='basic-progress-bar__bar'
                style={barStyles}
            >
                <div
                    className='basic-progress-bar__inside'
                    style={insideStyles}    
                >
                </div>
            </div>
        </div>
    )
}

BasicProgressBar.defaultProps = {
    value: 0,
    limit: 100,
    thickness: 0.5,
    color: 'calories-progress-color',
}
