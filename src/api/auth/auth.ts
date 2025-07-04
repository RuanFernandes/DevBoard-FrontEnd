import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
    username: string;
    avatarUrl: string;
    token: string;
}

interface AuthState {
    user: User | null;
    token: string | null;
    setAuth: (user: User, token: string) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            token: null,
            setAuth: (user, token) => set({ user, token }),
            logout: () => set({ user: null, token: null }),
        }),
        { name: 'auth-storage' },
    ),
);
