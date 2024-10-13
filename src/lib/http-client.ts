class HttpClient {
    private baseURL: string;

    constructor() {
       this.baseURL = process.env.REACT_APP_API_BASE_URL || '/api';
    }

    private async request<T>(method: string, url: string, data?: any, config?: RequestInit): Promise<T> {
        const requestConfig: RequestInit = {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...(config?.headers || {}),
            },
            body: data ? JSON.stringify(data) : undefined,
            ...config,
        };

        try {
            const response = await fetch(`${this.baseURL}${url}`, requestConfig);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json() as T;
        } catch (error) {
            throw error;
        }
    }

    public get<T>(url: string, config?: RequestInit): Promise<T> {
        return this.request<T>('GET', url, null, config);
    }

    public post<T>(url: string, data: any, config?: RequestInit): Promise<T> {
        return this.request<T>('POST', url, data, config);
    }

    public put<T>(url: string, data: any, config?: RequestInit): Promise<T> {
        return this.request<T>('PUT', url, data, config);
    }

    public delete<T>(url: string, config?: RequestInit): Promise<T> {
        return this.request<T>('DELETE', url, null, config);
    }
}

export default HttpClient;