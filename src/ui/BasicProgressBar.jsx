import './basicProgressBar.scss';

export default function BasicProgressBar({ value, limit, color, children }) {
    const percentage = value/limit * 100;

    return (
        <div className='basic-progress-bar'>
            <p className='basic-progress-bar__title'>
                {children}
            </p>
            <div className='basic-progress-bar__bar'>
                <div
                    className='basic-progress-bar__inside'
                    style={{
                        width: `${percentage}%`,
                        backgroundColor: `var(--${color})`
                    }}    
                >
                </div>
            </div>
        </div>
    )
}