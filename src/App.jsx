import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';
import AppLayout from './ui/AppLayout';
import ProtectedRoute from './ui/ProtectedRoute';
import Home from './pages/Home';
import Diary from './pages/Diary';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 60 * 1000,
        },
    },
});

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route element={<AppLayout />}>
                        <Route path='/' element={<Navigate to='/diary' />} />
                        <Route path='/home' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route
                            path='/diary'
                            element={
                                <ProtectedRoute>
                                    <Diary />
                                </ProtectedRoute>
                            }
                        />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
            <ToastContainer
                toastClassName='toast-wrapper'
                autoClose={2500}
                pauseOnHover={false}
                hideProgressBar
                closeButton={false}
                theme='dark'
                style={{
                    fontSize: '0.9375rem',
                }}
            />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}