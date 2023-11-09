import MealProductsItem from './MealProductsItem';
import './mealProducts.scss';

export default function MealProducts() {
    return (
        <ul className='meal-products'>
            <MealProductsItem />
            <MealProductsItem />
            <MealProductsItem />
        </ul>
    )
}