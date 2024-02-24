import { formatTodayDate } from "../../utils/dateUtils";

export default function SearchResultsItem({ mealId, mealType, food, selectedDate, onAddMealItem, isAddingMealItem }) {
    const foodObj = {
        mealId: mealId,
        mealType: mealType,
        mealDate: formatTodayDate(selectedDate),
        name: `${food.description} ${food.brandName}`,
        quantity: 100,
        nutrients: food.foodNutrients,
    };

    return (
        <li className='search-results-item'>
            {`${food.description} ${food.brandName}`}
            <button
                onClick={() => onAddMealItem(foodObj)}
                disabled={isAddingMealItem}
            >
                Add
            </button>
        </li>
    )
}