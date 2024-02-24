import { RiEdit2Line } from 'react-icons/ri';
import { RiDeleteBin2Line } from 'react-icons/ri';
import MealNutritions from './MealNutritions';
import './mealProductsItem.scss';

export default function MealProductsItem({ product, isDeletingMealItem, onDeleteMealItem }) {
    return (
        <li className='meal-products-item'>
            <div className='meal-products-item__info-container'>
                <h3 className='meal-products-item__name'>
                    {product.name}
                </h3>
                <p className='meal-products-item__quantity'>
                    {`${product.quantity}g`}
                </p>
                <MealNutritions
                    calories={`${product.calories} Cal`}
                    proteins={`${product.proteins}g`}
                    fats={`${product.fats}g`}
                    carbohydrates={`${product.carbohydrates}g`}
                />
            </div>
            <div className='meal-products-item__buttons-container'>
                <button
                    className='meal-products-item__button meal-products-item__button--edit'
                    disabled={isDeletingMealItem}
                >
                    <RiEdit2Line />
                </button>
                <button
                    className='meal-products-item__button meal-products-item__button--delete'
                    onClick={() => onDeleteMealItem(product.id)}
                    disabled={isDeletingMealItem}
                >
                    <RiDeleteBin2Line />
                </button>
            </div>
        </li>
    )
}
