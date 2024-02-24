import { useState } from 'react';
import { useGetMeals } from './useGetMeals';
import { defaultMeals, userLimitValues } from '../../data/constants';
import DatePicker from '../../ui/DatePicker';
import SummaryChart from '../summaries/SummaryChart';
import MealsList from './MealsList';
import Meal from './Meal';
import MealNutritions from './MealNutritions';
import Spinner from '../../ui/Spinner';
import './meals.scss';

export default function Meals() {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const { isLoadingMeals, meals } = useGetMeals(selectedDate);

    return (
        <section className='meals'>
            <DatePicker
                selectedDate={selectedDate}
                onSetSelectedDate={setSelectedDate}
            />
            {isLoadingMeals ? (
                <Spinner />
            ): (
                <>
                    <SummaryChart
                        heading={'Daily summary'}
                        meals={meals || []}
                        userLimitValues={userLimitValues}
                    />
                    <MealNutritions
                        calories={''}
                        proteins={'P'}
                        fats={'F'}
                        carbohydrates={'C'}
                    />
                    <MealsList>                                     
                        {defaultMeals.map((defaultMeal) => {
                            const matchingMeal = meals.find((meal) => meal.meal_type === defaultMeal.meal_type);
                            return (
                                <Meal
                                    key={defaultMeal.meal_type}
                                    meal={matchingMeal || defaultMeal}
                                    selectedDate={selectedDate}
                                />
                            )
                        })}
                    </MealsList>
                </>
            )}
        </section>
    )
}
