import './arrowButton.scss';

export default function ArrowButton({ direction, onClickFunction }) {
    return (
        <button className='arrow-button' onClick={onClickFunction}>
            <i
                className={
                    `arrow-button__icon
                    ${direction === 'left' ? 'arrow-button__icon--left' : ''}
                    ${direction === 'right' ? 'arrow-button__icon--right' : ''}`
                }
            ></i>
        </button>
    )
}