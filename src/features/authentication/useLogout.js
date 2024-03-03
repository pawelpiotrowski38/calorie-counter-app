import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout as logoutApi } from '../../api/apiAuth';

export function useLogout() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { isPending: isLoggingOut, mutate: logout } = useMutation({
        mutationFn: logoutApi,
        onSuccess: () => {
            queryClient.removeQueries();
            navigate('/home', { replace: true });
        },
    });

    return { isLoggingOut, logout };
}
