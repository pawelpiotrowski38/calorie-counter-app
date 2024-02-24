import { useRef, useState } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';
import { useSearchProducts } from './useSearchProducts';
import SearchResults from './SearchResults';
import SearchResultsItem from './SearchResultsItem';
import Spinner from '../../ui/Spinner';
import './search.scss';

export default function Search({ mealId, mealType, onSetIsAddOpen, selectedDate, isAddingMealItem, onAddMealItem }) {
    const searchRef = useRef(null);
    const [search, setSearch] = useState('');
    
    useClickOutside(searchRef, () => {
        onSetIsAddOpen(false);
    });

    const { isLoadingProducts, products } = useSearchProducts(search);

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
            {isLoadingProducts ? (
                <Spinner />
            ) : (
                <SearchResults>
                    {products && products.foods.map(food => (
                        <SearchResultsItem
                            key={food.fdcId}
                            mealId={mealId}
                            mealType={mealType}
                            food={food}
                            selectedDate={selectedDate}
                            onAddMealItem={onAddMealItem}
                            isAddingMealItem={isAddingMealItem}
                        />
                    ))}
                </SearchResults>
            )}
        </div>
    )
}
