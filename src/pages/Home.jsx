import { useEffect, useState } from 'react';
import { getMeals } from '../api/apiMeals';
import { userLimitValues } from '../data/constants';
import { calculateDayNutritionSum } from '../utils/calculateNutritionsUtils';
import { formatTodayDate } from '../utils/dateUtils';
import DatePicker from '../ui/DatePicker';
import SummaryChart from '../features/summaries/SummaryChart';
import MealsList from '../features/meals/MealsList';
import './home.scss';

export default function Home() {
    const [meals, setMeals] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());

    useEffect(function () {
        getMeals(formatTodayDate(selectedDate))
            .then((data) => setMeals(data));
    }, [selectedDate]);

    const dayValues = {
        calories: calculateDayNutritionSum(meals, 'calories'),
        proteins: calculateDayNutritionSum(meals, 'proteins'),
        fats: calculateDayNutritionSum(meals, 'fats'),
        carbohydrates: calculateDayNutritionSum(meals, 'carbohydrates'),
    };

    return (
        <div className='home'>
            <div className='home__date-picker-container'>
                <DatePicker 
                    selectedDate={selectedDate}
                    onSetSelectedDate={setSelectedDate}
                />
            </div>
            <div className='home__summary-chart-container'>
                <SummaryChart
                    heading={'Daily summary'}
                    values={dayValues}
                    userLimitValues={userLimitValues}
                />
            </div>
            <div className='home__meals-container'>
                <MealsList meals={meals} />
            </div>
        </div>
    )
}
