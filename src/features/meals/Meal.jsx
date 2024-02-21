import { useEffect, useState } from 'react';
import { calculateMealNutritionSum } from '../../utils/calculateNutritionsUtils';
import MealHeader from './MealHeader';
import MealProducts from './MealProducts';
import './meal.scss';

export default function Meal({ meal }) {
    const [isOpen, setIsOpen] = useState(meal.meal_items.length > 0);

    useEffect(function() {
        setIsOpen(meal.meal_items.length > 0);
    }, [meal.meal_items]);

    const handleOpen = function() {
        setIsOpen(!isOpen);
    };

    const mealInfo = {
        name: meal.meal_type[0].toUpperCase() + meal.meal_type.substring(1),
        calories: calculateMealNutritionSum(meal, 'calories'),
        proteins: calculateMealNutritionSum(meal, 'proteins'),
        fats: calculateMealNutritionSum(meal, 'fats'),
        carbohydrates: calculateMealNutritionSum(meal, 'carbohydrates'),
    };

    return (
        <li className='meal'>
            <MealHeader
                info={mealInfo}
                isOpen={isOpen}
                onHandleOpen={handleOpen}
            />
            {isOpen && (
                <MealProducts
                    products={meal.meal_items}
                />
            )}
        </li>
    )
}
