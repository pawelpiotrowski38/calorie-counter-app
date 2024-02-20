import { RiEdit2Line } from "react-icons/ri";
import { RiDeleteBin2Line } from "react-icons/ri";
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
                <div className='meal-products-item__calories-container'>
                    <p className='meal-products-item__nutrition'>
                        {`${product.calories} Cal`}
                    </p>
                    <div className='meal-products-item__nutritions-container'>
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
            </div>
            <div className='meal-products-item__buttons-container'>
                <button className='meal-products-item__button meal-products-item__button--edit'>
                    <RiEdit2Line />
                </button>
                <button className='meal-products-item__button meal-products-item__button--delete'>
                    <RiDeleteBin2Line />
                </button>
            </div>
        </li>
    )
}