import axios, { AxiosInstance } from 'axios';

const HttpService = (baseUrl: string): AxiosInstance => {
  const instance = axios.create({
    baseURL: baseUrl,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  instance.interceptors.request.use(
    (config) => config,
    (error) => error
  );

  instance.interceptors.response.use(
    (response) => response.data,
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
};
