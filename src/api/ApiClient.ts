import axios from 'axios';
import type { AxiosInstance } from 'axios';
import { useAuthStore } from '@/api/auth/auth';

export const API_BASE_URL = 'https://localhost:3000/';

class ApiClient {
    private axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: API_BASE_URL,
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    private getHeaders(extra?: Record<string, string>) {
        // Busca o token do Zustand automaticamente
        const authToken = useAuthStore.getState().token;
        return {
            ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
            ...extra,
        };
    }

    async get<T>(path: string): Promise<T> {
        const res = await this.axiosInstance.get<T>(path, {
            headers: this.getHeaders(),
        });
        return res.data;
    }

    async post<T>(path: string, body?: Record<string, unknown>): Promise<T> {
        const res = await this.axiosInstance.post<T>(path, body, {
            headers: this.getHeaders(),
        });
        return res.data;
    }

    async put<T>(path: string, body?: Record<string, unknown>): Promise<T> {
        const res = await this.axiosInstance.put<T>(path, body, {
            headers: this.getHeaders(),
        });
        return res.data;
    }

    async delete<T>(path: string): Promise<T> {
        const res = await this.axiosInstance.delete<T>(path, {
            headers: this.getHeaders(),
        });
        return res.data;
    }
}

export default ApiClient;
