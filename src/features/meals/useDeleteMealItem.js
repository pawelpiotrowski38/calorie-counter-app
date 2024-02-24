import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { deleteMealItem as deleteMealItemApi } from '../../api/apiMeals';
import { formatTodayDate } from '../../utils/dateUtils';

export function useDeleteMealItem(mealDate) {
    const queryClient = useQueryClient();

    const {isLoading: isDeletingMealItem, mutate: deleteMealItem } = useMutation({
        mutationFn: deleteMealItemApi,
        onSuccess: () => {
            toast.success('Meal item successfully deleted');

            queryClient.invalidateQueries({
                queryKey: ['meals', formatTodayDate(mealDate)],
            });
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    return { isDeletingMealItem, deleteMealItem };
}