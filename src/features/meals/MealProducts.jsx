import './mealProducts.scss';

export default function MealProducts({ children }) {
    return (
        <ul className='meal-products'>
            {children}
        </ul>
    )
}
