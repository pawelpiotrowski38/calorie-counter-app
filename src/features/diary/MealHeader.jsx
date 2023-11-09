import './mealHeader.scss';

export default function MealHeader({ info }) {
    return (
        <div className='meal-header'>
            <div className='meal-header__info-container'>
                <h2 className='meal-header__name'>
                    {info.name}
                </h2>
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