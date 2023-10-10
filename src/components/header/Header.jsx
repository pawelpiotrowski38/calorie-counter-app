import { useState } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import HamburgerButton from './HamburgerButton';
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
            />
            <HamburgerButton
                isNavigationOpen={isNavigationOpen}
                onToggleNavigation={handleToggleNavigation}
            />
            <Mask
                isState={isNavigationOpen}
            />
        </header>
    )
}