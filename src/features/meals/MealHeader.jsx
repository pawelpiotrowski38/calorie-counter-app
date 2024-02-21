import { IoEllipsisVertical } from "react-icons/io5";
import { IoAdd } from "react-icons/io5";
import ArrowButton from '../../ui/ArrowButton';
import MealNutritions from "./MealNutritions";
import './mealHeader.scss';

export default function MealHeader({ info, isOpen, onHandleOpen }) {
    const isMealEmpty = !info.calories;

    return (
        <div className='meal-header'>
            <div className='meal-header__info-container'>
                <div
                    className='meal-header__name-container'
                    onClick={!isMealEmpty ? onHandleOpen : null}
                >
                    <h2 className='meal-header__name'>
                        {info.name}
                    </h2>
                    {!isMealEmpty && (
                        <ArrowButton
                            isOpen={isOpen}
                        />
                    )}
                </div>
                <MealNutritions
                    calories={`${info.calories} Cal`}
                    proteins={`${info.proteins}g`}
                    fats={`${info.fats}g`}
                    carbohydrates={`${info.carbohydrates}g`}
                />
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