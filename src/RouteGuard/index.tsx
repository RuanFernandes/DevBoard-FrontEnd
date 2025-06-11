import { useAuthStore } from '@/api/auth/auth';
import { useLocation, Navigate } from 'react-router-dom';
import React from 'react';

interface RouteGuardProps {
    children: React.ReactNode;
}

const RouteGuard = ({ children }: RouteGuardProps) => {
    const user = useAuthStore((s) => s.user);
    const location = useLocation();

    if (!user) {
        return (
            <Navigate
                to="/"
                state={{ from: location, reason: 'notlogged' }}
                replace
            />
        );
    }

    return <>{children}</>;
};

export default RouteGuard;
