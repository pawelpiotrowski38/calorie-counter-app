import './mealHeader.scss';

export default function MealHeader() {
    return (
        <div className='meal-header'>
            <div className='meal-header__info-container'>
                <h2 className='meal-header__name'>
                    Breakfast
                </h2>
                <div className='meal-header__nutritions-container'>
                    <p className='meal-header__nutrition'>
                        552 Cal
                    </p>
                    <p className='meal-header__nutrition'>
                        21g
                    </p>
                    <p className='meal-header__nutrition'>
                        14g
                    </p>
                    <p className='meal-header__nutrition'>
                        45g
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