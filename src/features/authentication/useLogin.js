import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { login as loginApi } from '../../api/apiAuth';
import { toast } from 'react-toastify';

export function useLogin() {
    const navigate = useNavigate();
    
    const { isPending: isLogging, mutate: login } = useMutation({
        mutationFn: ({ email, password }) => loginApi({ email, password }),
        onSuccess: () => {
            navigate('/');
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    return { isLogging, login };
}
