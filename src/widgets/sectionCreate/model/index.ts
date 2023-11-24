import { instanceLogged } from '@/shared/axios';
import { ICategory, IGroup, ISchedule } from '@/shared/interface/section';

export const GetSectionCategories = async () => {
    try {
        const GetSectionCategories: any = await instanceLogged.get(`/sections/categories/`);
        return GetSectionCategories.data;
    } catch (error) {
        return error;
    }
};

export const selectedCategory = (categories: ICategory[]) => {
    const selectedCategory = categories?.find((category: ICategory) => category.isSelect === true);
    return selectedCategory?.id || null;
};

export const daysOfWeek: { [key: string]: number } = {
    Понедельник: 1,
    Вторник: 2,
    Среда: 3,
    Четверг: 4,
    Пятница: 5,
    Суббота: 6,
    Воскресенье: 7,
};

export const updateDaysOfWeek = (item: any, daysOfWeek: { [key: string]: number }): any => {
    if (Array.isArray(item)) {
        return item.map((subItem) => updateDaysOfWeek(subItem, daysOfWeek));
    } else if (typeof item === 'object' && item !== null) {
        const updatedObject: any = {};
        for (const key in item) {
            updatedObject[key] = updateDaysOfWeek(item[key], daysOfWeek);
        }
        return updatedObject;
    } else {
        return item;
    }
};
