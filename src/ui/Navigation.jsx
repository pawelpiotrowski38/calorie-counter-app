import { useRef } from 'react';
import { useClickOutside } from '../hooks/useClickOutside';
import { useUser } from '../features/authentication/useUser';
import { useLogout } from '../features/authentication/useLogout';
import { AiOutlineClose } from 'react-icons/ai';
import NavigationItem from './NavigationItem';
import Button from './Button';
import './navigation.scss';

export default function Navigation({ isNavigationOpen, onSetIsNavigationOpen }) {
    const navigationRef = useRef(null);

    const { isAuthenticated } = useUser();
    const { logout } = useLogout();

    useClickOutside(navigationRef, () => {
        onSetIsNavigationOpen(false);
    });

    const handleLogout = function() {
        logout();
        onSetIsNavigationOpen(false);
    }

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
                    <AiOutlineClose />
                </button>
            </div>
            <div className='navigation__auth-buttons-container'>
                {isAuthenticated ? (
                    <Button
                        onClick={handleLogout}
                    >
                        Log out
                    </Button>
                ) : (
                    <>
                        <Button
                            linkTo={'./login'}
                            onClick={() => onSetIsNavigationOpen(false)}
                        >
                            Log in
                        </Button>
                        <Button
                            linkTo={'./register'}
                            onClick={() => onSetIsNavigationOpen(false)}
                        >
                            Register
                        </Button>
                    </>
                )}
                
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