import { instanceLogged } from '@/shared/axios';

export const GetUserData = async () => {
    try {
        const GetUserData: any = await instanceLogged.get(`/users/auth/users/me/`);
        return GetUserData.data;
    } catch (error) {
        return error;
    }
};
