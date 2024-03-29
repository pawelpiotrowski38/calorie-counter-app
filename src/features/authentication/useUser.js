import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '../../api/apiAuth';

export function useUser() {
    const { isLoading: isGettingUser, data: user } = useQuery({
        queryKey: ['user'],
        queryFn: getCurrentUser,
    });

    return { isGettingUser, user, isAuthenticated: user?.role === 'authenticated' };
}
