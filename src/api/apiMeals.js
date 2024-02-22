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
