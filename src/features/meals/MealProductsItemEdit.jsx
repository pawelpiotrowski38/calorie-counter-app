import { useRef, useState } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';
import Spinner from '../../ui/Spinner';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import './mealProductsItemEdit.scss';

export default function MealProductsItemEdit({ productId, quantity, isEditingMealItem, onEditMealItem, onSetIsEditOpen }) {
    const editRef = useRef(null);
    const [newQuantity, setNewQuantity] = useState(quantity.toString());
    
    useClickOutside(editRef, () => {
        onSetIsEditOpen(false);
    });

    return (
        <div ref={editRef} className='meal-products-item-edit'>
            <div className='meal-products-item-edit__input-container'>
                <Input
                    label={'Quantity'}
                    id={'quantity'}
                    type={'text'}
                    width={'6.5rem'}
                    disabled={isEditingMealItem}
                    value={newQuantity}
                    onSetValue={setNewQuantity}
                />
                <span>g</span>
            </div>
            <Button
                onClick={() => onEditMealItem({ id: productId, quantity: newQuantity })}
                disabled={isEditingMealItem}
                width={'7rem'}
            >
                {isEditingMealItem ? (
                    <Spinner
                        color='primary-text-color'
                        size={1.5}
                        thickness={0.125}
                    />
                ) : (
                    'Edit'
                )}
            </Button>
        </div>
    )
}
