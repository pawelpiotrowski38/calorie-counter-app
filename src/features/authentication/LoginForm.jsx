import { useState } from 'react';
import { useLogin } from './useLogin';
import Form from '../../ui/Form';
import FormHeader from '../../ui/FormHeader';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import Spinner from '../../ui/Spinner';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { login, isLogging } = useLogin();
    
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
                Log in
            </FormHeader>
            <Input
                label={'Email'}
                id={'email'}
                type={'text'}
                disabled={isLogging}
                width={'100%'}
                value={email}
                onSetValue={setEmail}
            />
            <Input
                label={'Password'}
                id={'password'}
                type={'password'}
                disabled={isLogging}
                width={'100%'}
                value={password}
                onSetValue={setPassword}
            />
            <Button disabled={isLogging}>
                {isLogging ? (
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