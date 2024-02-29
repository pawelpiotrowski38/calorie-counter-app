import { useState } from 'react';
import { useAddMealItem } from '../meals/useAddMealItem';
import { formatTodayDate } from '../../utils/dateUtils';
import { calculateProductNutrition } from '../../utils/calculateNutritionsUtils';
import Input from '../../ui/Input';
import ArrowButton from '../../ui/ArrowButton';
import './searchResultsItem.scss';

export default function SearchResultsItem({ mealId, mealType, food, selectedDate }) {
    const [quantity, setQuantity] = useState('');
    const [showDetails, setShowDetails] = useState(false);

    const { isAddingMealItem, addMealItem } = useAddMealItem(selectedDate);

    const nutrients = calculateProductNutrition(food.foodNutrients, food.servingSize);
    
    const mealItem = {
        mealId: mealId,
        mealType: mealType,
        mealDate: formatTodayDate(selectedDate),
        name: `${food.description} ${food.brandName}`,
        nutrients: nutrients,
    };

    return (
        <li className='search-results-item'>
            <h3 className='search-results-item__name'>
                {`${food.description} ${food.brandName}`}
            </h3>
            <div className='search-results-item__container'>
                <div className='search-results-item__input-container'>
                    <Input
                        label={'Quantity'}
                        id={'quantity'}
                        type={'text'}
                        disabled={isAddingMealItem}
                        width={'6.5rem'}
                        value={quantity}
                        onSetValue={setQuantity}
                    />
                    <span>g</span>
                </div>
                <button
                    className='search-results-item__add-button'
                    onClick={() => addMealItem({ mealItem: mealItem, quantity: quantity })}
                    disabled={isAddingMealItem}
                >
                    Add
                </button>
            </div>
            <div className='search-results-item__details-button-container'>
                <div
                    className='search-results-item__details-button'
                    onClick={() => setShowDetails(!showDetails)}
                >
                    Show details
                    <ArrowButton isOpen={showDetails} />
                </div>
            </div>
            {showDetails && (
                <div className='search-results-item__details'>
                    <div className='search-results-item__nutrition-info-header'>
                        <span>Nutrition</span>
                        <span>per 100g</span>
                        <span>{`per ${food.servingSize}g`}</span>
                    </div>
                    <ul className='search-results-item__nutrition-info-list'>
                        {nutrients && Object.keys(nutrients).map((key, index) => (
                            <li key={index} className='search-results-item__nutrition-info-item'>
                                <span>{nutrients[key].name}</span>
                                <span>{nutrients[key].value}</span>
                                <span>{nutrients[key].servingValue}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </li>
    )
}