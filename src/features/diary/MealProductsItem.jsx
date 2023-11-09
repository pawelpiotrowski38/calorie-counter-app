import './mealProductsItem.scss';

export default function MealProductsItem() {
    return (
        <li className='meal-products-item'>
            <div className='meal-products-item__info-container'>
                <h3 className='meal-products-item__name'>
                    Bread
                </h3>
                <p className='meal-products-item__quantity'>
                    4 slices
                </p>
                <div className='meal-products-item__nutritions-container'>
                    <p className='meal-products-item__nutrition'>
                        300 Cal
                    </p>
                    <p className='meal-products-item__nutrition'>
                        10g
                    </p>
                    <p className='meal-products-item__nutrition'>
                        1g
                    </p>
                    <p className='meal-products-item__nutrition'>
                        36g
                    </p>
                </div>
            </div>
            <div className='meal-products-item__buttons-container'>
                <button className='meal-products-item__delete-button'>
                    X
                </button>
            </div>
        </li>
    )
}