import { useRef } from 'react';
import useClickOutside from '../../hooks/useClickOutside';
import NavigationItem from './NavigationItem';
import { AiOutlineClose } from 'react-icons/ai';
import './navigation.scss';

export default function Navigation({ isNavigationOpen, onSetIsNavigationOpen }) {
    const navigationRef = useRef(null);

    useClickOutside(navigationRef, () => {
        onSetIsNavigationOpen(false);
    })

    return (
        <nav
            ref={navigationRef}
            className={`navigation ${isNavigationOpen ? 'navigation--visible' : ''}`}
        >
            <div className='navigation__close-button-container'>
                <button
                    className='navigation__close-button'
                    onClick={() => onSetIsNavigationOpen(false)}
                >
                    <AiOutlineClose size={'34px'} className='navigation__close-icon'/>
                </button>
            </div>
            <ul className="navigation__list">
                <NavigationItem>
                    Home
                </NavigationItem>
                <NavigationItem>
                    About
                </NavigationItem>
                <NavigationItem>
                    Contact
                </NavigationItem>
            </ul>
        </nav>
    )
}