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

export function calculateProductNutrition(nutrients, servingSize) {
    let caloriesValue, caloriesServingValue = 0;
    let proteinsValue, proteinsServingValue = 0;
    let fatsValue, fatsServingValue = 0;
    let carbohydratesValue, carbohydratesServingValue = 0;

    nutrients.forEach((nutrient) => {
        if (nutrient.nutrientId === 1008) {
            caloriesValue = nutrient.value;
            caloriesServingValue = Math.round(servingSize/100 * nutrient.value);
        } else if (nutrient.nutrientId === 1003) {
            proteinsValue = nutrient.value;
            proteinsServingValue = parseFloat((servingSize/100 * nutrient.value).toFixed(2));
        } else if (nutrient.nutrientId === 1004) {
            fatsValue = nutrient.value;
            fatsServingValue = parseFloat((servingSize/100 * nutrient.value).toFixed(2));
        } else if (nutrient.nutrientId === 1005) {
            carbohydratesValue = nutrient.value;
            carbohydratesServingValue = parseFloat((servingSize/100 * nutrient.value).toFixed(2));
        }
    });

    return {
        calories: { name: 'Energy (Cal)', value: caloriesValue, servingValue: caloriesServingValue, },
        proteins: { name: 'Proteins (g)', value: proteinsValue, servingValue: proteinsServingValue, },
        fats: { name: 'Fats (g)', value: fatsValue, servingValue: fatsServingValue, },
        carbohydrates: { name: 'Carbohydrates (g)', value: carbohydratesValue, servingValue: carbohydratesServingValue, },
    };
}
