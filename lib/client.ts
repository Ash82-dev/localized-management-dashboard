import axios, { type AxiosRequestConfig } from "axios";

const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 15_000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const api = {
  get: <T>(endpoint: string, config?: AxiosRequestConfig) =>
    httpClient.get<T>(endpoint, config).then((res) => res.data),

  post: <T>(endpoint: string, data?: unknown, config?: AxiosRequestConfig) =>
    httpClient.post<T>(endpoint, data, config).then((res) => res.data),

  patch: <T>(endpoint: string, data?: unknown, config?: AxiosRequestConfig) =>
    httpClient.patch<T>(endpoint, data, config).then((res) => res.data),
};
