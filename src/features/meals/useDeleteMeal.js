import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { deleteMeal as deleteMealApi } from '../../api/apiMeals';
import { formatTodayDate } from '../../utils/dateUtils';

export function useDeleteMeal(mealDate) {
    const queryClient = useQueryClient();

    const {isLoading: isDeletingMeal, mutate: deleteMeal } = useMutation({
        mutationFn: deleteMealApi,
        onSuccess: () => {
            toast.success('Meal successfully deleted');

            queryClient.invalidateQueries({
                queryKey: ['meals', formatTodayDate(mealDate)],
            });
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    return { isDeletingMeal, deleteMeal };
}
