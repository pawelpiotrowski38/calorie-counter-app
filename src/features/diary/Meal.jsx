import MealHeader from './MealHeader';
import MealProducts from './MealProducts';
import './meal.scss';

export default function Meal() {
    return (
        <section className='meal'>
            <MealHeader />
            <MealProducts />
        </section>
    )
}