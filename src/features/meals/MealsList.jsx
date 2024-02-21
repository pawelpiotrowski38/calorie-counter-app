import Meal from "./Meal";
import './mealsList.scss';

const defaultMeals = [{
        meal_type: 'breakfast',
        meal_items: [],
    }, {
        meal_type: 'lunch',
        meal_items: [],
    }, {
        meal_type: 'snack',
        meal_items: [],
    }, {
        meal_type: 'dinner',
        meal_items: [],
    },
];

export default function MealsList({ meals }) {
    return (
        <ul className='meals-list'>
            {defaultMeals.map((defaultMeal) => {
                const matchingMeal = meals.find((meal) => meal.meal_type === defaultMeal.meal_type);
                return (
                    <Meal
                        key={defaultMeal.meal_type}
                        meal={matchingMeal || defaultMeal}
                    />
                )
            })}    
        </ul>
    )
}
