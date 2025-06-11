import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/api/auth/auth';

function parseQuery(search: string) {
    return Object.fromEntries(new URLSearchParams(search));
}

const LoginCallback = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const setAuth = useAuthStore((s) => s.setAuth);

    useEffect(() => {
        const params = parseQuery(location.search);
        if (params.token && params.username) {
            setAuth(
                {
                    username: params.username,
                    avatarUrl: params.avatarUrl || '',
                    token: params.token,
                },
                params.token,
            );
            navigate('/board', { replace: true });
        } else {
            navigate('/login', { replace: true });
        }
    }, [location.search, setAuth, navigate]);

    return <div>Autenticando...</div>;
};

export default LoginCallback;
