import './circleProgressBar.scss';

export default function CircleProgressBar({ value, limit, color, children }) {
    const percentage = value/limit * 100;

    return (
        <div
            className="circle-progress-bar"
            style={{
                background: `conic-gradient(var(--${color}) ${percentage}%, var(--main-background-color) 0)`
            }}
        >
            <div className='circle-progress-bar__inside'>
                {children}
            </div>
        </div>
    )
}
