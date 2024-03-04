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

export async function addMealItem({ mealItem, quantity }) {
    const doesMealExist = mealItem.mealId > 0;

    const regex = /^[1-9]\d*$/;

    if (!regex.test(quantity) || !(quantity > 0)) {
        throw new Error('Quanity must be a positive integer');
    }
    
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

    const { data, error } = await supabase
        .from('meal_items')
        .insert([
            {
                meal_id: newMealItemMealId,
                name: mealItem.name,
                quantity: quantity,
                calories: Math.round(quantity/100 * mealItem.nutrients.calories.value),
                proteins: parseFloat((quantity/100 * mealItem.nutrients.proteins.value).toFixed(2)),
                fats: parseFloat((quantity/100 * mealItem.nutrients.fats.value).toFixed(2)),
                carbohydrates: parseFloat((quantity/100 * mealItem.nutrients.carbohydrates.value).toFixed(2)),
                calories_per_100: mealItem.nutrients.calories.value,
                proteins_per_100: parseFloat((mealItem.nutrients.proteins.value).toFixed(2)),
                fats_per_100: parseFloat((mealItem.nutrients.fats.value).toFixed(2)),
                carbohydrates_per_100: parseFloat((mealItem.nutrients.carbohydrates.value).toFixed(2)),
            },
        ]);
    
    if (error) {
        console.error(error);
        throw new Error('Meal item could not be added');
    }

    return data;
}

export async function editMealItem({ id, quantity }) {
    const regex = /^[1-9]\d*$/;

    if (!regex.test(quantity) || !(quantity > 0)) {
        throw new Error('Quanity must be a positive integer');
    }

    const { data: mealItem, error: mealItemError } = await supabase
        .from('meal_items')
        .select('calories_per_100, proteins_per_100, fats_per_100, carbohydrates_per_100');
    
    if (mealItemError) {
        throw new Error('Meal item could not be edited');
    }

    const { data, error } = await supabase
        .from('meal_items')
        .update({
            quantity: quantity,
            calories: Math.round(quantity/100 * mealItem[0].calories_per_100),
            proteins: parseFloat((quantity/100 * mealItem[0].proteins_per_100).toFixed(2)),
            fats: parseFloat((quantity/100 * mealItem[0].fats_per_100).toFixed(2)),
            carbohydrates: parseFloat((quantity/100 * mealItem[0].carbohydrates_per_100).toFixed(2)), 
        })
        .eq('id', id);

    if (error) {
        console.error(error);
        throw new Error('Meal item could not be edited');
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
