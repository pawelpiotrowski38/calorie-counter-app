import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';
import AppLayout from './ui/AppLayout';
import Home from './pages/Home';
import About from './pages/About';
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
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
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