import { ISchool, IUser, User } from './user';
// TODO: убрать "?", когда будем добавлять бекенд
export interface Section {
    id: number;
    name: string;
    cover: string;
    description?: string;
    address?: string;
    teacher?: User;
    students?: User[];
    category?: Category[];
    grades?: [];
    homeworks?: [];
    rating?: string;
    comments?: number;
    groups?: Group[];
}

export interface Group {
    id: number;
    name: string;
    teacher?: string; //TODO: поменять на User, когда будем делать бекенд
    time?: string;
    total_students?: string;
    max_students?: string;
}

export interface Category {
    id: number;
    name: string;
    isSelect?: boolean;
}

export interface Grade {
    id: number;
    theme: number;
    grade: number;
    date: string;
    student: User;
}

export interface Homework {
    id: number;
    theme: string;
    homework_type: string;
    date: string;
}

/********************************************************************************************** */

export interface ISection {
    id: number;
    name: string;
    description: string;
    category: ICategory;
    address: string;
    author: IUser;
    students: IUser[];
    groups: IGroup[];
    grades: IGrade[];
    homeworks: IHomework[];
    school: ISchool;
    rating: number;
    comments: number;
}

export interface ICategory {
    id: number;
    name: string;
    cover: string;
    isSelect?: boolean;
}

export interface IGroup {
    id?: number | null;
    name: string;
    teacher?: number;
    students: IUser[];
    time?: undefined;
    schedules: ISchedule[];
    total_students: number | null;
    max_students: number | null;
    address?: string | undefined;
}

export interface IHomework {
    id: number;
    theme: string;
    homework_type: string;
    date: string;
}

export interface ISchedule {
    id?: number | null;
    week_day?: string | null | number; // number
    start_time: string;
    end_time: string;
}

export interface IGrade {
    id: number;
    theme: string;
    grade: number;
    date: string;
    student: IUser[];
}
