import { useMutation, useQueryClient } from '@tanstack/react-query';
import { RiEdit2Line } from 'react-icons/ri';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { toast } from 'react-toastify';
import { deleteMealItem } from '../../api/apiMeals';
import { formatTodayDate } from '../../utils/dateUtils';
import MealNutritions from './MealNutritions';
import './mealProductsItem.scss';

export default function MealProductsItem({ product, selectedDate }) {
    const queryClient = useQueryClient();

    const {isLoading: isDeleting, mutate } = useMutation({
        mutationFn: deleteMealItem,
        onSuccess: () => {
            toast.success('Meal item successfully deleted');

            queryClient.invalidateQueries({
                queryKey: ['meals', formatTodayDate(selectedDate)],
            });
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    return (
        <li className='meal-products-item'>
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
                    disabled={isDeleting}
                >
                    <RiEdit2Line />
                </button>
                <button
                    className='meal-products-item__button meal-products-item__button--delete'
                    onClick={() => mutate(product.id)}
                    disabled={isDeleting}
                >
                    <RiDeleteBin2Line />
                </button>
            </div>
        </li>
    )
}