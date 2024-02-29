import { useNavigate } from 'react-router-dom';
import { useUser } from '../features/authentication/useUser';
import { useEffect } from 'react';
import Spinner from './Spinner';

export default function ProtectedRoute({ children }) {
    const navigate = useNavigate();

    const { isGettingUser, isAuthenticated } = useUser();

    useEffect(function() {
        if (!isAuthenticated && !isGettingUser) {
            navigate('/login');
        }
    }, [isAuthenticated, isGettingUser, navigate]);

    if (isGettingUser) {
        return <Spinner />
    }

    if (isAuthenticated) {
        return children;
    }
}
