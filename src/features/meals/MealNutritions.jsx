import './mealNutritions.scss';

export default function MealNutritions({ calories, proteins, fats, carbohydrates }) {
    return (
        <div className='meal-nutritions'>
            <span className='meal-nutritions__nutrition'>
                {calories}
            </span>
            <span className='meal-nutritions__nutrition'>
                {proteins}
            </span>
            <span className='meal-nutritions__nutrition'>
                {fats}
            </span>
            <span className='meal-nutritions__nutrition'>
                {carbohydrates}
            </span>
        </div>
    )
}
