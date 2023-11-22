export interface User {
    id: number;
    email: string;
    firstname: string;
    surname: string;
    surdname: string;
    class?: Class;
    school?: School;
    achievements?: Achievements[];
    password?: string;
}

export interface School {
    id: number;
    name: string;
    classes: Class[];
}

export interface Class {
    id: number;
    name: string;
    litera: string;
}

export interface Achievements {
    id: number;
    name: string;
}
