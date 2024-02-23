import supabase from './supabase';

export async function getMeals(date) {
    const { data, error } = await supabase
        .from('meals')
        .select(`
            *,
            meal_items ( * )
        `)
        .eq('date', date);

    if (error) {
        console.error(error);
        throw new Error('Meals could not be loaded');
    }

    return data;
}

export async function deleteMeal(id) {
    const { data, error } = await supabase
        .from('meals')
        .delete()
        .eq('id', id);
    
    if (error) {
        console.error(error);
        throw new Error('Meal could not be deleted');
    }

    return data;
}

export async function addMealItem(mealItem) {
    const doesMealExist = mealItem.mealId > 0;
    
    let newMealId = 0;

    if (!doesMealExist) {
        const { data, error } = await supabase
            .from('meals')
            .insert([
                { date: mealItem.mealDate, meal_type: mealItem.mealType },
            ])
            .select('id');

        if (error) {
            console.error(error);
            throw new Error('Meal could not be added');
        }

        newMealId = data[0].id;
    }

    const newMealItemMealId = newMealId || mealItem.mealId;

    let caloriesValue = 0;
    let proteinsValue = 0;
    let fatsValue = 0;
    let carbohydratesValue = 0;

    mealItem.nutrients.forEach((nutrient) => {
        if (nutrient.nutrientId === 1008) {
            caloriesValue = nutrient.value;
        } else if (nutrient.nutrientId === 1003) {
            proteinsValue = nutrient.value;
        } else if (nutrient.nutrientId === 1004) {
            fatsValue = nutrient.value;
        } else if (nutrient.nutrientId === 1005) {
            carbohydratesValue = nutrient.value;
        }
    });

    const { data, error } = await supabase
        .from('meal_items')
        .insert([
            {
                meal_id: newMealItemMealId,
                name: mealItem.name,
                quantity: 100,
                calories: caloriesValue,
                proteins: proteinsValue,
                fats: fatsValue,
                carbohydrates: carbohydratesValue,
            },
        ]);
    
    if (error) {
        console.error(error);
        throw new Error('Meal item could not be added');
    }

    return data;
}

export async function deleteMealItem(id) {
    const { data, error } = await supabase
        .from('meal_items')
        .delete()
        .eq('id', id);

    if (error) {
        console.error(error);
        throw new Error('Meal item could not be deleted');
    }

    return data;
}
