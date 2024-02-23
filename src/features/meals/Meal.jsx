import { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { deleteMeal } from '../../api/apiMeals';
import { formatTodayDate } from '../../utils/dateUtils';
import { calculateMealNutritionSum } from '../../utils/calculateNutritionsUtils';
import MealHeader from './MealHeader';
import MealProducts from './MealProducts';
import MealProductsItem from './MealProductsItem';
import Search from '../search/Search';
import Mask from '../../ui/Mask';
import './meal.scss';

export default function Meal({ meal, selectedDate }) {
    const queryClient = useQueryClient();
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [isMealOpen, setIsMealOpen] = useState(meal.meal_items.length > 0);

    useEffect(function() {
        setIsMealOpen(meal.meal_items.length > 0);
    }, [meal.meal_items]);

    const {isLoading: isDeleting, mutate } = useMutation({
        mutationFn: deleteMeal,
        onSuccess: () => {
            toast.success('Meal successfully deleted');

            queryClient.invalidateQueries({
                queryKey: ['meals', formatTodayDate(selectedDate)],
            });
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

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
                        mealId={meal.id || 0}
                        mealType={meal.meal_type}
                        selectedDate={selectedDate}
                        onSetIsAddOpen={setIsAddOpen} />
                    <Mask isState={isAddOpen} />
                </>
            )}
            <MealHeader
                info={mealInfo}
                isAddOpen={isAddOpen}
                isMealOpen={isMealOpen}
                onHandleAddOpen={handleAddOpen}
                onHandleMealOpen={handleMealOpen}
                isDeleting={isDeleting}
                onMutate={mutate}
            />
            {isMealOpen && (
                <MealProducts>
                    {meal.meal_items.map((meal_item) => (
                        <MealProductsItem
                            key={meal_item.id}
                            product={meal_item}
                            selectedDate={selectedDate}
                        />
                    ))}
                </MealProducts>
            )}
        </li>
    )
}
