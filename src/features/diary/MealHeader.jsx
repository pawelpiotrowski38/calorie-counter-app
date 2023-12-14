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
                <div className='meal-header__nutritions-container'>
                    <p className='meal-header__nutrition'>
                        {`${info.calories} Cal`}
                    </p>
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
            <div className='meal-header__buttons-container'>
                <button className='meal-header__show-more-button'>
                    <span className='meal-header__span'></span>
                    <span className='meal-header__span'></span>
                    <span className='meal-header__span'></span>
                </button>
                <button className='meal-header__add-button'>
                    +
                </button>
            </div>
        </div>
    )
}