import './circleProgressBar.scss';

export default function CircleProgressBar({ value, limit, size, thickness, color, children }) {
    const percentage = value/limit * 100;
    const degree = percentage/100*360;
    const contentSize = size - thickness*2;
    const endEdgeTranslation = contentSize/2 + thickness/2;

    const mainStyles = {
        width: `${size}rem`,
        height: `${size}rem`,
        background: `conic-gradient(var(--${color}) ${percentage}%, var(--main-background-color) 0)`,
        // fontSize: fontSize,
    }

    const insideStyles = {
        top: `${(size-contentSize)/2}rem`,
        left: `${(size-contentSize)/2}rem`,
        width: `${contentSize}rem`,
        height: `${contentSize}rem`,
    }

    const startEdgeStyles = {
        width: `${thickness}rem`,
        height: `${thickness}rem`,
        backgroundColor: `var(--${color})`,
    }

    const endEdgeStyles = {
        ...startEdgeStyles,
        transform: `translate(-50%, -50%) rotate(${degree}deg) translateY(-${endEdgeTranslation}rem)`,
    }

    return (
        <div
            className="circle-progress-bar"
            style={mainStyles}
        >
            <div
                className='circle-progress-bar__inside'
                style={insideStyles}
            >
                {children}
            </div>
            <div
                className='circle-progress-bar__edge circle-progress-bar__edge--start'
                style={startEdgeStyles}
            ></div>
            <div
                className='circle-progress-bar__edge circle-progress-bar__edge--end'
                style={endEdgeStyles}
            ></div>
        </div>
    )
}

CircleProgressBar.defaultProps = {
    value: 0,
    limit: 100,
    size: 4,
    thickness: 0.5,
    color: 'calories-progress-color',
}
