import { useState } from 'react';
import { RiEdit2Line } from 'react-icons/ri';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { useEditMealItem } from './useEditMealItem';
import MealNutritions from './MealNutritions';
import MealProductsItemEdit from './MealProductsItemEdit';
import Modal from '../../ui/Modal';
import './mealProductsItem.scss';

export default function MealProductsItem({ product, isDeletingMealItem, onDeleteMealItem, selectedDate }) {
    const [isEditOpen, setIsEditOpen] = useState(false);

    const { isEditingMealItem, editMealItem } = useEditMealItem(selectedDate);

    return (
        <li className='meal-products-item'>
            {isEditOpen && (
                <Modal isOpen={isEditOpen}>
                    <MealProductsItemEdit
                        productId={product.id}
                        quantity={product.quantity}
                        isEditingMealItem={isEditingMealItem}
                        onEditMealItem={editMealItem}
                        onSetIsEditOpen={setIsEditOpen}
                        selectedDate={selectedDate}
                    />
                </Modal>
            )}
            <div className='meal-products-item__info-container'>
                <h3 className='meal-products-item__name'>
                    {product.name}
                </h3>
                <p className='meal-products-item__quantity'>
                    {`${product.quantity}g`}
                </p>
                <MealNutritions
                    calories={`${product.calories} Cal`}
                    proteins={`${product.proteins}g`}
                    fats={`${product.fats}g`}
                    carbohydrates={`${product.carbohydrates}g`}
                />
            </div>
            <div className='meal-products-item__buttons-container'>
                <button
                    className='meal-products-item__button meal-products-item__button--edit'
                    onClick={() => setIsEditOpen(!isEditOpen)}
                    disabled={isDeletingMealItem}
                >
                    <RiEdit2Line />
                </button>
                <button
                    className='meal-products-item__button meal-products-item__button--delete'
                    onClick={() => onDeleteMealItem(product.id)}
                    disabled={isDeletingMealItem}
                >
                    <RiDeleteBin2Line />
                </button>
            </div>
        </li>
    )
}
