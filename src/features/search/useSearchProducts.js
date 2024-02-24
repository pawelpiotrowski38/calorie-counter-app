import { useQuery } from '@tanstack/react-query';
import { useDebounce } from '../../hooks/useDebounce';
import { searchProducts } from '../../api/apiSearch';

export function useSearchProducts(search) {
    const debouncedSearch = useDebounce(search, 500);

    const { isLoading: isLoadingProducts, data: products, error: errorProducts } = useQuery({
        enabled: !!debouncedSearch,
        queryKey: ['search', debouncedSearch],
        queryFn: () => {
            if (debouncedSearch) {
                return searchProducts(search);
            }
            return null;
        },
    });

    return { isLoadingProducts, products, errorProducts };
}
