import './avatarButton.scss';

export default function AvatarButton({ onToggleNavigation }) {
    return (
        <button onClick={onToggleNavigation} className="avatar-button">
        </button>
    )
}