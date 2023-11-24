import { getAccessToken } from '../authHelpers/auth';

export const BASE_API = 'https://inverse-tracker.ru/api';
export const ACCESS_TOKEN = getAccessToken() || undefined;
