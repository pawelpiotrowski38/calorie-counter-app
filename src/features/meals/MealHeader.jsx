import { IoAdd, IoEllipsisVertical } from 'react-icons/io5';
import ArrowButton from '../../ui/ArrowButton';
import MealNutritions from './MealNutritions';
import './mealHeader.scss';

export default function MealHeader({ mealInfo, isMealOpen, onHandleMealOpen, onHandleAddOpen, isDeletingMeal, onDeleteMeal }) {
    const isMealEmpty = !(mealInfo.calories > 0);
    
    return (
        <div className={`meal-header ${isMealOpen ? 'meal-header--open' : ''}`}>
            <div className='meal-header__info-container'>
                <div className='meal-header__name-container' onClick={!isMealEmpty ? onHandleMealOpen : null}>
                    <h2 className='meal-header__name'>
                        {mealInfo.name}
                    </h2>
                    {!isMealEmpty && (
                        <ArrowButton
                            isOpen={isMealOpen}
                        />
                    )}
                </div>
                <MealNutritions
                    calories={`${mealInfo.calories} Cal`}
                    proteins={`${mealInfo.proteins}g`}
                    fats={`${mealInfo.fats}g`}
                    carbohydrates={`${mealInfo.carbohydrates}g`}
                />
            </div>
            <div className='meal-header__buttons-container'>
                <button
                    className='meal-header__button meal-header__button--more'
                    onClick={() => onDeleteMeal(mealInfo.id)}
                    disabled={isDeletingMeal}
                >
                    <IoEllipsisVertical />
                </button>
                <button
                    className='meal-header__button meal-header__button--add'
                    onClick={() => onHandleAddOpen(true)}
                    disabled={isDeletingMeal}
                >
                    <IoAdd />
                </button>
            </div>
        </div>
    )
}