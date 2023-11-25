import { instanceLogged } from '@/shared/axios';

export const GetSectionByID = async (id: number) => {
    try {
        const GetSectionByIDData: any = await instanceLogged.get(`/sections/${id}`);
        return GetSectionByIDData.data;
    } catch (error) {
        return error;
    }
};
