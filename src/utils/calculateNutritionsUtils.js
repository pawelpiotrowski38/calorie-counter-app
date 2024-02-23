export const calculateDayNutritionSum = (meals, nutrition, decimalPlaces = 1) => {
    const sum = meals.reduce((acc, currentObject) => {
        const mealItems = currentObject.meal_items;
        const nestedValue = mealItems.reduce((nestedAcc, nestedObject) => {
            return nestedAcc + nestedObject[nutrition];
        }, 0);
        return acc + nestedValue;
    }, 0);

    return parseFloat(sum.toFixed(decimalPlaces));
}

export function calculateMealNutritionSum(meal, nutrition, decimalPlaces = 1) {
    const sum = meal.meal_items.reduce((acc, currentValue) => {
        return acc + currentValue[nutrition];
    }, 0);

    return parseFloat(sum.toFixed(decimalPlaces));
}
