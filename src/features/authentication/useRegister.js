import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { register as registerApi } from '../../api/apiAuth';
import { toast } from 'react-toastify';

export function useRegister() {
    const navigate = useNavigate();
    
    const { isPending: isRegistering, mutate: register } = useMutation({
        mutationFn: ({ email, password }) => registerApi({ email, password }),
        onSuccess: () => {
            toast.success('User successfully created! Please verify your email.');
            navigate('/', { replace: true });
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    return { isRegistering, register };
}
