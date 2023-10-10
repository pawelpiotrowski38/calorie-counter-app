import NavigationItem from "./NavigationItem";
import './navigation.scss';

export default function Navigation({ isMobileMenuOpen }) {
    return (
        <nav className={`navigation ${isMobileMenuOpen ? 'navigation--visible' : ''}`}>
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