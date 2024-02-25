import './modal.scss';

export default function Modal({ isOpen, children }) {
    return (
        <div className={`modal ${isOpen ? 'modal--visible' : 'modal--hidden'}`}>
            <div className='modal__container'>
                {children}
            </div>
        </div>
    )
}
