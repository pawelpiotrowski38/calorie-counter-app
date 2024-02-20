import MealProductsItem from './MealProductsItem';
import './mealProducts.scss';

export default function MealProducts({ products }) {
    return (
        <ul className='meal-products'>
            {products.map((product) => (
                <MealProductsItem
                    key={product.id}
                    product={product}
                />
            ))}
        </ul>
    )
}