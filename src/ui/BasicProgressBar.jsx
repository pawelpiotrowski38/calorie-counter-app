import './basicProgressBar.scss';

export default function BasicProgressBar({ value, limit, color, children }) {
    const percentage = value/limit * 100;

    const barStyles = {
        width: `${percentage}%`,
        backgroundColor: `var(--${color})`,
    }

    return (
        <div className='basic-progress-bar'>
            <p className='basic-progress-bar__title'>
                {children}
            </p>
            <div className='basic-progress-bar__bar'>
                <div
                    className='basic-progress-bar__inside'
                    style={barStyles}    
                >
                </div>
            </div>
        </div>
    )
}

BasicProgressBar.defaultProps = {
    value: 0,
    limit: 100,
    color: 'calories-progress-color',
}
