export const calculateDayNutritionSum = (meals, nutrition) => {
    return meals.reduce((acc, currentObject) => {
        const mealItems = currentObject.meal_items;
        const nestedValue = mealItems.reduce((nestedAcc, nestedObject) => {
            return nestedAcc + nestedObject[nutrition];
        }, 0);
        return acc + nestedValue;
    }, 0);
}

export function calculateMealNutritionSum(meal, nutrition) {
    return meal.meal_items.reduce((acc, currentValue) => {
        return acc + currentValue[nutrition];
    }, 0);
}
