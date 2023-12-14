import { IoIosArrowDown } from "react-icons/io";
import './arrowButton.scss';

export default function ArrowButton({ isOpen, onClickFunction, size, direction }) {
    return (
        <button
            className={`arrow-button ${isOpen ? 'arrow-button--open' : `arrow-button--${direction}`}`}
            onClick={onClickFunction}
        >
            <IoIosArrowDown size={`${size}px`}/>
        </button>
    )
}

ArrowButton.defaultProps = {
    isOpen: false,
    onClickFunction: null,
    size: 20,
    direction: 'down',
}
