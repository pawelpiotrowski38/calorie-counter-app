import { useState } from 'react';
import { useLogin } from './useLogin';
import Form from '../../ui/Form';
import FormHeader from '../../ui/FormHeader';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import Spinner from '../../ui/Spinner';

export default function RegisterForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { login, isLoggingIn } = useLogin();
    
    const handleSubmit = function(event) {
        event.preventDefault();
        
        if (!email || !password) {
            return;
        }

        login({ email, password });
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
                disabled={isLoggingIn}
                width={'100%'}
                value={email}
                onSetValue={setEmail}
            />
            <Input
                label={'Password'}
                id={'password'}
                type={'password'}
                disabled={isLoggingIn}
                width={'100%'}
                value={password}
                onSetValue={setPassword}
            />
            <Button disabled={isLoggingIn}>
                {isLoggingIn ? (
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