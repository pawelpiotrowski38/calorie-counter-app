import { useState } from 'react';
import MealHeader from './MealHeader';
import MealProducts from './MealProducts';
import './meal.scss';

export default function Meal({ meal }) {
    const [isOpen, setIsOpen] = useState(true);

    const handleOpen = function() {
        setIsOpen(!isOpen);
    }

    const mealCalories = meal.products.reduce((acc, currentValue) => {
        return acc + currentValue.calories;
    }, 0);

    const mealProteins = meal.products.reduce((acc, currentValue) => {
        return acc + currentValue.proteins;
    }, 0);

    const mealFats = meal.products.reduce((acc, currentValue) => {
        return acc + currentValue.fats;
    }, 0);

    const mealCarbohydrates = meal.products.reduce((acc, currentValue) => {
        return acc + currentValue.carbohydrates;
    }, 0);

    const mealInfo = {
        name: meal.name,
        calories: mealCalories,
        proteins: mealProteins,
        fats: mealFats,
        carbohydrates: mealCarbohydrates,
    }

    return (
        <section className='meal'>
            <MealHeader
                info={mealInfo}
                isOpen={isOpen}
                onHandleOpen={handleOpen}
            />
            {isOpen && (
                <MealProducts
                    products={meal.products}
                />
            )}
        </section>
    )
}