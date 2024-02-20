import { IoIosArrowDown } from "react-icons/io";
import './arrowButton.scss';

export default function ArrowButton({ isOpen, onClickFunction, direction }) {
    return (
        <button
            className={`arrow-button ${isOpen ? 'arrow-button--open' : `arrow-button--${direction}`}`}
            onClick={onClickFunction}
        >
            <IoIosArrowDown />
        </button>
    )
}

ArrowButton.defaultProps = {
    isOpen: false,
    onClickFunction: null,
    direction: 'down',
}
