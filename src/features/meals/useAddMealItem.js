import { useQueryClient, useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { addMealItem as addMealItemApi } from '../../api/apiMeals';
import { formatTodayDate } from '../../utils/dateUtils';

export function useAddMealItem(mealDate) {
    const queryClient = useQueryClient();

    const {isLoading: isAddingMealItem, mutate: addMealItem } = useMutation({
        mutationFn: addMealItemApi,
        onSuccess: () => {
            toast.success('Meal item successfully added');

            queryClient.invalidateQueries({
                queryKey: ['meals', formatTodayDate(mealDate)],
            });
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    return { isAddingMealItem, addMealItem };
}
