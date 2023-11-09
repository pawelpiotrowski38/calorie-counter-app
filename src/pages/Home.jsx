import DatePicker from "../ui/DatePicker";
import SummaryChart from "../features/diary/SummaryChart";
import Meal from "../features/diary/Meal";
import './home.scss';

const meals = [
    {
        id: 1232,
        name: 'Breakfast',
        products: [
            {
                id: 34234,
                name: 'Bread',
                quantity: '4 slices',
                calories: 300,
                proteins: 10,
                fats: 1,
                carbohydrates: 58,
            },
            {
                id: 7836,
                name: 'Butter',
                quantity: '12g',
                calories: 100,
                proteins: 1,
                fats: 10,
                carbohydrates: 0,
            },
            {
                id: 65334,
                name: 'Ham',
                quantity: '50g',
                calories: 115,
                proteins: 16,
                fats: 8,
                carbohydrates: 1,
            },
        ],
    },
]

const userLimitValues = {
    caloriesLimit: 2500,
    proteinsLimit: 100,
    fatsLimit: 75,
    carbohydratesLimit: 340,
}

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
        <div className="home">
            <DatePicker />
            <SummaryChart
                heading={'Daily summary'}
                dayValues={dayValues}
                userLimitValues={userLimitValues}
            />
            {meals.map((meal) => (
                <Meal key={meal.id}
                    meal={meal}
                />
            ))}
        </div>
    )
}