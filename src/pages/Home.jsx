import { meals, userLimitValues } from "../data/constants";
import DatePicker from "../ui/DatePicker";
import SummaryChart from "../features/summaries/SummaryChart";
import MealsList from "../features/meals/MealsList";
import './home.scss';

export default function Home() {
    const dayCalories = meals.reduce((acc, currentObject) => {
        const products = currentObject.products;

        const nestedCalories = products.reduce((nestedAcc, nestedObject) => {
            return nestedAcc + nestedObject.calories;
        }, 0);

        return acc + nestedCalories;
    }, 0);

    const dayProteins = meals.reduce((acc, currentObject) => {
        const products = currentObject.products;

        const nestedCalories = products.reduce((nestedAcc, nestedObject) => {
            return nestedAcc + nestedObject.proteins;
        }, 0);

        return acc + nestedCalories;
    }, 0);

    const dayFats = meals.reduce((acc, currentObject) => {
        const products = currentObject.products;

        const nestedCalories = products.reduce((nestedAcc, nestedObject) => {
            return nestedAcc + nestedObject.fats;
        }, 0);

        return acc + nestedCalories;
    }, 0);

    const dayCarbohydrates = meals.reduce((acc, currentObject) => {
        const products = currentObject.products;

        const nestedCalories = products.reduce((nestedAcc, nestedObject) => {
            return nestedAcc + nestedObject.carbohydrates;
        }, 0);

        return acc + nestedCalories;
    }, 0);

    const dayValues = {
        calories: dayCalories,
        proteins: dayProteins,
        fats: dayFats,
        carbohydrates: dayCarbohydrates,
    }

    return (
        <div className='home'>
            <div className='home__date-picker-container'>
                <DatePicker />
            </div>
            <div className='home__summary-chart-container'>
                <SummaryChart
                    heading={'Daily summary'}
                    dayValues={dayValues}
                    userLimitValues={userLimitValues}
                />
            </div>
            <div className='home__meals-container'>
                <MealsList meals={meals} />
            </div>
        </div>
    )
}
