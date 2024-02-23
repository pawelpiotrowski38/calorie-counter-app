import { useRef, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { searchProducts } from '../../api/apiSearch';
import { addMealItem } from '../../api/apiMeals';
import useClickOutside from '../../hooks/useClickOutside';
import useDebounce from '../../hooks/useDebounce';
import { formatTodayDate } from '../../utils/dateUtils';
import SearchResults from './SearchResults';
import SearchResultsItem from './SearchResultsItem';
import Spinner from '../../ui/Spinner';
import './search.scss';

export default function Search({ mealId, mealType, selectedDate, onSetIsAddOpen }) {
    const queryClient = useQueryClient();
    
    const searchRef = useRef(null);

    const [search, setSearch] = useState('');
    const debouncedSearch = useDebounce(search, 500);

    useClickOutside(searchRef, () => {
        onSetIsAddOpen(false);
    });

    const { isLoading, data, error } = useQuery({
        enabled: !!debouncedSearch,
        queryKey: ['search', debouncedSearch],
        queryFn: () => {
            if (debouncedSearch) {
                return searchProducts(search);
            }
            return null;
        },
    });

    const {isLoading: isAdding, mutate } = useMutation({
        mutationFn: addMealItem,
        onSuccess: () => {
            toast.success('Meal item successfully added');

            queryClient.invalidateQueries({
                queryKey: ['meals', formatTodayDate(selectedDate)],
            });
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    return (
        <div ref={searchRef} className='search'>
            <input
                className='search-form__input'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type='search'
                id='product'
                name='product'
            />
            {isLoading ? (
                <Spinner />
            ) : (
                <SearchResults>
                    {data && data.foods.map(food => (
                        <SearchResultsItem
                            key={food.fdcId}
                            mealId={mealId}
                            mealType={mealType}
                            selectedDate={selectedDate}
                            food={food}
                            onMutate={mutate}
                            isAdding={isAdding}
                        />
                    ))}
                </SearchResults>
            )}
        </div>
    )
}
