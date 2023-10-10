import './hamburgerButton.scss';

export default function HamburgerButton({ isNavigationOpen, onToggleNavigation }) {
    return (
        <button onClick={onToggleNavigation} className="hamburger-button">
            <span
                className={`hamburger-button__span ${isNavigationOpen ? 'hamburger-button__span-first--close' : 'hamburger-button__span-first--open'}`}>
            </span>
            <span
                className={`hamburger-button__span ${isNavigationOpen ? 'hamburger-button__span-second--close' : 'hamburger-button__span-second--open'}`}>
            </span>
            <span
                className={`hamburger-button__span ${isNavigationOpen ? 'hamburger-button__span-third--close' : 'hamburger-button__span-third--open'}`}>
            </span>
        </button>
    )
}