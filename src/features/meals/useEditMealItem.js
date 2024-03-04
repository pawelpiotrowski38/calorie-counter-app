import { useQueryClient, useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { editMealItem as editMealItemApi } from '../../api/apiMeals';
import { formatTodayDate } from '../../utils/dateUtils';

export function useEditMealItem(mealDate) {
    const queryClient = useQueryClient();

    const {isPending: isEditingMealItem, mutate: editMealItem } = useMutation({
        mutationFn: editMealItemApi,
        onSuccess: () => {
            toast.success('Meal item successfully edited');

            queryClient.invalidateQueries({
                queryKey: ['meals', formatTodayDate(mealDate)],
            });
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    return { isEditingMealItem, editMealItem };
}
