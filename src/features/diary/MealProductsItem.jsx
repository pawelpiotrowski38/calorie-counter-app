import './mealProductsItem.scss';

export default function MealProductsItem({ product }) {
    return (
        <li className='meal-products-item'>
            <div className='meal-products-item__info-container'>
                <h3 className='meal-products-item__name'>
                    {product.name}
                </h3>
                <p className='meal-products-item__quantity'>
                    {product.quantity}
                </p>
                <div className='meal-products-item__nutritions-container'>
                    <p className='meal-products-item__nutrition'>
                        {`${product.calories} Cal`}
                    </p>
                    <p className='meal-products-item__nutrition'>
                        {`${product.proteins}g`}
                    </p>
                    <p className='meal-products-item__nutrition'>
                        {`${product.fats}g`}
                    </p>
                    <p className='meal-products-item__nutrition'>
                        {`${product.carbohydrates}g`}
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