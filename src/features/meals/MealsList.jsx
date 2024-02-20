import Meal from "./Meal";
import './mealsList.scss';

export default function MealsList({ meals }) {
    return (
        <ul className='meals-list'>
            {meals.map((meal) => (
                <Meal key={meal.id}
                    meal={meal}
                />
            ))}
        </ul>
    )
}
