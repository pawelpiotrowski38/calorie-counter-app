import { useRef, useState } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';
import { useSearchProducts } from './useSearchProducts';
import SearchResults from './SearchResults';
import SearchResultsItem from './SearchResultsItem';
import Spinner from '../../ui/Spinner';
import Input from '../../ui/Input';
import './search.scss';

export default function Search({ mealId, mealType, onSetIsAddOpen, selectedDate }) {
    const searchRef = useRef(null);
    const [search, setSearch] = useState('');
    
    useClickOutside(searchRef, () => {
        onSetIsAddOpen(false);
    });

    const { isLoadingProducts, products } = useSearchProducts(search);

    return (
        <div ref={searchRef} className='search'>
            <Input
                label={'Search for products'}
                id={'search'}
                width={'100%'}
                value={search}
                onSetValue={setSearch}
            />
            {isLoadingProducts ? (
                <Spinner size={3} thickness={0.375}/>
            ) : (
                <SearchResults>
                    {products && products.foods.map(food => (
                        <SearchResultsItem
                            key={food.fdcId}
                            mealId={mealId}
                            mealType={mealType}
                            food={food}
                            selectedDate={selectedDate}
                        />
                    ))}
                </SearchResults>
            )}
        </div>
    )
}
