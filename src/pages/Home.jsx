import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getMeals } from '../api/apiMeals';
import { defaultMeals, userLimitValues } from '../data/constants';
import { formatTodayDate } from '../utils/dateUtils';
import DatePicker from '../ui/DatePicker';
import SummaryChart from '../features/summaries/SummaryChart';
import MealNutritions from '../features/meals/MealNutritions';
import MealsList from '../features/meals/MealsList';
import Meal from '../features/meals/Meal';
import Spinner from '../ui/Spinner';
import './home.scss';

export default function Home() {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const { isLoading, data: meals, error, } = useQuery({
        queryKey: ['meals', formatTodayDate(selectedDate)],
        queryFn: () => getMeals(formatTodayDate(selectedDate)),
    });

    return (
        <div className='home'>
            <div className='home__date-picker-container'>
                <DatePicker 
                    selectedDate={selectedDate}
                    onSetSelectedDate={setSelectedDate}
                />
            </div>
            {isLoading ? (
                <div className='home__loading-container'>
                    <Spinner />
                </div>
            ): (
                <>
                    <div className='home__summary-chart-container'>
                        <SummaryChart
                            heading={'Daily summary'}
                            meals={meals || []}
                            userLimitValues={userLimitValues}
                        />
                    </div>
                    <div className='home__meals-container'>
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
                    </div>
                </>
            )}
        </div>
    )
}
