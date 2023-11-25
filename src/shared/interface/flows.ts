import { IGroup, ISection } from "./section";
import { IUser } from "./user";

export interface IParent {
    id: number;
    firstname: string;
    lastname: string;
    surname: string;
    passport: string;
}

export interface IFlow {
    id: number;
    student: IUser;
    section: ISection;
    group: IGroup;
    representative: IParent;
    document: string;
    phone_number: number;
    approved: boolean;
    open: boolean;
}