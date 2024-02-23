import { IoEllipsisVertical } from "react-icons/io5";
import { IoAdd } from "react-icons/io5";
import ArrowButton from '../../ui/ArrowButton';
import MealNutritions from "./MealNutritions";
import './mealHeader.scss';

export default function MealHeader({ info, isAddOpen, isMealOpen, onHandleAddOpen, onHandleMealOpen, isDeleting, onMutate }) {
    const isMealEmpty = !info.calories;

    return (
        <div className='meal-header'>
            <div className='meal-header__info-container'>
                <div
                    className='meal-header__name-container'
                    onClick={!isMealEmpty ? onHandleMealOpen : null}
                >
                    <h2 className='meal-header__name'>
                        {info.name}
                    </h2>
                    {!isMealEmpty && (
                        <ArrowButton
                            isOpen={isMealOpen}
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
                <button
                    className='meal-header__button meal-header__button--more'
                    onClick={() => onMutate(info.id)}
                    disabled={isDeleting}
                >
                    <IoEllipsisVertical />
                </button>
                <button
                    className='meal-header__button meal-header__button--add'
                    onClick={() => onHandleAddOpen(true)}
                    disabled={isDeleting}
                >
                    <IoAdd />
                </button>
            </div>
        </div>
    )
}