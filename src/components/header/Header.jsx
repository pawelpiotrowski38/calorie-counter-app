import { useState } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import HamburgerButton from './HamburgerButton';
import Mask from './Mask';
import './header.scss';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleToggleMobileMenu = function() {
        setIsMobileMenuOpen((open) => !open);
    }

    return (
        <header className='header'>
            <Logo />
            <Navigation
                isMobileMenuOpen={isMobileMenuOpen}
            />
            <HamburgerButton
                isMobileMenuOpen={isMobileMenuOpen}
                onToggleMobileMenu={handleToggleMobileMenu}
            />
            <Mask
                isState={isMobileMenuOpen}
            />
        </header>
    )
}