import { User } from './user';
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
