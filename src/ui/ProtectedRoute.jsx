import { Navigate } from 'react-router-dom';
import { useUser } from '../features/authentication/useUser';
import Spinner from './Spinner';

export default function ProtectedRoute({ children }) {
    const { isGettingUser, isAuthenticated } = useUser();

    if (isGettingUser) {
        return <Spinner />
    }

    if (!isAuthenticated) {
        return <Navigate to='/home' replace />;
    }

    return children;
}
