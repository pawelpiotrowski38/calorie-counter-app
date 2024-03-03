import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from '../../api/apiAuth';
import { toast } from 'react-toastify';

export function useLogin() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    
    const { isPending: isLoggingIn, mutate: login } = useMutation({
        mutationFn: ({ email, password }) => loginApi({ email, password }),
        onSuccess: (user) => {
            queryClient.setQueryData(['user'], user.user)
            navigate('/', { replace: true });
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    return { isLoggingIn, login };
}
