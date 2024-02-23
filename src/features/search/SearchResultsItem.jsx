import { formatTodayDate } from "../../utils/dateUtils";

export default function SearchResultsItem({ mealId, mealType, selectedDate, food, onMutate, isAdding }) {

    const foodObj = {
        mealId: mealId,
        mealType: mealType,
        mealDate: formatTodayDate(selectedDate),
        name: `${food.description} ${food.brandName}`,
        quantity: 100,
        nutrients: food.foodNutrients,
    };

    return (
        <li key={food.fdcId} className='search-results-item'>
            {`${food.description} ${food.brandName}`}
            <button
                onClick={() => onMutate(foodObj)}
                disabled={isAdding}
            >
                Add
            </button>
        </li>
    )
}