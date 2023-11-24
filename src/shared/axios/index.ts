import axios, { AxiosInstance } from 'axios';
import { getAccessToken } from '../authHelpers/auth';

const BASE_URL = 'https://inverse-tracker.ru/api';

export const instanceLogged: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 6000,
    headers: { Authorization: `Token ${getAccessToken()}` },
});

export const instance: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 6000,
});
