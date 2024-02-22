import './mealsList.scss';

export default function MealsList({ children }) {
    return (
        <ul className='meals-list'>
            {children}
        </ul>
    )
}
