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
