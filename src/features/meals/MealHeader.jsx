import { IoEllipsisVertical } from "react-icons/io5";
import { IoAdd } from "react-icons/io5";
import ArrowButton from '../../ui/ArrowButton';
import './mealHeader.scss';

export default function MealHeader({ info, isOpen, onHandleOpen }) {
    return (
        <div className='meal-header'>
            <div className='meal-header__info-container'>
                <div
                    className='meal-header__name-container'
                    onClick={onHandleOpen}
                >
                    <h2 className='meal-header__name'>
                        {info.name}
                    </h2>
                    <ArrowButton
                        isOpen={isOpen}
                    />
                </div>
                <div className='meal-header__calories-container'>
                    <p className='meal-header__nutrition'>
                        {`${info.calories} Cal`}
                    </p>
                    <div className='meal-header__nutritions-container'>
                        <p className='meal-header__nutrition'>
                            {`${info.proteins}g`}
                        </p>
                        <p className='meal-header__nutrition'>
                            {`${info.fats}g`}
                        </p>
                        <p className='meal-header__nutrition'>
                            {`${info.carbohydrates}g`}
                        </p>
                    </div>
                </div>
            </div>
            <div className='meal-header__buttons-container'>
                <button className='meal-header__button meal-header__button--more'>
                    <IoEllipsisVertical />
                </button>
                <button className='meal-header__button meal-header__button--add'>
                    <IoAdd />
                </button>
            </div>
        </div>
    )
}