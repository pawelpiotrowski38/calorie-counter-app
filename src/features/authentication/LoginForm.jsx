import { useState } from 'react';
import { useLogin } from './useLogin';
import { validateEmail, validatePassword } from '../../utils/inputValidation';
import Form from '../../ui/Form';
import FormHeader from '../../ui/FormHeader';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import Spinner from '../../ui/Spinner';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formErrors, setFormErrors] = useState({
        emailError: '',
        passwordError: '',
    });

    const { login, isLoggingIn } = useLogin();

    const validateForm = () => {
        const emailMessage = validateEmail(email);
        const passwordMessage = validatePassword(password);

        setFormErrors({
            emailError: emailMessage,
            passwordError: passwordMessage,
        });

        return !emailMessage && !passwordMessage;
    };
    
    const handleSubmit = function(event) {
        event.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        login({ email, password });
    };
    
    return (
        <Form onSubmit={handleSubmit}>
            <FormHeader>
                Log in
            </FormHeader>
            <Input
                label={'Email'}
                id={'email'}
                type={'text'}
                disabled={isLoggingIn}
                width={'100%'}
                value={email}
                onSetValue={setEmail}
                error={formErrors.emailError}
            />
            <Input
                label={'Password'}
                id={'password'}
                type={'password'}
                disabled={isLoggingIn}
                width={'100%'}
                value={password}
                onSetValue={setPassword}
                error={formErrors.passwordError}
            />
            <Button disabled={isLoggingIn}>
                {isLoggingIn ? (
                    <Spinner
                        color='primary-text-color'
                        size={1.5}
                        thickness={0.125}
                    />
                ) : (
                    'Log in'
                )}
            </Button>
        </Form>
    )
}