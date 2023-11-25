import { instanceLogged } from '@/shared/axios';

export const GetSectionByID = async ({ id }: { id: number }) => {
    try {
        const GetSectionByIDData: any = await instanceLogged.get(`/sections/${id}/`);
        return GetSectionByIDData.data;
    } catch (error) {
        return error;
    }
};

export const DeleteSectionByID = async ({ id }: { id: number }) => {
    try {
        const GetSectionByIDData: any = await instanceLogged.delete(`/sections/${id}/`);
        return GetSectionByIDData.data;
    } catch (error) {
        return error;
    }
};
