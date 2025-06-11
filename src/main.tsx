import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from '@/components/ui/provider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import LoginPage from './pages/login';
import BoardPage from './pages/board';
import LoginCallback from './pages/login/LoginCallback';
import RouteGuard from './RouteGuard';
import { Toaster } from './components/ui/toaster';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider>
            <Toaster />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/login/callback" element={<LoginCallback />} />
                    <Route
                        path="/board"
                        element={
                            <RouteGuard>
                                <BoardPage />
                            </RouteGuard>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </Provider>
    </StrictMode>,
);
