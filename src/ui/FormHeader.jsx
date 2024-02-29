import './formHeader.scss';

export default function FormHeader({ children }) {
    return (
        <h2 className='form-header'>
            {children}
        </h2>
    )
}
