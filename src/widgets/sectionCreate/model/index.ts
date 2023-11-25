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

export function addSecondsToSchedule(groups: IGroup[]): IGroup[] {
    const updatedGroups = groups.map((group) => ({
        ...group,
        id: undefined,
        schedule: group.schedules.map((scheduleItem) => ({
            ...scheduleItem,
            id: undefined,
            start_time: scheduleItem.start_time + ':00',
            end_time: scheduleItem.end_time + ':00',
        })),
    }));

    return updatedGroups;
}

export const replaceDayOfWeekWithNumber = (groups: IGroup[]): IGroup[] => {
    const updatedGroups = groups.map((group) => {
        const updatedGroup: IGroup = { ...group };
        updatedGroup.schedules = group.schedules.map((schedule) => {
            const updatedSchedule: ISchedule = { ...schedule };
            if (schedule.week_day && daysOfWeek[schedule.week_day]) {
                updatedSchedule.week_day = daysOfWeek[schedule.week_day];
            }
            return updatedSchedule;
        });
        return updatedGroup;
    });
    return updatedGroups;
};

const gogo: any =
    '"{"name":"123","description":"123","category":1,"address":"123","groups":[{"name":"123","teacher":1,"students":[],"time":"","total_students":0,"max_students":"123","schedule":[{"week_day":1,"start_time":"01:05:00","end_time":"02:05:00"}],"address":"123"}]}"';
