import { useState } from 'react';
import { useDeleteMeal } from './useDeleteMeal';
import { useAddMealItem } from './useAddMealItem';
import { useDeleteMealItem } from './useDeleteMealItem';
import { calculateMealNutritionSum } from '../../utils/calculateNutritionsUtils';
import MealHeader from './MealHeader';
import MealProducts from './MealProducts';
import MealProductsItem from './MealProductsItem';
import Search from '../search/Search';
import Mask from '../../ui/Mask';
import './meal.scss';

export default function Meal({ meal, selectedDate }) {
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [isMealOpen, setIsMealOpen] = useState(true);

    const { isDeletingMeal, deleteMeal } = useDeleteMeal(selectedDate);
    const { isAddingMealItem, addMealItem } = useAddMealItem(selectedDate);
    const { isDeleteingMealItem, deleteMealItem } = useDeleteMealItem(selectedDate);

    const handleAddOpen = function() {
        setIsAddOpen(!isAddOpen);
    };

    const handleMealOpen = function() {
        setIsMealOpen(!isMealOpen);
    };

    const mealInfo = {
        id: meal.id || 0,
        name: meal.meal_type[0].toUpperCase() + meal.meal_type.substring(1),
        calories: calculateMealNutritionSum(meal, 'calories'),
        proteins: calculateMealNutritionSum(meal, 'proteins'),
        fats: calculateMealNutritionSum(meal, 'fats'),
        carbohydrates: calculateMealNutritionSum(meal, 'carbohydrates'),
    };

    return (
        <li className='meal'>
            {isAddOpen && (
                <>
                    <Search
                        mealId={mealInfo.id || 0}
                        mealType={mealInfo.name}
                        onSetIsAddOpen={setIsAddOpen}
                        selectedDate={selectedDate}
                        isAddingMealItem={isAddingMealItem}
                        onAddMealItem={addMealItem}
                    />
                    <Mask isState={isAddOpen} />
                </>
            )}
            <MealHeader
                mealInfo={mealInfo}
                isMealOpen={isMealOpen}
                isAddOpen={isAddOpen}
                onHandleMealOpen={handleMealOpen}
                onHandleAddOpen={handleAddOpen}
                isDeleteingMeal={isDeletingMeal}
                onDeleteMeal={deleteMeal}
            />
            {isMealOpen && (
                <MealProducts>
                    {meal.meal_items.map((meal_item) => (
                        <MealProductsItem
                            key={meal_item.id}
                            product={meal_item}
                            isDeleteingMealItem={isDeleteingMealItem}
                            onDeleteMealItem={deleteMealItem}
                        />
                    ))}
                </MealProducts>
            )}
        </li>
    )
}
