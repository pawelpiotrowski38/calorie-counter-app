import { Link } from 'react-router-dom';
import './logo.scss';

export default function Logo() {
    return (
        <div className='logo'>
            <Link to='/diary'>
                <img className='logo__image' src='images/logo.png' alt='Calorie Counter' />
            </Link>
        </div>
    )
}