import { useState } from 'react';
import { IoMenuOutline } from "react-icons/io5";
import Logo from './Logo';
import Navigation from './Navigation';
import Mask from './Mask';
import './header.scss';

export default function Header() {
    const [isNavigationOpen, setIsNavigationOpen] = useState(false);

    const handleToggleNavigation = function() {
        setIsNavigationOpen((open) => !open);
    }

    return (
        <header className='header'>
            <Logo />
            <Navigation
                isNavigationOpen={isNavigationOpen}
                onSetIsNavigationOpen={setIsNavigationOpen}
            />
            <button
                className='header__menu-button'
                onClick={handleToggleNavigation}
            >
                <IoMenuOutline />
            </button>
            <Mask
                isState={isNavigationOpen}
            />
        </header>
    )
}