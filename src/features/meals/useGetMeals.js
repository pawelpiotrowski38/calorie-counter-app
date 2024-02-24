import { useQuery } from '@tanstack/react-query';
import { getMeals } from '../../api/apiMeals';
import { formatTodayDate } from '../../utils/dateUtils';

export function useGetMeals(date) {
    const { isLoading: isLoadingMeals, data: meals, error: errorMeals, } = useQuery({
        queryKey: ['meals', formatTodayDate(date)],
        queryFn: () => getMeals(formatTodayDate(date)),
    });

    return { isLoadingMeals, meals, errorMeals };
}
