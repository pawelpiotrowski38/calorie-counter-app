import { useState } from 'react';
import { useRegister } from './useRegister';
import { validateEmail, validatePassword, validateRepeatPassword } from '../../utils/inputValidation';
import Form from '../../ui/Form';
import FormHeader from '../../ui/FormHeader';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import Spinner from '../../ui/Spinner';

export default function RegisterForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [formErrors, setFormErrors] = useState({
        emailError: '',
        passwordError: '',
        repeatPasswordError: '',
    });

    const { register, isRegistering } = useRegister();

    const validateForm = () => {
        const emailMessage = validateEmail(email);
        const passwordMessage = validatePassword(password);
        const repeatPasswordMessage = validateRepeatPassword(password, repeatPassword);

        setFormErrors({
            emailError: emailMessage,
            passwordError: passwordMessage,
            repeatPasswordError: repeatPasswordMessage,
        });

        return !emailMessage && !passwordMessage && !repeatPasswordMessage;
    };
    
    const handleSubmit = function(event) {
        event.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        register({ email, password, repeatPassword });
    };
    
    return (
        <Form onSubmit={handleSubmit}>
            <FormHeader>
                Register
            </FormHeader>
            <Input
                label={'Email'}
                id={'email'}
                type={'text'}
                disabled={isRegistering}
                width={'100%'}
                value={email}
                onSetValue={setEmail}
                error={formErrors.emailError}
            />
            <Input
                label={'Password'}
                id={'password'}
                type={'password'}
                disabled={isRegistering}
                width={'100%'}
                value={password}
                onSetValue={setPassword}
                error={formErrors.passwordError}
            />
            <Input
                label={'Repeat Password'}
                id={'repeat-password'}
                type={'password'}
                disabled={isRegistering}
                width={'100%'}
                value={repeatPassword}
                onSetValue={setRepeatPassword}
                error={formErrors.repeatPasswordError}
            />
            <Button disabled={isRegistering}>
                {isRegistering ? (
                    <Spinner
                        color='primary-text-color'
                        size={1.5}
                        thickness={0.125}
                    />
                ) : (
                    'Register'
                )}
            </Button>
        </Form>
    )
}